export interface ResourceItem {
  id: string;
  category: 'Parents' | 'Counselors' | 'Students' | 'Policy';
  title: string;
  subtitle: string;
  readTime: string;
  description: string;
  keyPoints: string[];
  actionSteps?: string[];
  downloadableTemplate?: string;
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'parent-conversation-guide',
    category: 'Parents',
    title: 'How to Talk to Your Child About Stream Choice Without Pressure',
    subtitle: 'A compassionate, evidence-based guide for Indian parents facing the Class 10/11 transition.',
    readTime: '6 min read',
    description: 'Choosing a stream in India is frequently an emotional family event laden with societal comparisons, familial expectations, and anxiety about financial security. This guide provides healthy conversational frameworks to understand your child\'s genuine cognitive strengths.',
    keyPoints: [
      'Shift focus from "What will relatives say?" to "Where will my child build genuine mastery and sustained energy?"',
      'Understand the changing Indian economy: Non-engineering and non-medical careers now offer competitive salaries and global scope.',
      'Separate your own unfulfilled aspirations from your teenager\'s unique cognitive profile.',
      'Normalize course corrections: NEP 2020 and modern higher education allow smooth multidisciplinary crossovers.'
    ],
    actionSteps: [
      'Sit down together with your child’s Stream to Dream Interest Profile and celebrate their top 2 dimensions.',
      'Ask open questions: "Which subject made you lose track of time in a good way this year?"',
      'Schedule a neutral session with a qualified career counselor rather than relying on hearsay from tuition centers.'
    ],
    downloadableTemplate: 'Parent-Student Alignment Worksheet (PDF format)'
  },
  {
    id: 'counselor-discussion-worksheet',
    category: 'Counselors',
    title: 'School Counselor Intake & Stream Evaluation Worksheet',
    subtitle: 'A standardized rubric for school guidance counselors integrating psychometric dimensions with academic records.',
    readTime: '8 min read',
    description: 'Designed for school psychologists and career counselors in CBSE, ICSE, and State Board schools. Provides a structured 45-minute consultation protocol integrating the Stream to Dream 6-dimension report with student academic trajectories.',
    keyPoints: [
      'Triangulate three pillars: Student Interest Profile, Academic Aptitude (Grades 8–10), and Personal Values/Personality.',
      'Identify discrepancies: High interest with low prerequisite readiness (and design remediation bridge plans).',
      'Help students distinguish between "hobby" vs "career focus" (e.g. enjoying playing video games vs the mathematics of coding game physics).',
      'Evaluate family financial constraints and scholarship eligibility early in the planning horizon.'
    ],
    actionSteps: [
      'Review student’s top 2 dimensions and check for "Blended Profile" alerts.',
      'Compare 3 shortlisted careers on the Compare Tool to evaluate work lifestyle trade-offs.',
      'Draft a provisional Class 11 subject combination aligned with NEP 2020 flexibilities.'
    ]
  },
  {
    id: 'stream-mythbusters-india',
    category: 'Students',
    title: 'The Top 7 Stream Myths in Indian Schools Debunked',
    subtitle: 'Unpacking the cultural stereotypes that hold students back from their true potential.',
    readTime: '5 min read',
    description: 'For decades, Indian society created an artificial hierarchy: Science at the top, Commerce in the middle, and Humanities as the last resort. Here is why the modern real world completely shatters this outdated notion.',
    keyPoints: [
      'Myth 1: "Only Science opens all doors." Fact: Science opens technical doors, but forced science study often leads to burnout and career switches later. Starting in Commerce or Humanities builds earlier domain expertise.',
      'Myth 2: "Math is strictly required to succeed in Commerce." Fact: While Math is vital for quantitative finance and economics, fields like CA, CS, Corporate Law, and Marketing flourish without advanced calculus.',
      'Myth 3: "Humanities has no jobs." Fact: Top corporate lawyers, policy consultants, psychologists, and brand strategists earn on par with software engineers.',
      'Myth 4: "Vocational streams are for weak students." Fact: Design institutes (NID, IIT IDC) admit under 1% of candidates and product designers are among the most sought-after talent in modern tech companies.'
    ]
  },
  {
    id: 'nep-2020-subject-guide',
    category: 'Policy',
    title: 'Understanding Subject Combinations under NEP 2020',
    subtitle: 'How India\'s National Education Policy dissolves rigid stream boundaries.',
    readTime: '7 min read',
    description: 'Under NEP 2020, CBSE and major state boards are phasing out the rigid separation between Arts, Science, and Commerce. Students can now explore combinations like Physics + Political Science, or Accountancy + Psychology.',
    keyPoints: [
      'No hard segregation between Arts and Sciences: Flexibility to pick major and minor subjects depending on school offerings.',
      'Inclusion of Vocational Crafts: Coding, AI, Graphic Design, and Financial Literacy integrated into senior secondary curriculum.',
      'Four-Year Undergraduate Framework (FYUP): Multiple entry and exit options in university degrees (Certificate, Diploma, Degree, Honours with Research).'
    ],
    actionSteps: [
      'Check your school\'s specific subject combination pool for Class 11.',
      'Verify university eligibility: Ensure you retain essential subjects required for professional licensure (e.g., PCM for Architecture, PCB for Medicine).'
    ]
  }
];
