import { 
  InterestDimension, 
  DimensionScores, 
  DimensionClassification, 
  DimensionResult, 
  StreamResult, 
  StreamType, 
  Career, 
  CareerMatch, 
  QuizCalculationResult,
  QuizQuestion 
} from '../types';

export const DIMENSIONS: { key: InterestDimension; label: string; color: string; icon: string; description: string }[] = [
  {
    key: 'Analytical',
    label: 'Analytical',
    color: '#6366F1', // Indigo
    icon: 'Cpu',
    description: 'Enjoys logical puzzles, abstract thinking, mathematical structures, data analysis, and systematic problem solving.'
  },
  {
    key: 'Scientific',
    label: 'Scientific',
    color: '#06B6D4', // Cyan
    icon: 'Microscope',
    description: 'Fascinated by empirical inquiry, natural laws, biological systems, experiments, and discovering how the universe works.'
  },
  {
    key: 'Business',
    label: 'Business & Leadership',
    color: '#F59E0B', // Amber
    icon: 'TrendingUp',
    description: 'Thrives on enterprise, markets, leadership, strategy, financial acumen, team mobilization, and value creation.'
  },
  {
    key: 'Social',
    label: 'Social & Human Centric',
    color: '#10B981', // Emerald
    icon: 'Users',
    description: 'Drawn to understanding people, empathy, education, counseling, advocacy, ethical justice, and community development.'
  },
  {
    key: 'Creative',
    label: 'Creative & Artistic',
    color: '#EC4899', // Pink / Rose
    icon: 'Palette',
    description: 'Loves original visual expression, narrative storytelling, aesthetics, design thinking, media, and imaginative creation.'
  },
  {
    key: 'Practical',
    label: 'Practical & Hands-On',
    color: '#8B5CF6', // Purple
    icon: 'Wrench',
    description: 'Prefers tangible building, tools, physical apparatus, technical fabrication, outdoor work, robotics, and actionable execution.'
  }
];

export function getClassification(score: number): DimensionClassification {
  if (score >= 80) return 'Very Strong';
  if (score >= 65) return 'Strong';
  if (score >= 50) return 'Moderate';
  if (score >= 35) return 'Developing';
  return 'Less Prominent';
}

/**
 * Calculates raw dimension scores based on student answers
 */
export function calculateRawScores(
  answers: Record<number, string>,
  questions: QuizQuestion[]
): { rawScores: DimensionScores; maxScores: DimensionScores } {
  const rawScores: DimensionScores = {
    Analytical: 0,
    Scientific: 0,
    Business: 0,
    Social: 0,
    Creative: 0,
    Practical: 0
  };

  const maxScores: DimensionScores = {
    Analytical: 0,
    Scientific: 0,
    Business: 0,
    Social: 0,
    Creative: 0,
    Practical: 0
  };

  // Calculate theoretical max score possible for each dimension across all questions
  questions.forEach(q => {
    // Find the max points possible in this question for each dimension
    const maxInQ: DimensionScores = {
      Analytical: 0,
      Scientific: 0,
      Business: 0,
      Social: 0,
      Creative: 0,
      Practical: 0
    };

    q.options.forEach(opt => {
      Object.entries(opt.dimensionPoints).forEach(([dim, pts]) => {
        const d = dim as InterestDimension;
        if (pts && pts > maxInQ[d]) {
          maxInQ[d] = pts;
        }
      });
    });

    Object.entries(maxInQ).forEach(([dim, pts]) => {
      const d = dim as InterestDimension;
      maxScores[d] += pts;
    });

    // Add selected answer's points
    const selectedOptionId = answers[q.id];
    if (selectedOptionId) {
      const selectedOpt = q.options.find(o => o.id === selectedOptionId);
      if (selectedOpt && selectedOpt.dimensionPoints) {
        Object.entries(selectedOpt.dimensionPoints).forEach(([dim, pts]) => {
          const d = dim as InterestDimension;
          rawScores[d] += pts || 0;
        });
      }
    }
  });

  // Guarantee non-zero maxScores to avoid division by zero
  Object.keys(maxScores).forEach(key => {
    const d = key as InterestDimension;
    if (maxScores[d] <= 0) maxScores[d] = 100;
  });

  return { rawScores, maxScores };
}

/**
 * Calculates normalized scores (0 - 100) and classifications
 */
export function calculateDimensionResults(
  rawScores: DimensionScores,
  maxScores: DimensionScores
): DimensionResult[] {
  return DIMENSIONS.map(meta => {
    const raw = rawScores[meta.key] || 0;
    const max = maxScores[meta.key] || 100;
    const normalized = Math.min(100, Math.max(0, Math.round((raw / max) * 100)));
    const classification = getClassification(normalized);

    return {
      dimension: meta.key,
      rawScore: raw,
      maxScore: max,
      score: normalized,
      classification,
      description: meta.description,
      color: meta.color,
      iconName: meta.icon
    };
  });
}

/**
 * Calculates Stream scores based on exact user specification formulas:
 * Science = Analytical*0.30 + Scientific*0.35 + Practical*0.15 + Creative*0.05 + Social*0.05 + Business*0.10
 * Commerce = Analytical*0.25 + Business*0.40 + Practical*0.10 + Social*0.10 + Creative*0.05 + Scientific*0.10
 * Humanities = Social*0.35 + Creative*0.20 + Analytical*0.15 + Scientific*0.10 + Business*0.10 + Practical*0.10
 * Vocational = Practical*0.35 + Creative*0.25 + Business*0.10 + Social*0.10 + Analytical*0.10 + Scientific*0.10
 */
export function calculateStreamScores(dimensionMap: Record<InterestDimension, number>): {
  streamResults: StreamResult[];
  isBlendedProfile: boolean;
  blendedStreams: StreamType[];
} {
  const A = dimensionMap.Analytical;
  const S = dimensionMap.Scientific;
  const B = dimensionMap.Business;
  const So = dimensionMap.Social;
  const C = dimensionMap.Creative;
  const P = dimensionMap.Practical;

  const scienceRaw = A * 0.30 + S * 0.35 + P * 0.15 + C * 0.05 + So * 0.05 + B * 0.10;
  const commerceRaw = A * 0.25 + B * 0.40 + P * 0.10 + So * 0.10 + C * 0.05 + S * 0.10;
  const humanitiesRaw = So * 0.35 + C * 0.20 + A * 0.15 + S * 0.10 + B * 0.10 + P * 0.10;
  const vocationalRaw = P * 0.35 + C * 0.25 + B * 0.10 + So * 0.10 + A * 0.10 + S * 0.10;

  const rawStreams: { stream: StreamType; displayName: string; score: number; description: string; topSubjects: string[]; sampleCareers: string[]; color: string }[] = [
    {
      stream: 'Science',
      displayName: 'Science (STEM)',
      score: Math.round(scienceRaw),
      description: 'Ideal for minds intrigued by how the world functions, empirical experimentation, mathematical logic, and technological building.',
      topSubjects: ['Physics', 'Chemistry', 'Mathematics (PCM)', 'Biology (PCB)', 'Computer Science'],
      sampleCareers: ['Software Architect', 'Doctor / Surgeon', 'Data Scientist', 'Aerospace Engineer'],
      color: '#06B6D4' // Cyan
    },
    {
      stream: 'Commerce',
      displayName: 'Commerce & Finance',
      score: Math.round(commerceRaw),
      description: 'Ideal for those energized by business dynamics, markets, financial numbers, organizational leadership, and trade economics.',
      topSubjects: ['Accountancy', 'Economics', 'Business Studies', 'Applied Mathematics'],
      sampleCareers: ['Chartered Accountant (CA)', 'Investment Banker', 'Corporate Strategist', 'Entrepreneur'],
      color: '#F59E0B' // Amber
    },
    {
      stream: 'Humanities',
      displayName: 'Humanities & Social Sciences',
      score: Math.round(humanitiesRaw),
      description: 'Ideal for thinkers passionate about human society, behavioral psychology, culture, governance, legal justice, and narrative communication.',
      topSubjects: ['Psychology', 'Sociology', 'Political Science', 'History', 'Legal Studies', 'English Literature'],
      sampleCareers: ['Clinical Psychologist', 'Corporate Lawyer', 'Investigative Journalist', 'Civil Servant (IAS/IPS)'],
      color: '#10B981' // Emerald
    },
    {
      stream: 'Vocational',
      displayName: 'Vocational & Creative Arts',
      score: Math.round(vocationalRaw),
      description: 'Ideal for hands-on creators who combine tangible execution with aesthetic innovation, digital craft, sports, media, and hospitality.',
      topSubjects: ['Applied Design', 'Mass Media', 'Animation & VFX', 'Information Tech', 'Hospitality & Tourism'],
      sampleCareers: ['UI/UX Product Designer', 'Game Animator', 'Digital Media Producer', 'Sports Physiotherapist'],
      color: '#EC4899' // Pink/Rose
    }
  ];

  // Sort descending by score
  const sorted = [...rawStreams].sort((a, b) => b.score - a.score);

  // Check blended profile: If top two streams are within 5 points
  let isBlendedProfile = false;
  const blendedStreams: StreamType[] = [];

  if (sorted.length >= 2) {
    const diff = Math.abs(sorted[0].score - sorted[1].score);
    if (diff <= 5) {
      isBlendedProfile = true;
      blendedStreams.push(sorted[0].stream, sorted[1].stream);
    }
  }

  return {
    streamResults: sorted,
    isBlendedProfile,
    blendedStreams
  };
}

/**
 * Match careers to the student profile.
 * Formula: similarity = 1 - weighted average difference between student profile and career profile
 * converted to percentage.
 */
export function matchCareers(
  dimensionMap: Record<InterestDimension, number>,
  allCareers: Career[],
  count: number = 8
): CareerMatch[] {
  // Sort student's dimensions to know their top strengths
  const topDimensions = (Object.keys(dimensionMap) as InterestDimension[]).sort(
    (a, b) => dimensionMap[b] - dimensionMap[a]
  );

  const matched = allCareers.map(career => {
    const careerProfile = career.dimensionProfile;
    
    // Calculate sum of differences
    let totalDifference = 0;
    const dims = Object.keys(dimensionMap) as InterestDimension[];
    
    dims.forEach(dim => {
      const studentVal = dimensionMap[dim] || 0;
      const careerVal = careerProfile[dim] || 0;
      totalDifference += Math.abs(studentVal - careerVal);
    });

    // Average difference out of 100
    const avgDiff = totalDifference / dims.length;
    // similarity = 1 - (avgDiff / 100), converted to percentage
    const rawSimilarity = Math.max(10, Math.min(99, Math.round(100 - avgDiff)));

    // Identify which of student's top 2 dimensions also align with this career
    const matchingTopDims = topDimensions.filter(dim => {
      return (careerProfile[dim] >= 65) && (dimensionMap[dim] >= 50);
    });

    const primaryDims = matchingTopDims.length > 0 ? matchingTopDims.slice(0, 2) : [topDimensions[0]];

    // Craft personalized rationale
    const dim1 = primaryDims[0];
    const dim2 = primaryDims[1] || primaryDims[0];
    let rationale = '';
    if (primaryDims.length >= 2 && dim1 !== dim2) {
      rationale = `Matches your prominent strengths in ${dim1} thinking and ${dim2} expression.`;
    } else {
      rationale = `Strongly aligns with your high ${dim1} affinity and problem-solving preference.`;
    }

    return {
      career,
      similarity: rawSimilarity,
      primaryMatchDimensions: primaryDims,
      rationale
    };
  });

  // Sort by similarity descending
  matched.sort((a, b) => b.similarity - a.similarity);

  return matched.slice(0, count);
}

/**
 * Full calculation pipeline
 */
export function calculateQuizResults(
  answers: Record<number, string>,
  questions: QuizQuestion[],
  allCareers: Career[]
): QuizCalculationResult {
  const { rawScores, maxScores } = calculateRawScores(answers, questions);
  const dimensionResults = calculateDimensionResults(rawScores, maxScores);

  const dimMap: Record<InterestDimension, number> = {
    Analytical: 0,
    Scientific: 0,
    Business: 0,
    Social: 0,
    Creative: 0,
    Practical: 0
  };
  dimensionResults.forEach(dr => {
    dimMap[dr.dimension] = dr.score;
  });

  const { streamResults, isBlendedProfile, blendedStreams } = calculateStreamScores(dimMap);
  const careerMatches = matchCareers(dimMap, allCareers, 8);

  return {
    dimensionResults,
    streamResults,
    isBlendedProfile,
    blendedStreams,
    careerMatches,
    completedAt: new Date().toISOString()
  };
}
