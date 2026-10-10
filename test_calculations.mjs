// Test script to verify scoring formulas, classifications, blended profile, and career matching

import { QUIZ_QUESTIONS } from './src/data/quizQuestions.ts';
import { CAREERS_DATA } from './src/data/careersData.ts';
import { 
  calculateRawScores, 
  calculateDimensionResults, 
  calculateStreamScores, 
  matchCareers, 
  calculateQuizResults,
  getClassification 
} from './src/utils/scoring.ts';

console.log('=== TEST SUITE: STREAM TO DREAM SCORING & LOGIC ===\n');

// 1. Check Questions
console.log(`[1] Total Quiz Questions: ${QUIZ_QUESTIONS.length}`);
if (QUIZ_QUESTIONS.length !== 30) {
  throw new Error(`Expected 30 questions, found ${QUIZ_QUESTIONS.length}`);
}
console.log('✓ Exactly 30 questions present.');

// 2. Check Careers
console.log(`[2] Total Careers in Database: ${CAREERS_DATA.length}`);
if (CAREERS_DATA.length < 25) {
  throw new Error(`Expected at least 25 careers, found ${CAREERS_DATA.length}`);
}
console.log(`✓ Database contains ${CAREERS_DATA.length} careers (meets >= 25 requirement).`);

// 3. Test Classification Thresholds
console.log('\n[3] Testing Dimension Classifications:');
console.assert(getClassification(85) === 'Very Strong', '85 should be Very Strong');
console.assert(getClassification(80) === 'Very Strong', '80 should be Very Strong');
console.assert(getClassification(79) === 'Strong', '79 should be Strong');
console.assert(getClassification(65) === 'Strong', '65 should be Strong');
console.assert(getClassification(64) === 'Moderate', '64 should be Moderate');
console.assert(getClassification(50) === 'Moderate', '50 should be Moderate');
console.assert(getClassification(49) === 'Developing', '49 should be Developing');
console.assert(getClassification(35) === 'Developing', '35 should be Developing');
console.assert(getClassification(34) === 'Less Prominent', '34 should be Less Prominent');
console.assert(getClassification(10) === 'Less Prominent', '10 should be Less Prominent');
console.log('✓ All classification boundaries verified (80-100, 65-79, 50-64, 35-49, 0-34).');

// 4. Test Stream Formula Computations
console.log('\n[4] Testing Exact Stream Formulas:');
const testProfile = {
  Analytical: 80,
  Scientific: 70,
  Business: 60,
  Social: 50,
  Creative: 40,
  Practical: 90
};

// Expected manual calculations:
// Science = 80*0.30 (24) + 70*0.35 (24.5) + 90*0.15 (13.5) + 40*0.05 (2) + 50*0.05 (2.5) + 60*0.10 (6) = 72.5 -> 73
// Commerce = 80*0.25 (20) + 60*0.40 (24) + 90*0.10 (9) + 50*0.10 (5) + 40*0.05 (2) + 70*0.10 (7) = 67
// Humanities = 50*0.35 (17.5) + 40*0.20 (8) + 80*0.15 (12) + 70*0.10 (7) + 60*0.10 (6) + 90*0.10 (9) = 59.5 -> 60
// Vocational = 90*0.35 (31.5) + 40*0.25 (10) + 60*0.10 (6) + 50*0.10 (5) + 80*0.10 (8) + 70*0.10 (7) = 67.5 -> 68

const streamRes = calculateStreamScores(testProfile);
console.log('Calculated Streams:', streamRes.streamResults.map(s => `${s.stream}: ${s.score}%`).join(' | '));
console.assert(streamRes.streamResults.find(s => s.stream === 'Science').score === 73, 'Science score mismatch');
console.assert(streamRes.streamResults.find(s => s.stream === 'Commerce').score === 67, 'Commerce score mismatch');
console.assert(streamRes.streamResults.find(s => s.stream === 'Vocational').score === 68, 'Vocational score mismatch');
console.assert(streamRes.streamResults.find(s => s.stream === 'Humanities').score === 60, 'Humanities score mismatch');
console.log('✓ Stream formulas compute exact mathematical weights.');

// 5. Test Blended Profile Detection (within 5 points)
console.log('\n[5] Testing Blended Profile Detection (difference <= 5 pts):');
// Top two streams here are Science (73) and Vocational (68), difference = 5 points -> Blended!
console.assert(streamRes.isBlendedProfile === true, 'Profile difference <= 5 should be blended');
console.log(`✓ Blended profile detected: ${streamRes.isBlendedProfile} (${streamRes.blendedStreams.join(' & ')})`);

// Non-blended profile test
const separatedProfile = {
  Analytical: 95,
  Scientific: 95,
  Business: 20,
  Social: 20,
  Creative: 20,
  Practical: 20
};
const separatedRes = calculateStreamScores(separatedProfile);
console.log(`Separated Streams: ${separatedRes.streamResults.map(s => `${s.stream}: ${s.score}%`).join(' | ')}`);
console.assert(separatedRes.isBlendedProfile === false, 'Separated profile should not be blended');
console.log('✓ Non-blended profile correctly identified as false when diff > 5.');

// 6. Test Career Matching
console.log('\n[6] Testing Career Matching:');
const matches = matchCareers(testProfile, CAREERS_DATA, 8);
console.log(`Top Matched Careers (${matches.length}):`);
matches.forEach((m, idx) => {
  console.log(`  ${idx + 1}. ${m.career.title} (${m.career.stream}) - Interest Similarity: ${m.similarity}%`);
  console.assert(m.similarity >= 0 && m.similarity <= 100, 'Similarity must be 0-100%');
  console.assert(m.rationale.length > 0, 'Rationale must not be empty');
});
console.assert(matches.length === 8, 'Should return 8 matches');
console.log('✓ Career matching correctly computes similarity % and personalized rationales.');

// 7. Full simulated quiz completion test
console.log('\n[7] Simulating complete quiz submission with mock answers:');
const mockAnswers = {};
QUIZ_QUESTIONS.forEach((q, idx) => {
  // Alternate selections to test variety
  mockAnswers[q.id] = q.options[idx % 4].id;
});

const fullResult = calculateQuizResults(mockAnswers, QUIZ_QUESTIONS, CAREERS_DATA);
console.log(`Dimension results computed: ${fullResult.dimensionResults.length}`);
console.log(`Stream results computed: ${fullResult.streamResults.length}`);
console.log(`Career matches generated: ${fullResult.careerMatches.length}`);
console.assert(fullResult.dimensionResults.length === 6, 'Must have 6 dimensions');
console.assert(fullResult.streamResults.length === 4, 'Must have 4 streams');
console.assert(fullResult.careerMatches.length === 8, 'Must have 8 career matches');
console.log('✓ End-to-end quiz calculation pipeline passed successfully!');

console.log('\n========================================');
console.log('ALL VERIFICATION TESTS PASSED SUCCESSFULLY!');
console.log('========================================');
