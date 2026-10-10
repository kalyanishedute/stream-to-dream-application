import { CourseDetail } from '../types';

export const COURSES_DATA: CourseDetail[] = [
  {
    id: 'b-tech-cse',
    name: 'Bachelor of Technology in Computer Science & Engineering',
    code: 'B.Tech (CSE)',
    stream: 'Science',
    duration: '4 Years (8 Semesters)',
    overview: 'The premier technical undergraduate degree focusing on software development, computer systems architecture, data structures, algorithms, artificial intelligence, cloud networks, and database engineering.',
    eligibility: 'Class 12 pass with Physics and Mathematics as compulsory subjects, plus Chemistry/Biology/CS. Minimum 60–75% marks depending on institute.',
    admissionMode: 'National Entrance (JEE Main, JEE Advanced), University Entrances (BITSAT, VITEEE), State CETs.',
    topInstitutions: ['IITs (Bombay, Delhi, Madras, Kharagpur)', 'NITs (Trichy, Surathkal, Warangal)', 'BITS Pilani', 'IIIT Hyderabad', 'DTU & NSUT Delhi'],
    careerProspects: ['Software Development Engineer', 'Cloud Architect', 'Data Scientist', 'AI/ML Engineer', 'Full-Stack Developer']
  },
  {
    id: 'mbbs',
    name: 'Bachelor of Medicine & Bachelor of Surgery',
    code: 'MBBS',
    stream: 'Science',
    duration: '5.5 Years (4.5 Years Academic + 1 Year Compulsory Rotatory Medical Internship)',
    overview: 'The foundational professional medical degree in India conferring the legal title of Physician. Covers anatomy, biochemistry, physiology, pathology, pharmacology, forensic medicine, pediatrics, surgery, and obstetrics.',
    eligibility: 'Class 12 pass with Physics, Chemistry, Biology/Biotechnology and English. Minimum 50% aggregate in PCB (40% for reserved categories). Minimum age 17 years.',
    admissionMode: 'Strictly through NEET-UG (National Eligibility cum Entrance Test conducted by NTA).',
    topInstitutions: ['AIIMS New Delhi & Regional AIIMS', 'CMC Vellore', 'JIPMER Puducherry', 'KGMU Lucknow', 'Madras Medical College'],
    careerProspects: ['Medical Officer / Resident Physician', 'Clinical Specialist (via MD/MS)', 'Surgeon', 'Public Health Consultant', 'Medical Researcher']
  },
  {
    id: 'b-com-hons',
    name: 'Bachelor of Commerce (Honours)',
    code: 'B.Com (Hons)',
    stream: 'Commerce',
    duration: '3 to 4 Years (as per NEP FYUP)',
    overview: 'A rigorous business qualification emphasizing financial accounting, corporate governance, auditing principles, business taxation, micro and macro-economics, and commercial law.',
    eligibility: 'Class 12 pass from a recognized board with Commerce or Mathematics. Top central universities require Mathematics/Applied Mathematics in Class 12.',
    admissionMode: 'CUET-UG for Central Universities (Delhi University, BHU, etc.) or merit/state entrance.',
    topInstitutions: ['Shri Ram College of Commerce (SRCC), DU', 'Lady Shri Ram College (LSR)', 'St. Xavier’s College, Kolkata & Mumbai', 'Loyola College, Chennai', 'Christ University, Bengaluru'],
    careerProspects: ['Chartered Accountant (alongside course)', 'Financial Analyst', 'Management Consultant', 'Statutory Auditor', 'Investment Banking Analyst']
  },
  {
    id: 'bba-ipm',
    name: 'Integrated Program in Management (BBA + MBA)',
    code: 'IPM (IIMs)',
    stream: 'Commerce',
    duration: '5 Years Dual Degree',
    overview: 'A prestigious dual-degree program launched by IIM Indore for Class 12 students. Combines foundational social sciences, statistics, mathematics, and humanities during the first 3 years, followed by the flagship 2-year MBA with the PGP cohort.',
    eligibility: 'Class 12 pass in any stream with minimum 60% marks (55% for SC/ST/PwD). Maximum age limits apply.',
    admissionMode: 'IPMAT entrance test + Written Ability Test (WAT) + Personal Interview (PI).',
    topInstitutions: ['IIM Indore', 'IIM Rohtak', 'IIM Ranchi', 'IIM Bodh Gaya', 'IIM Jammu'],
    careerProspects: ['Management Consultant', 'Brand Marketing Manager', 'Product Manager', 'Investment Banker', 'Corporate Strategist']
  },
  {
    id: 'ba-llb-integrated',
    name: 'Integrated Bachelor of Arts & Bachelor of Laws (Honours)',
    code: 'B.A. LL.B (Hons)',
    stream: 'Humanities',
    duration: '5 Years (10 Semesters)',
    overview: 'An integrated professional law program fusing humanities (political science, history, sociology, economics) with comprehensive jurisprudence, constitutional law, criminal law, corporate law, and international law.',
    eligibility: 'Class 12 pass in any stream with minimum 45% aggregate (40% for SC/ST). No age limit.',
    admissionMode: 'Common Law Admission Test (CLAT) or AILET (for NLU Delhi) or SLAT.',
    topInstitutions: ['NLSIU Bengaluru', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'NLU Delhi', 'NLU Jodhpur'],
    careerProspects: ['Corporate Advocate in Tier-1 Law Firms', 'Litigation Counsel at High Courts & Supreme Court', 'Judicial Services Magistrate', 'In-House Corporate Legal Counsel']
  },
  {
    id: 'b-des',
    name: 'Bachelor of Design (Interaction / Product / Visual)',
    code: 'B.Des',
    stream: 'Vocational',
    duration: '4 Years (8 Semesters)',
    overview: 'A multidisciplinary studio-based degree focusing on human-centric design, creative problem solving, visual ergonomics, digital UI/UX, material modeling, user research, and branding aesthetics.',
    eligibility: 'Class 12 pass in any stream (Science, Commerce, or Humanities) from a recognized board.',
    admissionMode: 'National Design Entrances: UCEED (for IITs), NID-DAT (for NID campuses), NIFT Entrance (for NIFT).',
    topInstitutions: ['National Institute of Design (NID Ahmedabad, Gandhinagar, Bengaluru)', 'IIT Bombay (IDC School of Design)', 'IIT Delhi', 'IIT Guwahati', 'NIFT Delhi & Mumbai'],
    careerProspects: ['UI/UX Product Designer', 'Industrial & Hardware Designer', 'Visual Identity Art Director', 'Design Strategist', 'Packaging Designer']
  },
  {
    id: 'b-arch',
    name: 'Bachelor of Architecture',
    code: 'B.Arch',
    stream: 'Science',
    duration: '5 Years (10 Semesters)',
    overview: 'A statutory degree recognized by the Council of Architecture (COA) combining spatial aesthetics, structural engineering, environmental acoustics, urban planning, and building construction technologies.',
    eligibility: 'Class 12 pass with Physics, Chemistry, and Mathematics (mandatory) with minimum 50% aggregate.',
    admissionMode: 'NATA (National Aptitude Test in Architecture) or JEE Main Paper 2 / AAT for IITs.',
    topInstitutions: ['IIT Roorkee & IIT Kharagpur', 'School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada)', 'CEPT University, Ahmedabad', 'Sir JJ College of Architecture, Mumbai'],
    careerProspects: ['Licensed Architect', 'Urban Planner', 'Sustainable Habitat Consultant', 'Interior Architect', 'Landscape Designer']
  },
  {
    id: 'ba-psychology-hons',
    name: 'Bachelor of Arts (Honours) in Psychology',
    code: 'B.A. (Hons) Psychology',
    stream: 'Humanities',
    duration: '3 to 4 Years (as per NEP FYUP)',
    overview: 'Explores biopsychology, cognitive psychology, developmental stages, abnormal psychopathology, social behavior, psychological testing, and research statistics.',
    eligibility: 'Class 12 pass in any stream from a recognized board. Open to students from Humanities, Science, or Commerce.',
    admissionMode: 'CUET-UG for central universities, or state university merit / private university entrances.',
    topInstitutions: ['Lady Shri Ram College (LSR), Delhi', 'St. Xavier’s College, Mumbai', 'Christ University, Bengaluru', 'Fergusson College, Pune', 'Ashoka University, Sonipat'],
    careerProspects: ['Counseling Psychologist (after Masters)', 'Clinical Psychologist (after RCI Psy.D/M.Phil)', 'HR Talent Specialist', 'User Behavioral Researcher', 'School Counselor']
  },
  {
    id: 'bsc-hotel-admin',
    name: 'B.Sc in Hospitality & Hotel Administration',
    code: 'B.Sc (H&HA)',
    stream: 'Vocational',
    duration: '3 Years (6 Semesters)',
    overview: 'Offered jointly by the National Council for Hotel Management (NCHMCT) and JNU. Delivers professional culinary production, food & beverage service, front office management, accommodation operations, and hotel finance.',
    eligibility: 'Class 12 pass in any stream with English as a compulsory subject. Age criteria applies.',
    admissionMode: 'NCHMCT JEE conducted nationwide by the National Testing Agency (NTA).',
    topInstitutions: ['IHM Pusa (New Delhi)', 'IHM Mumbai (Dadar)', 'IHM Bengaluru', 'IHM Chennai', 'Welcomgroup Graduate School (WGSHA Manipal)'],
    careerProspects: ['Hotel Management Trainee in 5-Star Chains', 'Restaurant & Banquet Manager', 'Airline Cabin Crew / Ground Services Lead', 'Cruise Liner Hospitality Officer', 'Event Specialist']
  },
  {
    id: 'b-stat-hons',
    name: 'Bachelor of Statistics (Honours)',
    code: 'B.Stat (Hons)',
    stream: 'Science',
    duration: '3 to 4 Years',
    overview: 'The most prestigious quantitative and mathematical statistics undergraduate program in Asia, offered at the Indian Statistical Institute (ISI Kolkata). Provides world-class training in probability theory, mathematical modeling, inference, and algorithmic computing.',
    eligibility: 'Class 12 pass with Mathematics and English. Extremely competitive entrance test.',
    admissionMode: 'ISI Admission Test (Objective & Subjective Math) followed by interview. Full scholarship provided to all admitted students.',
    topInstitutions: ['Indian Statistical Institute (ISI Kolkata)', 'Chennai Mathematical Institute (CMI Chennai) for B.Sc Math & CS'],
    careerProspects: ['Quantitative Hedge Fund Researcher', 'Data Scientist', 'Statistical Machine Learning Researcher', 'Actuary', 'Chief Risk Officer']
  }
];
