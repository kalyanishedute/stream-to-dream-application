// Comprehensive verification test for Stream to Dream scoring formulas, classifications, and thresholds

console.log('=== VERIFYING STREAM TO DREAM CORE LOGIC & ALGORITHMS ===\n');

// 1. Classification function
function getClassification(score) {
  if (score >= 80) return 'Very Strong';
  if (score >= 65) return 'Strong';
  if (score >= 50) return 'Moderate';
  if (score >= 35) return 'Developing';
  return 'Less Prominent';
}

console.log('[1] Testing Dimension Classifications:');
const tests = [
  { val: 100, expected: 'Very Strong' },
  { val: 80, expected: 'Very Strong' },
  { val: 79, expected: 'Strong' },
  { val: 65, expected: 'Strong' },
  { val: 64, expected: 'Moderate' },
  { val: 50, expected: 'Moderate' },
  { val: 49, expected: 'Developing' },
  { val: 35, expected: 'Developing' },
  { val: 34, expected: 'Less Prominent' },
  { val: 0, expected: 'Less Prominent' }
];

tests.forEach(({ val, expected }) => {
  const result = getClassification(val);
  if (result !== expected) {
    throw new Error(`Failed for score ${val}: expected ${expected}, got ${result}`);
  }
});
console.log('✓ All 10 boundary classification tests passed.');

// 2. Stream formulas test
console.log('\n[2] Testing Stream Formula Calculations:');
function calculateStreams(A, S, B, So, C, P) {
  const scienceRaw = A * 0.30 + S * 0.35 + P * 0.15 + C * 0.05 + So * 0.05 + B * 0.10;
  const commerceRaw = A * 0.25 + B * 0.40 + P * 0.10 + So * 0.10 + C * 0.05 + S * 0.10;
  const humanitiesRaw = So * 0.35 + C * 0.20 + A * 0.15 + S * 0.10 + B * 0.10 + P * 0.10;
  const vocationalRaw = P * 0.35 + C * 0.25 + B * 0.10 + So * 0.10 + A * 0.10 + S * 0.10;

  const streams = [
    { stream: 'Science', score: Math.round(scienceRaw) },
    { stream: 'Commerce', score: Math.round(commerceRaw) },
    { stream: 'Humanities', score: Math.round(humanitiesRaw) },
    { stream: 'Vocational', score: Math.round(vocationalRaw) }
  ];

  streams.sort((a, b) => b.score - a.score);

  let isBlended = false;
  const diff = Math.abs(streams[0].score - streams[1].score);
  if (diff <= 5) {
    isBlended = true;
  }

  return { streams, isBlended, diff };
}

// Test case 1: Typical science student
const res1 = calculateStreams(90, 85, 30, 40, 50, 80);
console.log('Test Profile 1 (High Analytical & Scientific):');
res1.streams.forEach(s => console.log(`  - ${s.stream}: ${s.score}%`));
if (res1.streams[0].stream !== 'Science') {
  throw new Error(`Expected Science to be top, got ${res1.streams[0].stream}`);
}
console.log('✓ Science correctly emerged top for STEM profile.');

// Test case 2: Blended Profile (Science 75, Vocational 72 -> diff = 3 <= 5)
const res2 = calculateStreams(80, 75, 45, 40, 70, 85);
console.log('\nTest Profile 2 (STEM + High Practical/Creative):');
res2.streams.forEach(s => console.log(`  - ${s.stream}: ${s.score}%`));
console.log(`  Top 2 difference: ${res2.diff} pts (Blended = ${res2.isBlended})`);
if (!res2.isBlended) {
  throw new Error('Expected Blended Profile to be true when difference <= 5');
}
console.log('✓ Blended profile correctly triggered when top two streams <= 5 points.');

// Test case 3: Typical Commerce student
const res3 = calculateStreams(75, 30, 95, 60, 40, 50);
console.log('\nTest Profile 3 (High Business & Analytical):');
res3.streams.forEach(s => console.log(`  - ${s.stream}: ${s.score}%`));
if (res3.streams[0].stream !== 'Commerce') {
  throw new Error(`Expected Commerce to be top, got ${res3.streams[0].stream}`);
}
console.log('✓ Commerce correctly emerged top for business profile.');

// Test case 4: Typical Humanities student
const res4 = calculateStreams(50, 40, 40, 95, 80, 40);
console.log('\nTest Profile 4 (High Social & Creative):');
res4.streams.forEach(s => console.log(`  - ${s.stream}: ${s.score}%`));
if (res4.streams[0].stream !== 'Humanities') {
  throw new Error(`Expected Humanities to be top, got ${res4.streams[0].stream}`);
}
console.log('✓ Humanities correctly emerged top for human-centric profile.');

// 3. Career Similarity Formula
console.log('\n[3] Testing Career Similarity Formula:');
function calculateSimilarity(studentVec, careerVec) {
  let totalDiff = 0;
  for (let i = 0; i < studentVec.length; i++) {
    totalDiff += Math.abs(studentVec[i] - careerVec[i]);
  }
  const avgDiff = totalDiff / studentVec.length;
  return Math.max(10, Math.min(99, Math.round(100 - avgDiff)));
}

const sProfile = [95, 65, 45, 30, 60, 80];
const cExactMatch = [95, 65, 45, 30, 60, 80];
const cDifferent = [30, 30, 90, 90, 80, 30];

const simExact = calculateSimilarity(sProfile, cExactMatch);
const simDiff = calculateSimilarity(sProfile, cDifferent);

console.log(`Exact match similarity: ${simExact}% (Expected: ~99-100%)`);
console.log(`Divergent match similarity: ${simDiff}% (Expected: lower ~50%)`);

if (simExact < 95) throw new Error('Exact match should have >= 95% similarity');
if (simDiff > 70) throw new Error('Divergent match should have < 70% similarity');
console.log('✓ Career similarity formula verified.');

console.log('\n=============================================');
console.log('ALL FORMULAS AND ALGORITHMS FULLY VALIDATED!');
console.log('=============================================\n');
