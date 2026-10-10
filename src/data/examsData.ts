import { EntranceExamDetail } from '../types';

export const EXAMS_DATA: EntranceExamDetail[] = [
  {
    id: 'jee-main',
    name: 'Joint Entrance Examination (Main)',
    shortName: 'JEE Main',
    stream: 'Science',
    targetDegrees: ['B.Tech / B.E.', 'B.Arch', 'B.Planning'],
    conductingBody: 'National Testing Agency (NTA)',
    frequency: 'Twice a year (Session 1 in Jan, Session 2 in April)',
    mode: 'Computer-Based Test (CBT)',
    eligibility: 'Class 12 pass or appearing with Physics and Mathematics, plus Chemistry/Bio/Tech subject. Top 2.5 lakh qualifiers become eligible for JEE Advanced.',
    examPattern: 'Paper 1 (B.E./B.Tech): 90 Questions (attempt 75) in Physics, Chemistry, and Mathematics. Multiple Choice Questions (MCQs) + Numerical Value Questions. Negative marking (-1).',
    tentativeTimeline: 'Notification: Nov | Session 1: Jan | Session 2: April | JoSAA Counseling: June–July',
    officialSite: 'https://jeemain.nta.nic.in',
    keyPreparationTips: [
      'Master NCERT textbooks thoroughly for Chemistry and Physics theory.',
      'Practice past 5 years of JEE Main question papers with strict 3-hour time constraints.',
      'Focus on problem accuracy to minimize negative marks in numerical sections.'
    ]
  },
  {
    id: 'jee-advanced',
    name: 'Joint Entrance Examination (Advanced)',
    shortName: 'JEE Advanced',
    stream: 'Science',
    targetDegrees: ['B.Tech / BS / Dual Degree at the 23 IITs'],
    conductingBody: 'One of the seven zonal IITs on rotational basis',
    frequency: 'Once a year (Usually in May/June)',
    mode: 'Computer-Based Test (CBT)',
    eligibility: 'Top 2,50,000 rankers in JEE Main (Paper 1), must satisfy Class 12 75% marks board criteria (or top 20 percentile). Maximum 2 attempts in 2 consecutive years.',
    examPattern: 'Two mandatory papers (Paper 1 and Paper 2, 3 hours each on the same day). Tests deep multi-concept problem solving in Physics, Chemistry, and Mathematics.',
    tentativeTimeline: 'Exam: Late May / Early June | Results: Mid June | JoSAA Seat Allocation: June–July',
    officialSite: 'https://jeeadv.ac.in',
    keyPreparationTips: [
      'Deep conceptual clarity over superficial formula memorization.',
      'Solve multi-correct and paragraph-based problems from Irodov, HC Verma, and advanced modules.',
      'Maintain physical and mental stamina for two consecutive 3-hour tests.'
    ]
  },
  {
    id: 'neet-ug',
    name: 'National Eligibility cum Entrance Test (Undergraduate)',
    shortName: 'NEET-UG',
    stream: 'Science',
    targetDegrees: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BUMS', 'B.Sc Nursing'],
    conductingBody: 'National Testing Agency (NTA)',
    frequency: 'Once a year (Usually first Sunday of May)',
    mode: 'Pen and Paper (OMR Sheet based)',
    eligibility: 'Class 12 pass/appearing with Physics, Chemistry, Biology/Biotech and English. Minimum 50% aggregate in PCB (40% for SC/ST/OBC). Minimum age 17 years by Dec 31 of admission year. No upper age limit.',
    examPattern: '200 Questions (attempt 180): Biology (Botany & Zoology - 90 Qs), Physics (45 Qs), Chemistry (45 Qs). Total 720 marks. +4 for correct, -1 for incorrect.',
    tentativeTimeline: 'Notification: Feb | Exam: First Sunday of May | Results: June | MCC Counseling: July–Aug',
    officialSite: 'https://neet.nta.nic.in',
    keyPreparationTips: [
      'NCERT Biology is the bible—read line-by-line multiple times.',
      'Practice high-speed OMR bubbling to avoid last-minute marking errors.',
      'Solve at least 50 full-length mock tests under real exam conditions.'
    ]
  },
  {
    id: 'cuet-ug',
    name: 'Common University Entrance Test (Undergraduate)',
    shortName: 'CUET-UG',
    stream: 'All Streams',
    targetDegrees: ['B.A.', 'B.Com', 'B.Sc', 'BBA', 'B.Voc', 'Integrated M.Sc/M.A.'],
    conductingBody: 'National Testing Agency (NTA)',
    frequency: 'Once a year (Usually in May–June)',
    mode: 'Hybrid (Computer-Based Test / OMR based)',
    eligibility: 'Class 12 pass or appearing in any recognized board. Specific domain subject eligibility set by individual participating universities (e.g. DU, BHU, JNU, Jamia).',
    examPattern: 'Section 1A & 1B: Languages (English/Hindi/etc.). Section 2: Domain Subjects (e.g. Accountancy, Physics, Political Science, Psychology). Section 3: General Test (Reasoning, GK, Quant).',
    tentativeTimeline: 'Application: Feb–March | Exam: May–June | CSAS Admissions: July',
    officialSite: 'https://cuetug.ntaonline.in',
    keyPreparationTips: [
      'Strict adherence to Class 12 NCERT syllabus for your selected domain subjects.',
      'Strengthen reading comprehension and vocabulary for Language sections.',
      'Regular practice of mental ability and current affairs for the General Test.'
    ]
  },
  {
    id: 'clat',
    name: 'Common Law Admission Test',
    shortName: 'CLAT',
    stream: 'All Streams',
    targetDegrees: ['5-Year Integrated B.A. LL.B (Hons)', 'B.B.A. LL.B (Hons) at 24 NLUs'],
    conductingBody: 'Consortium of National Law Universities',
    frequency: 'Once a year (Held early in December for the following academic year)',
    mode: 'Offline (Pen and Paper)',
    eligibility: 'Class 12 pass or appearing with minimum 45% marks (40% for SC/ST). No upper age limit.',
    examPattern: '120 Comprehension-based questions in 2 hours across 5 sections: English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. +1, -0.25 negative marking.',
    tentativeTimeline: 'Application: July–Oct | Exam: First Sunday of December | Allotment: Jan–Feb',
    officialSite: 'https://consortiumofnlus.ac.in',
    keyPreparationTips: [
      'Develop rapid reading speed (over 250 words per minute) with comprehension.',
      'Daily reading of national editorials (The Hindu, Indian Express) for current affairs.',
      'Practice identifying the legal principles inside passages without bringing outside assumptions.'
    ]
  },
  {
    id: 'uceed',
    name: 'Undergraduate Common Entrance Examination for Design',
    shortName: 'UCEED',
    stream: 'All Streams',
    targetDegrees: ['Bachelor of Design (B.Des) at IIT Bombay, Delhi, Guwahati, Hyderabad, IIITDM Jabalpur'],
    conductingBody: 'IIT Bombay',
    frequency: 'Once a year (Usually third Sunday of January)',
    mode: 'Part A: Computer-Based (NAT, MSQ, MCQ) | Part B: Offline Pen & Paper Sketching',
    eligibility: 'Class 12 pass or appearing in any stream (Science, Commerce, or Humanities/Arts). Students from all streams eligible for IIT Bombay, Delhi, Guwahati, Hyderabad.',
    examPattern: 'Part A (2 hours, 200 marks): Visualization, observation, design sensitivity, analytical reasoning. Part B (1 hour, 100 marks): Practical drawing, perspective sketch, and design problem solving.',
    tentativeTimeline: 'Registration: Oct–Nov | Exam: Late January | Results: Early March',
    officialSite: 'https://uceed.iitb.ac.in',
    keyPreparationTips: [
      'Master 1-point, 2-point, and 3-point human eye level perspective sketching.',
      'Solve visual puzzles, mirror folding, rotation of solids, and shadow analysis.',
      'Observe daily products and sketch ergonomic improvements.'
    ]
  },
  {
    id: 'nid-dat',
    name: 'National Institute of Design - Design Aptitude Test',
    shortName: 'NID-DAT',
    stream: 'All Streams',
    targetDegrees: ['4-Year B.Des at NID Ahmedabad, Andhra Pradesh, Haryana, Madhya Pradesh, Assam'],
    conductingBody: 'National Institute of Design',
    frequency: 'Once a year (DAT Prelims in Dec/Jan, DAT Mains in April/May)',
    mode: 'Two Stages: Prelims (Written test) + Mains (Studio test & material handling)',
    eligibility: 'Class 12 pass or appearing in any stream. Upper age limit generally 20 years (relaxation for reserved categories).',
    examPattern: 'Prelims: Objective knowledge of visual culture, design history, and subjective creative drawing. Mains: 3D model making from clay/wire/paper, audio-visual tests, and portfolio review.',
    tentativeTimeline: 'Application: Sept–Dec | DAT Prelims: Late Dec / Early Jan | DAT Mains: May',
    officialSite: 'https://admissions.nid.edu',
    keyPreparationTips: [
      'Practice imaginative storytelling through sequential comic panels.',
      'Work with hands-on everyday materials (cardboard, toothpicks, clay) for 3D modeling.',
      'Develop keen observational drawing of everyday Indian street and household life.'
    ]
  },
  {
    id: 'nift-entrance',
    name: 'National Institute of Fashion Technology Entrance Examination',
    shortName: 'NIFT Entrance',
    stream: 'All Streams',
    targetDegrees: ['B.Des in Fashion Design, Textile Design, Knitwear, Fashion Communication; B.F.Tech'],
    conductingBody: 'National Testing Agency (NTA) on behalf of NIFT',
    frequency: 'Once a year (Usually in February)',
    mode: 'Stage 1: Written (CAT & GAT) | Stage 2: Situation Test (3D model creation)',
    eligibility: 'Class 12 pass in any stream for B.Des. Class 12 with Physics and Mathematics compulsory for B.F.Tech.',
    examPattern: 'Creative Ability Test (CAT): Evaluates design intuition, color psychology, and illustration. General Ability Test (GAT): English, Quantitative, Reasoning, GK. Situation Test: Hands-on craft challenge.',
    tentativeTimeline: 'Application: Dec–Jan | Exam: Early Feb | Situation Test: April',
    officialSite: 'https://nift.ac.in',
    keyPreparationTips: [
      'Study color harmony, textile prints, and apparel styling concepts.',
      'Practice neat illustration rendering with colored pencils and watercolors.',
      'Time yourself during 3D craft builds using thermocol, wire, and paper.'
    ]
  },
  {
    id: 'ipmat',
    name: 'Integrated Program in Management Aptitude Test',
    shortName: 'IPMAT (IIM Indore)',
    stream: 'All Streams',
    targetDegrees: ['5-Year Integrated BBA + MBA at IIM Indore & other participating IIMs'],
    conductingBody: 'IIM Indore',
    frequency: 'Once a year (Usually in May)',
    mode: 'Computer-Based Test (CBT)',
    eligibility: 'Class 12 pass in any stream with minimum 60% aggregate (55% for SC/ST/PwD). Age limit applies.',
    examPattern: 'Three Sections (120 mins): Quantitative Ability (Multiple Choice), Quantitative Ability (Short Answer without negative marking), Verbal Ability (Reading Comprehension & Grammar).',
    tentativeTimeline: 'Registration: Feb–April | Exam: Mid May | PI Interviews: June',
    officialSite: 'https://www.iimidr.ac.in',
    keyPreparationTips: [
      'High focus on higher secondary mathematics: Matrices, Permutations & Combinations, Coordinate Geometry.',
      'Intensive daily practice of reading comprehension and vocabulary usage.',
      'Mock interview preparation covering current economic events and personal motivation.'
    ]
  },
  {
    id: 'ca-foundation',
    name: 'ICAI Chartered Accountancy Foundation Examination',
    shortName: 'CA Foundation',
    stream: 'Commerce',
    targetDegrees: ['Entry into the Chartered Accountancy Program (ICAI)'],
    conductingBody: 'Institute of Chartered Accountants of India (ICAI)',
    frequency: 'Thrice a year (January, May/June, September)',
    mode: 'Offline Pen and Paper',
    eligibility: 'Can register after passing Class 10; appear after completing Class 12 board examinations.',
    examPattern: '4 Papers (100 marks each): Paper 1 (Accounting), Paper 2 (Business Laws), Paper 3 (Quantitative Aptitude: Math, Stats, Logical Reasoning), Paper 4 (Business Economics). Must score 40% in each paper and 50% aggregate.',
    tentativeTimeline: 'Registration deadline: 4 months prior to exam month',
    officialSite: 'https://www.icai.org',
    keyPreparationTips: [
      'Ensure deep conceptual understanding of fundamental journal entries and ledger balancing.',
      'Practice writing legal provisions and case law summaries for Business Laws.',
      'Solve ICAI revision test papers (RTPs) and mock test papers (MTPs).'
    ]
  },
  {
    id: 'nata',
    name: 'National Aptitude Test in Architecture',
    shortName: 'NATA',
    stream: 'Science',
    targetDegrees: ['5-Year B.Arch at all COA-approved architectural colleges nationwide'],
    conductingBody: 'Council of Architecture (COA)',
    frequency: 'Multiple attempts available on weekends from April to July',
    mode: 'Hybrid (Part A Drawing test on paper, Part B Online CBT)',
    eligibility: 'Class 12 pass with Physics, Chemistry, and Mathematics (mandatory) with minimum 50% marks in PCM aggregate.',
    examPattern: 'Part A (Drawing and Visual Composition): 80 marks. Part B (Visual perception, aesthetic sensitivity, architectural history, math): 120 marks. Total 200 marks.',
    tentativeTimeline: 'Registrations: March onwards | Exams: April to July',
    officialSite: 'https://www.nata.in',
    keyPreparationTips: [
      'Practice freehand perspective sketching of Indian monuments and urban intersections.',
      'Study scale, proportion, shadows, and architectural terminology.',
      'Brush up on fundamental geometry, trigonometry, and aesthetic balance.'
    ]
  },
  {
    id: 'nda',
    name: 'National Defence Academy & Naval Academy Examination',
    shortName: 'NDA Exam',
    stream: 'All Streams',
    targetDegrees: ['Cadet Officer Training (B.Sc / B.Tech / B.A.) -> Commission into Indian Army, Navy, Air Force'],
    conductingBody: 'Union Public Service Commission (UPSC)',
    frequency: 'Twice a year (NDA 1 in April, NDA 2 in September)',
    mode: 'Offline Written Examination (OMR) followed by 5-Day SSB Interview',
    eligibility: 'Unmarried male and female candidates aged 16.5 to 19.5 years. Army Wing: Class 12 in any stream. Air Force and Naval Wings: Class 12 with Physics and Mathematics.',
    examPattern: 'Mathematics Paper (300 marks, 2.5 hours) + General Ability Test (GAT: English & GK - 600 marks, 2.5 hours). Qualifiers undergo 5-Day Services Selection Board (SSB) Interview (900 marks).',
    tentativeTimeline: 'NDA 1: Notification Dec, Exam April | NDA 2: Notification May, Exam Sept',
    officialSite: 'https://upsc.gov.in',
    keyPreparationTips: [
      'Master Class 11 and 12 mathematics speed and accuracy for Paper 1.',
      'Maintain peak physical stamina (running, push-ups, mental agility).',
      'Read current national defense news and build officer-like qualities (OLQs).'
    ]
  }
];
