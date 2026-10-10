// Types for Stream to Dream

export type InterestDimension = 
  | 'Analytical'
  | 'Scientific'
  | 'Business'
  | 'Social'
  | 'Creative'
  | 'Practical';

export type DimensionScores = Record<InterestDimension, number>;

export type DimensionClassification = 
  | 'Very Strong'
  | 'Strong'
  | 'Moderate'
  | 'Developing'
  | 'Less Prominent';

export interface DimensionResult {
  dimension: InterestDimension;
  rawScore: number;
  maxScore: number;
  score: number; // 0 - 100
  classification: DimensionClassification;
  description: string;
  color: string;
  iconName: string;
}

export type StreamType = 
  | 'Science'
  | 'Commerce'
  | 'Humanities'
  | 'Vocational';

export interface StreamResult {
  stream: StreamType;
  displayName: string;
  score: number; // 0 - 100
  description: string;
  topSubjects: string[];
  sampleCareers: string[];
  color: string;
}

export interface QuizOption {
  id: string;
  text: string;
  description?: string;
  dimensionPoints: Partial<Record<InterestDimension, number>>;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  subtitle?: string;
  options: QuizOption[];
  categoryHint?: string;
}

export interface CareerMatch {
  career: Career;
  similarity: number; // 0 - 100%
  primaryMatchDimensions: InterestDimension[];
  rationale: string;
}

export interface Career {
  id: string;
  title: string;
  stream: StreamType | 'Interdisciplinary';
  subStream: string;
  tagline: string;
  overview: string;
  whatTheyDo: string[];
  skills: {
    technical: string[];
    soft: string[];
  };
  schoolSubjects: {
    essential: string[];
    recommended: string[];
  };
  courses: string[];
  possiblePathways: {
    direct: string;
    alternative: string;
    lateral?: string;
  };
  entranceExams: string[];
  workStyle: string;
  workEnvironment: string;
  dimensionProfile: Record<InterestDimension, number>; // 0 - 100 benchmark
  salaryOutlookIndia: string;
  futureScope: string;
  relatedCareerIds: string[];
  icon: string;
}

export interface StreamDetail {
  id: StreamType;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  subTracks: {
    name: string;
    description: string;
    popularSubjects: string[];
  }[];
  keySkills: string[];
  undergraduateCourses: string[];
  prominentCareers: string[];
  topEntranceExams: string[];
  whoMayEnjoy: string[];
  mythsAndFacts: {
    myth: string;
    fact: string;
  }[];
  color: string;
}

export interface CourseDetail {
  id: string;
  name: string;
  code: string;
  stream: StreamType | 'Interdisciplinary';
  duration: string;
  overview: string;
  eligibility: string;
  admissionMode: string;
  topInstitutions: string[];
  careerProspects: string[];
}

export interface EntranceExamDetail {
  id: string;
  name: string;
  shortName: string;
  stream: StreamType | 'All Streams';
  targetDegrees: string[];
  conductingBody: string;
  frequency: string;
  mode: string;
  eligibility: string;
  examPattern: string;
  tentativeTimeline: string;
  officialSite?: string;
  keyPreparationTips: string[];
}

export interface RoadmapLevel {
  stage: string;
  title: string;
  focus: string;
  milestones: string[];
  actionableChecklist: {
    id: string;
    task: string;
    completed: boolean;
  }[];
}

export interface CustomRoadmap {
  studentName?: string;
  targetClass: string;
  targetStream: StreamType | 'Undecided';
  chosenCareers: string[];
  selectedSubjects: string[];
  targetExams: string[];
  customGoals: string[];
}

export interface QuizState {
  answers: Record<number, string>; // questionId -> optionId
  currentQuestionIndex: number;
  isCompleted: boolean;
  completedAt?: string;
}

export interface QuizCalculationResult {
  dimensionResults: DimensionResult[];
  streamResults: StreamResult[];
  isBlendedProfile: boolean;
  blendedStreams: StreamType[];
  careerMatches: CareerMatch[];
  completedAt: string;
}
