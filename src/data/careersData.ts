import { Career } from '../types';

export const CAREERS_DATA: Career[] = [
  {
    id: 'software-developer',
    title: 'Software Developer / Engineer',
    stream: 'Science',
    subStream: 'PCM / Computer Science',
    tagline: 'Architecting digital systems, apps, and platforms that power the modern world.',
    overview: 'Software Developers conceptualize, design, program, test, and maintain digital applications, web platforms, and operating systems. In India, this ranges from core systems engineering to cloud architectures and consumer apps.',
    whatTheyDo: [
      'Write clean, robust, and scalable code in languages like Python, Java, C++, TypeScript, or Go.',
      'Architect relational and non-relational database schemas and REST/GraphQL APIs.',
      'Collaborate in agile teams with product designers, QA testers, and DevOps engineers.',
      'Troubleshoot, debug, and optimize software performance, memory usage, and security.'
    ],
    skills: {
      technical: ['Data Structures & Algorithms', 'System Architecture', 'Git/GitHub', 'Cloud Computing (AWS/GCP/Azure)', 'Object-Oriented Design'],
      soft: ['Analytical Problem Solving', 'Attention to Detail', 'Team Collaboration', 'Continuous Self-Learning']
    },
    schoolSubjects: {
      essential: ['Physics', 'Mathematics'],
      recommended: ['Computer Science / Informatics Practices', 'Chemistry']
    },
    courses: ['B.Tech / B.E. in Computer Science', 'B.Tech in IT / Software Engineering', 'B.Sc / BCA in Computer Applications', 'Integrated M.Tech'],
    possiblePathways: {
      direct: 'Class 12 (PCM) -> JEE Main/Advanced or State CET -> 4-Year B.Tech in CSE -> Software Engineer campus placement.',
      alternative: 'Class 12 (Any stream with Math) -> 3-Year BCA -> MCA -> Software Developer role.',
      lateral: 'B.Sc in Math/Physics/Stats -> Open-source contributions + Bootcamps -> Junior Developer.'
    },
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'MHT-CET', 'CUET-UG'],
    workStyle: 'Hybrid / Remote / Collaborative agile sprints, high screen time, deep focus blocks.',
    workEnvironment: 'Tech campuses, agile co-working spaces, remote setups, global startup offices.',
    dimensionProfile: {
      Analytical: 95,
      Scientific: 65,
      Business: 45,
      Social: 30,
      Creative: 60,
      Practical: 80
    },
    salaryOutlookIndia: 'Entry: ₹5–14 LPA | Mid: ₹16–35 LPA | Senior/Lead: ₹40–90+ LPA',
    futureScope: 'High demand across AI engineering, distributed cloud systems, robotics, and fintech.',
    relatedCareerIds: ['data-scientist', 'cyber-security-specialist', 'game-designer'],
    icon: 'Code'
  },
  {
    id: 'doctor-surgeon',
    title: 'Doctor / Physician & Surgeon',
    stream: 'Science',
    subStream: 'PCB / Medicine',
    tagline: 'Diagnosing illnesses, saving lives, and advancing human wellness through clinical science.',
    overview: 'Medical Doctors diagnose medical disorders, prescribe pharmacological treatments, perform surgeries, and prevent illnesses in patients. The path requires profound commitment to human welfare, clinical acumen, and rigorous scientific precision.',
    whatTheyDo: [
      'Examine patient symptoms, order and interpret diagnostic imaging and biochemical blood tests.',
      'Perform complex surgical operations or administer pharmacological therapies.',
      'Counsel families on post-operative care, rehabilitation, lifestyle changes, and chronic diseases.',
      'Conduct emergency triage and critical interventions in trauma or intensive care units.'
    ],
    skills: {
      technical: ['Human Anatomy & Physiology', 'Pathology & Pharmacology', 'Surgical Dexterity', 'Diagnostic Reasoning', 'Clinical Triage'],
      soft: ['Deep Empathy', 'Emotional Resilience under Pressure', 'Ethical Decision Making', 'Clear Communication']
    },
    schoolSubjects: {
      essential: ['Physics', 'Chemistry', 'Biology / Biotechnology'],
      recommended: ['English Core', 'Psychology']
    },
    courses: ['MBBS (5.5 years including 1-year internship)', 'MD / MS (3-year Postgraduation)', 'DM / MCh (Super-specialization)'],
    possiblePathways: {
      direct: 'Class 12 (PCB) with 50%+ marks -> Clear NEET-UG -> 5.5-Year MBBS -> NEET-PG -> MD / MS Specialization.',
      alternative: 'Class 12 (PCB) -> BDS (Dental) or BAMS (Ayurvedic) or BHMS -> Clinical practice or Hospital Administration.'
    },
    entranceExams: ['NEET-UG', 'NEET-PG', 'INI-CET (AIIMS/JIPMER/PGI)'],
    workStyle: 'Shift-based, on-call hospital duty, intensive patient-facing interactions, high responsibility.',
    workEnvironment: 'Tertiary hospitals, government medical colleges, private clinics, surgical operating theaters.',
    dimensionProfile: {
      Analytical: 85,
      Scientific: 95,
      Business: 25,
      Social: 90,
      Creative: 30,
      Practical: 85
    },
    salaryOutlookIndia: 'Resident Doctor: ₹7–12 LPA | Specialist Consultant: ₹18–45 LPA | Renowned Surgeon: ₹60L–1.5 Cr+',
    futureScope: 'Constant perpetual demand; expanding rapidly into robotic surgery, telemedicine, and genomic therapy.',
    relatedCareerIds: ['sports-physiotherapist', 'research-scientist', 'biostatistician'],
    icon: 'Stethoscope'
  },
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    stream: 'Commerce',
    subStream: 'Accounting & Taxation',
    tagline: 'The financial custodians, auditors, and taxation architects of businesses.',
    overview: 'Chartered Accountants are certified statutory professionals authorized to audit financial statements, ensure taxation compliance, advise on corporate mergers, and guide strategic capital allocations in India and internationally.',
    whatTheyDo: [
      'Audit balance sheets and profit & loss statements under Indian Accounting Standards (Ind AS).',
      'Design corporate direct and indirect tax strategies (GST, Corporate Income Tax, Transfer Pricing).',
      'Provide forensic accounting services to detect financial fraud and fund misappropriations.',
      'Advise company boards on fundraising, restructuring, and regulatory filings with SEBI / MCA.'
    ],
    skills: {
      technical: ['Financial Reporting (Ind AS/IFRS)', 'Taxation Law & GST', 'Statutory Auditing', 'Financial Modeling', 'Cost Accounting'],
      soft: ['Integrity & Professional Skepticism', 'Numerical Rigor', 'High Attention to Detail', 'Executive Communication']
    },
    schoolSubjects: {
      essential: ['Accountancy', 'Economics', 'Business Studies'],
      recommended: ['Mathematics / Applied Mathematics', 'English']
    },
    courses: ['ICAI CA Program (Foundation -> Intermediate -> 2-Year Articleship -> Final)', 'B.Com / B.Com (Hons) alongside CA'],
    possiblePathways: {
      direct: 'Class 12 (Any stream, preferably Commerce) -> Register with ICAI -> CA Foundation -> CA Inter -> Articleship -> CA Final.',
      alternative: 'Graduate in B.Com with 55%+ marks -> Direct Entry to CA Intermediate (skipping Foundation) -> Articleship -> CA Final.'
    },
    entranceExams: ['ICAI CA Foundation', 'ICAI CA Intermediate & Final'],
    workStyle: 'Corporate desk hours, seasonal peak auditing travel, high compliance focus.',
    workEnvironment: 'Big 4 Audit firms (Deloitte, EY, PwC, KPMG), multinational corporations, private practice firms.',
    dimensionProfile: {
      Analytical: 95,
      Scientific: 30,
      Business: 90,
      Social: 40,
      Creative: 25,
      Practical: 60
    },
    salaryOutlookIndia: 'Fresher CA: ₹9–16 LPA | Senior Manager: ₹22–45 LPA | Partner / CFO: ₹60L–2 Cr+',
    futureScope: 'Critical necessity for all registered corporate entities; expanding into ESG auditing and algorithmic tax forensics.',
    relatedCareerIds: ['financial-analyst', 'investment-banker', 'corporate-lawyer'],
    icon: 'Calculator'
  },
  {
    id: 'clinical-psychologist',
    title: 'Clinical / Counseling Psychologist',
    stream: 'Humanities',
    subStream: 'Psychology & Mental Health',
    tagline: 'Deciphering human cognition, healing emotional wounds, and fostering mental well-being.',
    overview: 'Clinical and Counseling Psychologists assess, diagnose, and treat psychological distress, mental health disorders, and behavioral difficulties through evidence-based psychotherapy, psychological assessments, and counseling.',
    whatTheyDo: [
      'Conduct standardized psychometric assessments for cognitive functioning, personality, and neurodiversity.',
      'Deliver evidence-based psychotherapeutic modalities like Cognitive Behavioral Therapy (CBT) and ACT.',
      'Guide adolescents, students, and couples through stress management, family dynamics, and trauma recovery.',
      'Collaborate with psychiatrists, neurologists, and educators to design comprehensive care plans.'
    ],
    skills: {
      technical: ['Psychotherapeutic Modalities (CBT/DBT)', 'Psychometric Testing', 'Diagnostic DSM-5 / ICD-11 Criteria', 'Qualitative Research'],
      soft: ['Unconditional Positive Regard', 'Active Listening', 'Emotional Grounding', 'Ethical Confidentiality']
    },
    schoolSubjects: {
      essential: ['Psychology', 'English'],
      recommended: ['Biology', 'Sociology', 'Political Science']
    },
    courses: ['B.A. / B.Sc in Psychology (3-4 years)', 'M.A. / M.Sc in Clinical or Applied Psychology', 'M.Phil / Psy.D in Clinical Psychology (RCI Licensed)'],
    possiblePathways: {
      direct: 'Class 12 (Any stream, ideally Humanities/PCB) -> BA/B.Sc Psychology -> MA/M.Sc Clinical Psychology -> RCI recognized M.Phil / Psy.D -> Licensed Clinical Psychologist.',
      alternative: 'MA Psychology -> Diploma in Counseling Psychology / School Counseling -> School or Workplace Wellness Counselor.'
    },
    entranceExams: ['CUET-UG', 'CUET-PG', 'NIMHANS Entrance', 'CIP Ranchi M.Phil Entrance'],
    workStyle: 'Quiet confidential consultation sessions, emotionally demanding, deep conversational focus.',
    workEnvironment: 'Private therapy clinics, psychiatric hospitals, schools & universities, corporate employee assistance programs.',
    dimensionProfile: {
      Analytical: 65,
      Scientific: 75,
      Business: 30,
      Social: 98,
      Creative: 60,
      Practical: 45
    },
    salaryOutlookIndia: 'Counselor: ₹4–8 LPA | RCI Licensed Clinical Psychologist: ₹8–20 LPA | Senior Private Practice: ₹25–45+ LPA',
    futureScope: 'Rapidly rising awareness and de-stigmatization in India; booming demand in schools, corporates, and digital mental health apps.',
    relatedCareerIds: ['doctor-surgeon', 'high-school-teacher', 'hr-business-partner'],
    icon: 'Brain'
  },
  {
    id: 'corporate-lawyer',
    title: 'Corporate Lawyer',
    stream: 'Humanities',
    subStream: 'Law & Jurisprudence',
    tagline: 'Navigating corporate governance, mega-mergers, venture contracts, and legal advocacy.',
    overview: 'Corporate Lawyers advise businesses on their legal rights, obligations, and privileges. They structure commercial agreements, guide mergers & acquisitions (M&A), resolve intellectual property disputes, and ensure compliance with trade and company law.',
    whatTheyDo: [
      'Draft and negotiate high-stakes cross-border contracts, shareholder pacts, and technology licensing deals.',
      'Advise corporate boards on Securities and Exchange Board of India (SEBI) and Competition Commission regulations.',
      'Conduct rigorous legal due diligence during multi-crore startup funding rounds or corporate acquisitions.',
      'Represent corporate clients before tribunals like the NCLT (National Company Law Tribunal) or in commercial arbitration.'
    ],
    skills: {
      technical: ['Corporate Law & Companies Act', 'Contract Drafting & Negotiation', 'M&A Due Diligence', 'Intellectual Property Rights', 'Statutory Interpretation'],
      soft: ['Persuasive Oratory', 'Analytical Deconstruction', 'Negotiation Strategy', 'High Working Stamina']
    },
    schoolSubjects: {
      essential: ['Legal Studies / Political Science', 'English Core'],
      recommended: ['Economics', 'History', 'Sociology']
    },
    courses: ['5-Year Integrated B.A. LL.B (Hons) / B.B.A. LL.B (Hons)', '3-Year LL.B (Post-Graduation)', 'LL.M (Specialization)'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> Crack CLAT / AILET -> 5-Year Integrated BA/BBA LLB at a National Law University (NLU) -> Placement in Tier-1 Law Firm.',
      alternative: 'Graduate in B.Com/BA/B.Sc -> 3-Year LLB (via CUET-PG or DU LLB) -> Enroll with Bar Council of India.'
    },
    entranceExams: ['CLAT (Common Law Admission Test)', 'AILET (NLU Delhi)', 'SLAT (Symbiosis)', 'MHCET Law'],
    workStyle: 'Fast-paced, demanding client deadlines, precise document analysis, boardroom negotiations.',
    workEnvironment: 'Tier-1 law firms (Cyril Amarchand, Shardul Amarchand, Khaitan & Co), MNC legal counsel suites, corporate courts.',
    dimensionProfile: {
      Analytical: 90,
      Scientific: 30,
      Business: 85,
      Social: 80,
      Creative: 50,
      Practical: 45
    },
    salaryOutlookIndia: 'NLU Tier-1 Associate: ₹14–20 LPA | Senior Associate: ₹25–50 LPA | Law Firm Partner: ₹80L–3 Cr+',
    futureScope: 'High corporate investment, AI data privacy laws, patent disputes, and cross-border trade keep demand immense.',
    relatedCareerIds: ['chartered-accountant', 'civil-servant-ias', 'financial-analyst'],
    icon: 'Scale'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Product Designer',
    stream: 'Vocational',
    subStream: 'Design & Human-Computer Interaction',
    tagline: 'Bridging psychology, aesthetics, and technology to build intuitive digital human experiences.',
    overview: 'UI/UX Designers sculpt how people interact with mobile apps, websites, smart car consoles, and software interfaces. UX (User Experience) focuses on cognitive wireframes, flow, and user research, while UI (User Interface) perfects typography, visual rhythm, micro-interactions, and design systems.',
    whatTheyDo: [
      'Conduct user interviews, usability testing, and synthesize behavioral journey maps.',
      'Design interactive wireframes, clickable prototypes, and responsive interface layouts using Figma.',
      'Create and maintain scalable Design Systems with standardized tokens, components, and accessibility color contrast.',
      'Collaborate closely with frontend engineers and product managers to ensure pixel-perfect deployment.'
    ],
    skills: {
      technical: ['Figma / Sketch', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'HTML/CSS Basics', 'Information Architecture'],
      soft: ['User Empathy', 'Visual Storytelling', 'Iterative Mindset', 'Constructive Feedback Reception']
    },
    schoolSubjects: {
      essential: ['Any Stream (Science / Commerce / Humanities)', 'English'],
      recommended: ['Fine Arts / Graphic Design', 'Computer Science / IP', 'Psychology']
    },
    courses: ['B.Des in Interaction Design / Product Design', 'B.Sc in Visual Communication / Digital Media', 'B.Tech with HCI specialization'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> Clear UCEED / NID-DAT / NIFT -> 4-Year B.Des in Communication / Interaction Design -> Product Designer.',
      alternative: 'Class 12 (Any stream) -> Degree in CS, Psychology or Media -> Build a stellar portfolio of 4-5 case studies -> Junior UI/UX Designer.'
    },
    entranceExams: ['UCEED (IIT Bombay/Delhi/Guwahati)', 'NID-DAT (National Institute of Design)', 'NIFT', 'SEED (Symbiosis)'],
    workStyle: 'Creative sprint cycles, user testing sessions, cross-functional collaboration with engineering and marketing.',
    workEnvironment: 'Tech startups, design agencies, global consumer product companies, modern hybrid design studios.',
    dimensionProfile: {
      Analytical: 70,
      Scientific: 40,
      Business: 65,
      Social: 80,
      Creative: 95,
      Practical: 75
    },
    salaryOutlookIndia: 'Junior Designer: ₹6–12 LPA | Senior UX Designer: ₹18–35 LPA | Principal / Staff Designer: ₹45–80+ LPA',
    futureScope: 'Extremely high demand as every consumer service moves to digital interfaces, AR/VR spatial design, and AI copilot interaction.',
    relatedCareerIds: ['software-developer', 'game-designer', 'digital-marketer'],
    icon: 'Layout'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist & Machine Learning Specialist',
    stream: 'Science',
    subStream: 'Mathematics, Stats & AI',
    tagline: 'Mining petabytes of data with statistical algorithms to uncover hidden truths and train AI.',
    overview: 'Data Scientists blend statistical mathematics, computer algorithms, and business acumen to extract actionable insights from colossal datasets. They train predictive machine learning models that power recommendation systems, automated medical diagnosis, and fraud detection.',
    whatTheyDo: [
      'Clean, preprocess, and analyze unstructured raw data at massive scale using Python, SQL, and Spark.',
      'Train, fine-tune, and evaluate deep learning architectures and statistical models.',
      'Formulate A/B testing hypotheses to measure user behavior and commercial product optimizations.',
      'Translate complex algorithmic findings into compelling visual stories for executive leadership.'
    ],
    skills: {
      technical: ['Python (NumPy, Pandas, Scikit-learn, PyTorch)', 'Advanced Statistics & Probability', 'SQL & Big Data', 'Machine Learning Algorithms', 'Data Visualization (Tableau/PowerBI)'],
      soft: ['Curiosity & Skepticism', 'Hypothesis-Driven Thinking', 'Storytelling with Data', 'Business Contextualization']
    },
    schoolSubjects: {
      essential: ['Mathematics / Applied Mathematics', 'Physics / Computer Science'],
      recommended: ['Economics', 'English']
    },
    courses: ['B.Tech in Artificial Intelligence & Data Science', 'B.Sc / B.Stat at Indian Statistical Institute (ISI)', 'B.Sc in Mathematics & Computing'],
    possiblePathways: {
      direct: 'Class 12 (PCM) -> JEE or ISI Entrance -> B.Tech CSE/AI or B.Stat at ISI Kolkata -> Data Scientist.',
      alternative: 'Class 12 (Any stream with Math) -> B.Sc in Statistics/Math or B.Com/Economics -> M.Sc in Data Science -> Data Scientist.'
    },
    entranceExams: ['JEE Main', 'JEE Advanced', 'ISI Admission Test (Indian Statistical Institute)', 'CMI Entrance', 'CUET-UG'],
    workStyle: 'Deep analytic focus, iterative code notebooks, collaborative experiments with product and engineering.',
    workEnvironment: 'Global tech research labs, e-commerce giants, fintech platforms, pharmaceutical analytics centers.',
    dimensionProfile: {
      Analytical: 98,
      Scientific: 80,
      Business: 65,
      Social: 35,
      Creative: 55,
      Practical: 70
    },
    salaryOutlookIndia: 'Entry: ₹8–18 LPA | Senior Data Scientist: ₹24–50 LPA | Head of Data / AI: ₹60L–1.5 Cr+',
    futureScope: 'Exponential growth with generative AI, autonomous systems, personalized medicine, and climate analytics.',
    relatedCareerIds: ['software-developer', 'financial-analyst', 'biostatistician'],
    icon: 'Database'
  },
  {
    id: 'architect-urban-planner',
    title: 'Architect & Sustainable Urban Planner',
    stream: 'Science',
    subStream: 'Architecture, Spatial Design & PCM',
    tagline: 'Blending physics, engineering, environmental science, and artistry to sculpt habitable spaces.',
    overview: 'Architects design residential homes, commercial towers, cultural monuments, and sustainable urban districts. They balance structural physics, aesthetic elegance, solar orientation, ventilation, building codes, and material sustainability.',
    whatTheyDo: [
      'Draft detailed architectural blueprints, elevation sections, and 3D virtual walkthroughs using AutoCAD and Revit.',
      'Calculate spatial planning, sun-path shading, rainwater harvesting, and structural load calculations.',
      'Supervise on-site construction alongside civil contractors, structural engineers, and interior artisans.',
      'Ensure building compliance with municipal zoning laws, fire safety protocols, and green building standards (GRIHA / LEED).'
    ],
    skills: {
      technical: ['AutoCAD, Revit, Rhino, SketchUp', 'BIM (Building Information Modeling)', 'Spatial Planning & Ergonomics', 'Sustainable Building Codes (LEED/GRIHA)', 'Structural Fundamentals'],
      soft: ['Spatial Imagination', 'Aesthetic Sensitivity', 'Client Negotiation', 'Multi-disciplinary Coordination']
    },
    schoolSubjects: {
      essential: ['Physics', 'Chemistry', 'Mathematics (Mandatory for COA registration)'],
      recommended: ['Fine Arts / Engineering Graphics']
    },
    courses: ['5-Year B.Arch (Bachelor of Architecture)', 'M.Arch in Urban Design / Sustainable Architecture', 'B.Planning'],
    possiblePathways: {
      direct: 'Class 12 (PCM) -> Crack NATA or JEE Main Paper 2 -> 5-Year B.Arch at SPA / IIT / Top Architecture College -> Register with Council of Architecture (COA).',
      alternative: '3-Year Diploma in Architectural Assistantship -> Lateral entry to B.Arch -> Licensed Architect.'
    },
    entranceExams: ['NATA (National Aptitude Test in Architecture)', 'JEE Main Paper 2 (B.Arch/B.Planning)', 'AAT (Architecture Aptitude Test for IITs)'],
    workStyle: 'Studio drawing boards alternating with outdoor hard-hat construction site visits and municipal liaison.',
    workEnvironment: 'Architectural ateliers, urban planning municipal bodies, sustainable development consultancies.',
    dimensionProfile: {
      Analytical: 80,
      Scientific: 65,
      Business: 55,
      Social: 55,
      Creative: 95,
      Practical: 90
    },
    salaryOutlookIndia: 'Junior Architect: ₹4–8 LPA | Senior Project Architect: ₹14–28 LPA | Principal Architect / Firm Owner: ₹40L–1 Cr+',
    futureScope: 'High focus on smart cities, transit-oriented development, carbon-neutral architecture, and 3D-printed building technologies.',
    relatedCareerIds: ['mechanical-engineer', 'ui-ux-designer', 'environmental-scientist'],
    icon: 'Building'
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst & Investment Banker',
    stream: 'Commerce',
    subStream: 'Corporate Finance & Capital Markets',
    tagline: 'Navigating financial valuation, equity markets, venture capital, and corporate investments.',
    overview: 'Financial Analysts and Investment Bankers evaluate commercial companies, macroeconomic trends, and corporate financial health to guide high-value investments, stock market portfolios, debt financing, and initial public offerings (IPOs).',
    whatTheyDo: [
      'Build comprehensive Discounted Cash Flow (DCF) and Leveraged Buyout (LBO) valuation spreadsheets.',
      'Analyze quarterly company balance sheets, earnings reports, and management guidance.',
      'Prepare pitch decks and investor memos for private equity, venture funding, and mergers.',
      'Monitor market trends, interest rate policy shifts by the Reserve Bank of India (RBI), and currency dynamics.'
    ],
    skills: {
      technical: ['Financial Modeling & Valuation (DCF, Multiples)', 'Advanced Microsoft Excel', 'Financial Statement Analysis', 'Bloomberg Terminal / CapIQ', 'Corporate Finance Law'],
      soft: ['High Stress Tolerance', 'Persuasive Presentation', 'Commercial Acumen', 'Intellectual Stamina']
    },
    schoolSubjects: {
      essential: ['Mathematics / Applied Mathematics', 'Accountancy', 'Economics'],
      recommended: ['Business Studies', 'Statistics']
    },
    courses: ['B.Com (Hons) / BBA Finance / B.Sc Finance', 'MBA in Finance (IIMs / Top B-Schools)', 'Chartered Financial Analyst (CFA USA)'],
    possiblePathways: {
      direct: 'Class 12 (Commerce or Science with Math) -> Top Commerce College (SRCC, St. Xavier’s, Shaheed Sukhdev) -> Crack CAT -> IIM MBA in Finance -> Investment Banking Associate.',
      alternative: 'B.Com / B.Tech -> Clear CFA Levels 1, 2, and 3 -> Equity Research / Portfolio Analyst.'
    },
    entranceExams: ['CUET-UG (for top Commerce colleges)', 'IPMAT (IIM 5-Year Integrated Program)', 'CAT (for MBA)', 'CFA Exams'],
    workStyle: 'High-intensity corporate desk hours, financial models, real-time market updates, client pitches.',
    workEnvironment: 'Global investment banks (Goldman Sachs, Morgan Stanley, JP Morgan), venture capital firms, mutual fund houses.',
    dimensionProfile: {
      Analytical: 95,
      Scientific: 35,
      Business: 95,
      Social: 50,
      Creative: 30,
      Practical: 50
    },
    salaryOutlookIndia: 'Analyst: ₹10–22 LPA | Associate Banker: ₹25–55 LPA | VP / Managing Director: ₹75L–3 Cr+',
    futureScope: 'Ever-expanding Indian capital markets, sovereign wealth funds, private equity influx, and fintech algorithmic trading.',
    relatedCareerIds: ['chartered-accountant', 'corporate-lawyer', 'tech-entrepreneur'],
    icon: 'TrendingUp'
  },
  {
    id: 'investigative-journalist',
    title: 'Investigative Journalist & Media Producer',
    stream: 'Humanities',
    subStream: 'Journalism, Mass Communication & Media',
    tagline: 'Holding power accountable, discovering truth, and telling stories that inform the public conscience.',
    overview: 'Investigative Journalists research, verify, interview, and report critical stories on governance, environmental abuses, public corruption, human rights, and cultural events across print, broadcast television, podcasts, and digital investigative publications.',
    whatTheyDo: [
      'Cultivate reliable whistleblowers and confidential sources across government, industry, and civil society.',
      'File Right to Information (RTI) queries and comb through complex public audit documents and court filings.',
      'Write compelling long-form investigative exposés and produce documentary video reports.',
      'Fact-check viral digital claims rigorously to counter misinformation and fake news.'
    ],
    skills: {
      technical: ['Investigative Interviewing', 'RTI Filing & Legal Literacy', 'Digital Audio/Video Production', 'Open Source Intelligence (OSINT)', 'Data Journalism'],
      soft: ['Tenacious Persistence', 'Courage under Pressure', 'Uncompromising Integrity', 'Sharp Writing & Narrative Sense']
    },
    schoolSubjects: {
      essential: ['English Core / Regional Language', 'Political Science'],
      recommended: ['History', 'Sociology', 'Economics']
    },
    courses: ['B.A. in Journalism & Mass Communication (BJMC)', 'B.A. in English / Political Science', 'Postgraduate Diploma at IIMC / ACJ'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> BA Journalism / Humanities -> PG Diploma in Journalism from Asian College of Journalism (ACJ) or IIMC -> Staff Reporter at national media house.',
      alternative: 'Class 12 -> Degree in Science/Economics/Law -> Transition into specialized beat journalism (Science/Financial/Legal reporter).'
    },
    entranceExams: ['CUET-UG', 'IIMC Entrance Exam', 'ACJ Entrance Exam', 'XIC OET (Xavier Institute of Communications)'],
    workStyle: 'Fast-breaking newsroom rhythms alternating with deep, on-ground field investigative travel.',
    workEnvironment: 'National news bureaus, digital investigative outlets (The Wire, Scroll, Newslaundry), broadcast TV studios, field reporting.',
    dimensionProfile: {
      Analytical: 80,
      Scientific: 45,
      Business: 40,
      Social: 92,
      Creative: 88,
      Practical: 65
    },
    salaryOutlookIndia: 'Trainee Reporter: ₹3.5–6 LPA | Senior Special Correspondent: ₹10–22 LPA | Editor / Anchor: ₹25–60+ LPA',
    futureScope: 'Growing appetite for independent digital investigations, documentary podcasts, data-driven journalism, and OSINT reporting.',
    relatedCareerIds: ['corporate-lawyer', 'clinical-psychologist', 'civil-servant-ias'],
    icon: 'Newspaper'
  },
  {
    id: 'civil-servant-ias',
    title: 'Civil Servant (IAS / IPS / IFS)',
    stream: 'Humanities',
    subStream: 'Public Policy, Administration & Governance',
    tagline: 'Serving the nation, implementing public welfare policies, and leading governance across districts.',
    overview: 'Indian Civil Servants (IAS, IPS, IFS, IRS) form the administrative backbone of the Republic of India. They oversee district administration, law and order, international diplomacy, tax collections, disaster relief, and multi-crore national development schemes.',
    whatTheyDo: [
      'Manage district development as District Magistrate (DM) or maintain law & order as Superintendent of Police (SP).',
      'Draft state and national policies across education, agriculture, healthcare, and infrastructure.',
      'Coordinate emergency responses during natural disasters (floods, cyclones, pandemics).',
      'Represent India in bilateral negotiations, United Nations forums, and foreign embassies (IFS).'
    ],
    skills: {
      technical: ['Indian Constitutional Law & Governance', 'Public Policy Analysis', 'Disaster Management Protocols', 'Socio-Economic History & Geography'],
      soft: ['Statesmanship & Leadership', 'Crisis Equanimity', 'High Moral Character', 'Grassroots Empathy']
    },
    schoolSubjects: {
      essential: ['Any Stream (Science, Commerce, or Humanities)'],
      recommended: ['Political Science', 'History', 'Geography', 'Economics', 'Sociology']
    },
    courses: ['Any Bachelor’s Degree (B.A., B.Sc., B.Com., B.Tech., MBBS, LL.B.) — UPSC requires any recognized graduate degree'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> Complete 3 or 4-year Graduation -> Prepare and clear UPSC Civil Services Examination (Prelims -> Mains -> Personality Interview) -> LBSNAA Training -> IAS / IPS / IFS officer.',
      alternative: 'State Public Service Commission (State PCS / KAS / UPPSC / MPSC) -> State Administrative Service -> Cadre promotion to IAS.'
    },
    entranceExams: ['UPSC Civil Services Examination (CSE)', 'State PCS Examinations'],
    workStyle: 'High authority, intense public responsibility, nationwide postings, constant public service duty.',
    workEnvironment: 'District Collectorates, Police Headquarters, State Secretariats, Central Ministries in New Delhi, Indian Foreign Missions.',
    dimensionProfile: {
      Analytical: 85,
      Scientific: 45,
      Business: 65,
      Social: 98,
      Creative: 45,
      Practical: 70
    },
    salaryOutlookIndia: 'Junior Scale (SDM): ₹56,100/mo + perks | DM / Secretary: ₹1,00,000–2,25,000/mo + government accommodation, official security & vehicle',
    futureScope: 'Unmatched platform for grassroots impact, policy formulation, national prestige, and systemic social transformation.',
    relatedCareerIds: ['corporate-lawyer', 'investigative-journalist', 'high-school-teacher'],
    icon: 'ShieldCheck'
  },
  {
    id: 'tech-entrepreneur',
    title: 'Tech Entrepreneur / Startup Founder',
    stream: 'Commerce',
    subStream: 'Entrepreneurship & Innovation',
    tagline: 'Identifying untapped market problems, building disruptive solutions, and scaling high-impact ventures.',
    overview: 'Entrepreneurs take calculated risks to invent new business models, build revolutionary products, raise venture capital, and recruit high-performing teams to solve pressing real-world problems at scale.',
    whatTheyDo: [
      'Identify acute customer pain points and engineer a compelling Minimum Viable Product (MVP).',
      'Pitch to angel investors, venture capitalists, and negotiate term sheets and equity capitalization.',
      'Attract, inspire, and manage cross-functional engineering, sales, marketing, and operations talent.',
      'Iterate on customer feedback rapidly, manage company cash runways, and pivot strategies when necessary.'
    ],
    skills: {
      technical: ['Product Lifecycle Management', 'Unit Economics & Financial Forecasting', 'Growth Hacking & Digital Marketing', 'Tech Ecosystem Understanding'],
      soft: ['Extreme Resilience & Grit', 'Inspirational Leadership', 'Risk Appetite', 'First-Principles Thinking']
    },
    schoolSubjects: {
      essential: ['Any Stream (Science with Math or Commerce preferred)'],
      recommended: ['Economics', 'Computer Science', 'Business Studies / Entrepreneurship']
    },
    courses: ['B.Tech in CS/Engineering', 'BBA in Entrepreneurship', 'B.Com', 'BS in Technology Management', 'MBA'],
    possiblePathways: {
      direct: 'Build projects in school/college -> Launch startup during college -> Incubate at campus incubator (e.g. IIT/IIM e-cells) -> Secure seed investment.',
      alternative: 'Work 3–5 years at high-growth tech startups as a product manager or software lead -> Identify market gap -> Launch venture.'
    },
    entranceExams: ['JEE (for engineering/IIT ecosystem)', 'IPMAT / CUET (for business foundations)', 'CAT / GMAT (for network and venture capital access)'],
    workStyle: 'Autonomous, 24/7 hustle during early stages, high ambiguity, frequent public presentations.',
    workEnvironment: 'Co-working incubators, dynamic startup headquarters, investor pitch rooms, customer site visits.',
    dimensionProfile: {
      Analytical: 85,
      Scientific: 55,
      Business: 98,
      Social: 80,
      Creative: 85,
      Practical: 80
    },
    salaryOutlookIndia: 'Early stage: Founder sweat equity & living stipend | Scaled/Funded: ₹25–60 LPA salary + substantial equity valuation (crores)',
    futureScope: 'India is the 3rd largest startup ecosystem globally; immense opportunities in climate tech, AI, deeptech, healthtech, and agritech.',
    relatedCareerIds: ['financial-analyst', 'software-developer', 'ui-ux-designer'],
    icon: 'Rocket'
  },
  {
    id: 'mechanical-engineer',
    title: 'Aerospace & Mechanical Engineer',
    stream: 'Science',
    subStream: 'PCM / Heavy Machinery & Aeronautics',
    tagline: 'Designing aircraft, propulsion rockets, electric vehicles, and precision automated machinery.',
    overview: 'Mechanical and Aerospace Engineers apply thermodynamics, fluid mechanics, structural dynamics, and materials science to design everything from ISRO launch rockets and jet engines to electric mobility drivetrains and renewable energy turbines.',
    whatTheyDo: [
      'Run Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) aerodynamic simulations.',
      'Design precision mechanical CAD assemblies, gearboxes, thermal heat exchangers, and chassis.',
      'Conduct wind-tunnel testing, vibration testing, and destructive crash simulations for safety compliance.',
      'Oversee precision CNC fabrication, additive 3D metal printing, and automated assembly line robotics.'
    ],
    skills: {
      technical: ['CAD / SolidWorks / CATIA / ANSYS', 'Thermodynamics & Heat Transfer', 'Fluid Mechanics & Aerodynamics', 'Materials Metallurgy', 'Robotics & Mechatronics'],
      soft: ['Spatial Analytical Thinking', 'Safety-Critical Diligence', 'Cross-Functional Teamwork', 'Problem-Solving Tenacity']
    },
    schoolSubjects: {
      essential: ['Physics', 'Mathematics', 'Chemistry'],
      recommended: ['Engineering Graphics', 'Computer Science']
    },
    courses: ['B.Tech / B.E. in Mechanical Engineering', 'B.Tech in Aerospace / Aeronautical Engineering', 'M.Tech / MS in Thermal / Aerospace Systems'],
    possiblePathways: {
      direct: 'Class 12 (PCM) -> Crack JEE Main & Advanced -> B.Tech in Mechanical / Aerospace at IITs / NITs / IIST -> Placement at ISRO, DRDO, Boeing, Airbus, Tata Motors.',
      alternative: 'B.Tech in Mechanical -> Gate Exam -> M.Tech in Propulsion / Robotics -> Specialized R&D Engineer.'
    },
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'IIST Admission (via JEE Advanced)'],
    workStyle: 'Mix of high-performance CAD simulation workstations and hands-on manufacturing shop floors / clean rooms.',
    workEnvironment: 'Aerospace research facilities (ISRO, HAL, DRDO), automotive R&D design studios, defense labs, advanced manufacturing plants.',
    dimensionProfile: {
      Analytical: 92,
      Scientific: 88,
      Business: 35,
      Social: 30,
      Creative: 70,
      Practical: 95
    },
    salaryOutlookIndia: 'Graduate Engineer Trainee: ₹6–12 LPA | Specialist R&D Engineer: ₹15–32 LPA | Chief Aerospace Architect: ₹40–75+ LPA',
    futureScope: 'Booming private space sector in India (Skyroot, Agnikul), electric vehicle revolution, and defense aerospace indigenization.',
    relatedCareerIds: ['software-developer', 'architect-urban-planner', 'research-scientist'],
    icon: 'Plane'
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist (Biotechnology / Physics / Chemistry)',
    stream: 'Science',
    subStream: 'Pure Sciences & Fundamental Research',
    tagline: 'Expanding the frontiers of human knowledge through empirical discovery and experiments.',
    overview: 'Research Scientists work at premier scientific institutes (IISc, TIFR, CSIR, ICMR) investigating the foundational laws of nature, synthesizing novel pharmaceutical compounds, formulating quantum computing qubits, or developing drought-resistant crops.',
    whatTheyDo: [
      'Formulate novel hypotheses and design controlled laboratory experiments.',
      'Operate advanced instrumentation: electron microscopes, mass spectrometers, NMR, and particle colliders.',
      'Analyze statistical experimental data, write peer-reviewed scientific papers for journals like Nature and Science.',
      'Apply for research grants and mentor doctoral and postgraduate scholars.'
    ],
    skills: {
      technical: ['Experimental Design & Laboratory Safety', 'Statistical Data Validation', 'Spectroscopy & Chromatography', 'Academic Scientific Writing', 'Grant Formulation'],
      soft: ['Intellectual Honesty & Patience', 'First-Principles Curiosity', 'Perseverance through Failed Experiments', 'Critical Evaluation']
    },
    schoolSubjects: {
      essential: ['Physics', 'Chemistry', 'Mathematics or Biology (PCMB is ideal)'],
      recommended: ['English', 'Computer Science']
    },
    courses: ['B.S. / B.Sc (Research) at IISc / IISER', 'Integrated M.Sc (5 Years)', 'Ph.D in Specialized Domain (4-5 Years)', 'Post-Doctoral Fellowship'],
    possiblePathways: {
      direct: 'Class 12 (Science) -> Clear IAT / NEST / JEE -> BS-MS at IISERs or IISc Bangalore -> Ph.D -> Scientist at CSIR/ISRO or University Professor.',
      alternative: 'B.Sc -> Crack JAM (Joint Admission test for Masters) -> M.Sc at IIT -> CSIR-NET JRF -> Ph.D.'
    },
    entranceExams: ['IISER Aptitude Test (IAT)', 'NEST (NISER / CEBS)', 'IIT-JAM', 'CSIR-UGC NET (JRF)', 'GATE'],
    workStyle: 'Focused laboratory investigation, academic conferences, deep literature review, experimental cycles.',
    workEnvironment: 'World-class scientific research institutions, university cleanrooms, pharmaceutical R&D labs.',
    dimensionProfile: {
      Analytical: 95,
      Scientific: 98,
      Business: 20,
      Social: 35,
      Creative: 65,
      Practical: 85
    },
    salaryOutlookIndia: 'PhD Fellow: ₹37,000–42,000/mo stipend + HRA | Scientist ‘C’/‘D’ in Gov Labs: ₹12–20 LPA | Senior Scientist / R&D Director in Pharma: ₹28–60+ LPA',
    futureScope: 'Crucial for pandemic defense, renewable hydrogen energy, quantum computing, and agricultural self-sufficiency.',
    relatedCareerIds: ['doctor-surgeon', 'environmental-scientist', 'biostatistician'],
    icon: 'Microscope'
  },
  {
    id: 'game-designer',
    title: 'Game Designer & 3D Animator',
    stream: 'Vocational',
    subStream: 'Interactive Media & Gaming',
    tagline: 'Crafting immersive virtual worlds, character narratives, mechanics, and interactive play.',
    overview: 'Game Designers and Animators conceptualize core gameplay mechanics, level architecture, character narratives, and 3D visual assets for PC, mobile, console, and VR experiences, transforming abstract ideas into playable adventures.',
    whatTheyDo: [
      'Draft Game Design Documents (GDD) specifying character rules, progression loops, and win/loss states.',
      'Sculpt, texture, rig, and animate 3D characters and environmental assets in Blender, Maya, and ZBrush.',
      'Build and script interactive gameplay levels in Unreal Engine 5 or Unity using visual scripting or C#/C++.',
      'Conduct playtests, balance difficulty curves, and tune player psychological reward systems.'
    ],
    skills: {
      technical: ['Unity / Unreal Engine 5', 'Blender / Maya / ZBrush', '3D Rigging & Keyframe Animation', 'Level Design & Spatial Flow', 'C# / C++ Basics'],
      soft: ['Imaginative Storytelling', 'Player Psychology Empathy', 'Creative Problem Solving', 'Attention to Artistic Nuance']
    },
    schoolSubjects: {
      essential: ['Any Stream (Science or Vocational preferred for technical game dev, Arts for visual arts)'],
      recommended: ['Fine Arts / Applied Arts', 'Computer Science / Math', 'English']
    },
    courses: ['B.Des in Game Design & Animation', 'B.Sc in Animation & VFX', 'B.Tech in Computer Science with Game Tech'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> B.Des / B.Sc in Game Design & Animation -> Build playable game demos on itch.io -> Junior Game Designer at a gaming studio.',
      alternative: 'Class 12 (PCM) -> B.Tech CSE -> Specialize in Game Physics / Graphics Programming -> Game Engine Developer.'
    },
    entranceExams: ['UCEED', 'NID-DAT', 'SEED', 'Private Gaming Academy Portfolios (Rubika, DSK)'],
    workStyle: 'Studio team sprints, daily playtests, creative feedback rounds, dual-monitor digital drafting.',
    workEnvironment: 'Game development studios, animation & VFX production houses, virtual production stages.',
    dimensionProfile: {
      Analytical: 65,
      Scientific: 40,
      Business: 45,
      Social: 50,
      Creative: 98,
      Practical: 85
    },
    salaryOutlookIndia: 'Junior Game Artist/Designer: ₹4.5–9 LPA | Lead Level Designer: ₹14–26 LPA | Studio Game Director: ₹35–65+ LPA',
    futureScope: 'Rapidly exploding gaming market in India with AAA studios establishing Indian branches and mobile esports booming.',
    relatedCareerIds: ['ui-ux-designer', 'software-developer', 'fashion-designer'],
    icon: 'Gamepad2'
  },
  {
    id: 'commercial-pilot',
    title: 'Commercial Airline Pilot',
    stream: 'Science',
    subStream: 'PCM / Aviation',
    tagline: 'Commanding high-performance commercial aircraft and connecting continents through the skies.',
    overview: 'Commercial Pilots fly multi-engine passenger airliners and cargo jets across domestic and international flight corridors. They master aeronautical aerodynamics, navigation, meteorology, air traffic control protocols, and flight simulator crisis management.',
    whatTheyDo: [
      'Complete pre-flight weather assessments, calculate fuel reserves, and inspect aircraft airworthiness.',
      'Execute smooth takeoff, instrument navigation, cruise fuel management, and precise runway landings.',
      'Communicate seamlessly with Air Traffic Control (ATC) and manage cockpit crew resource coordination.',
      'Execute emergency checklists during turbulence, engine irregularities, or adverse weather conditions.'
    ],
    skills: {
      technical: ['Aircraft Flight Systems & Avionics', 'Aviation Meteorology & Weather Radar', 'Instrument Flight Rules (IFR)', 'Radio Telephony Protocols', 'Cockpit Resource Management (CRM)'],
      soft: ['Situational Awareness', 'Calmness under Extreme Stress', 'Decisive Authority', 'Uncompromising Discipline']
    },
    schoolSubjects: {
      essential: ['Physics', 'Mathematics (Mandatory as per DGCA regulations)'],
      recommended: ['English', 'Geography']
    },
    courses: ['Commercial Pilot License (CPL) Training Program (200 flight hours)', 'B.Sc in Aviation (Optional)', 'Type Rating (A320 or B737)'],
    possiblePathways: {
      direct: 'Class 12 (PCM with 50%+ in Physics & Math) -> Class 1 Medical Fitness by DGCA -> Clear DGCA Theory Exams -> Cadet Pilot Program (Indigo/Air India) or Flying School -> 200 Flight Hours -> CPL -> Type Rating -> First Officer.',
      alternative: 'National Defence Academy (NDA) / Air Force Common Admission Test (AFCAT) -> Indian Air Force Fighter/Transport Pilot -> Later transition to Commercial Aviation.'
    },
    entranceExams: ['DGCA CPL Exams (Air Navigation, Meteorology, Air Regulations, Technical)', 'Cadet Pilot Aptitude Assessments (COMPASS/PILAPT)', 'NDA / AFCAT'],
    workStyle: 'Shift roster, early mornings/late nights, time zone travel, strict medical clearances and annual simulator audits.',
    workEnvironment: 'State-of-the-art glass cockpits of Airbus A320/A350 & Boeing 777/787 aircraft, international airport terminals.',
    dimensionProfile: {
      Analytical: 85,
      Scientific: 75,
      Business: 35,
      Social: 45,
      Creative: 25,
      Practical: 98
    },
    salaryOutlookIndia: 'First Officer (Junior): ₹18–28 LPA | Senior First Officer: ₹30–45 LPA | Captain / Commander: ₹65L–1.2 Cr+',
    futureScope: 'Huge surge with hundreds of new aircraft ordered by Indian airlines (Air India, IndiGo) creating massive pilot demand.',
    relatedCareerIds: ['mechanical-engineer', 'sports-physiotherapist', 'forensic-scientist'],
    icon: 'Compass'
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketing Strategist & Growth Lead',
    stream: 'Commerce',
    subStream: 'Marketing, E-Commerce & Analytics',
    tagline: 'Driving brand growth, customer acquisition, and viral campaigns through data and psychology.',
    overview: 'Digital Marketers engineer multi-channel customer acquisition funnels, combining consumer psychology, algorithmic ad platforms (Meta, Google, TikTok), search engine optimization (SEO), and conversion analytics to scale businesses.',
    whatTheyDo: [
      'Design and manage high-ROI performance marketing ad campaigns across Google Ads and Meta Ads.',
      'Analyze customer acquisition cost (CAC), lifetime value (LTV), and click-through conversion rates.',
      'Develop content strategies, brand storytelling campaigns, and influencer partnerships.',
      'Optimize website landing pages and search engine visibility through technical SEO.'
    ],
    skills: {
      technical: ['Performance Marketing (Google/Meta Ads)', 'Web Analytics (GA4, Mixpanel)', 'Search Engine Optimization (SEO)', 'Marketing Automation & CRM', 'A/B Testing'],
      soft: ['Consumer Psychology Empathy', 'Creative Copywriting', 'Agile Experimentation', 'Data-Driven Intuition']
    },
    schoolSubjects: {
      essential: ['Any Stream (Commerce, Humanities, or Science)'],
      recommended: ['Business Studies', 'Economics', 'Psychology', 'Computer Science / IP']
    },
    courses: ['BBA in Marketing / Digital Business', 'B.Com', 'B.A. in Media & Communications', 'MBA in Marketing'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> BBA / B.Com -> Internships managing live social media / ad budgets -> Digital Marketing Specialist.',
      alternative: 'Class 12 -> Self-taught certifications (Google, Meta, HubSpot) -> Freelance marketing -> Growth Lead.'
    },
    entranceExams: ['CUET-UG', 'IPMAT', 'CAT (for MBA Marketing)', 'NPAT'],
    workStyle: 'Fast-paced, metric-driven dashboards, continuous campaign iteration, cross-team brainstorming.',
    workEnvironment: 'E-commerce corporations, digital marketing agencies, D2C brand offices, high-growth startups.',
    dimensionProfile: {
      Analytical: 75,
      Scientific: 30,
      Business: 92,
      Social: 75,
      Creative: 88,
      Practical: 65
    },
    salaryOutlookIndia: 'Digital Marketer: ₹4.5–9 LPA | Growth Marketing Manager: ₹14–25 LPA | Chief Marketing Officer (CMO): ₹45L–1 Cr+',
    futureScope: 'Essential for all consumer and B2B enterprises worldwide; expanding into AI-generated marketing and hyper-personalized ad targeting.',
    relatedCareerIds: ['ui-ux-designer', 'tech-entrepreneur', 'investigative-journalist'],
    icon: 'Target'
  },
  {
    id: 'cyber-security-specialist',
    title: 'Cyber Security Analyst & Ethical Hacker',
    stream: 'Science',
    subStream: 'PCM / Network Security',
    tagline: 'Defending critical national infrastructure, banking grids, and corporate networks against cyber attacks.',
    overview: 'Cyber Security Specialists protect digital architectures, banking channels, and sensitive personal information from cyber threats. They conduct ethical hacking (penetration testing), build defensive firewalls, and respond to cyber warfare incidents.',
    whatTheyDo: [
      'Conduct authorized penetration testing to discover security loopholes before malicious hackers do.',
      'Monitor Security Operations Center (SOC) dashboards for intrusion attempts, malware, and ransomware.',
      'Design zero-trust cryptographic security architectures and encryption protocols.',
      'Investigate digital security breaches and perform digital forensics for legal compliance.'
    ],
    skills: {
      technical: ['Network Protocols (TCP/IP, OSI)', 'Penetration Testing (Kali Linux, Metasploit, Burp Suite)', 'Cryptography & PKI', 'Cloud Security (AWS/Azure)', 'Reverse Engineering & Python/Bash Scripting'],
      soft: ['Ethical Integrity', 'Analytical Investigative Tenacity', 'Crisis Calmness', 'Anticipatory Thinking']
    },
    schoolSubjects: {
      essential: ['Physics', 'Mathematics'],
      recommended: ['Computer Science / Information Practices']
    },
    courses: ['B.Tech in Computer Science / Cyber Security', 'B.Sc in Cyber Security / Forensic Science', 'Certifications (CEH, OSCP, CISSP)'],
    possiblePathways: {
      direct: 'Class 12 (PCM) -> B.Tech in CSE / Cyber Security -> Clear CEH (Certified Ethical Hacker) / OSCP -> Security Analyst.',
      alternative: 'Class 12 -> BCA / B.Sc IT -> Practical CTF (Capture the Flag) bug bounties -> Security Consultant.'
    },
    entranceExams: ['JEE Main', 'BITSAT', 'VITEEE', 'State CETs'],
    workStyle: 'High-alert monitoring, confidential protocols, incident response drills, Capture-The-Flag challenges.',
    workEnvironment: 'Corporate defense rooms, banking security centers, national security agencies (CERT-In, NTRO), defense cyber agencies.',
    dimensionProfile: {
      Analytical: 96,
      Scientific: 60,
      Business: 40,
      Social: 30,
      Creative: 55,
      Practical: 92
    },
    salaryOutlookIndia: 'Security Analyst: ₹6–14 LPA | Penetration Tester: ₹12–25 LPA | Chief Information Security Officer (CISO): ₹45L–1.2 Cr+',
    futureScope: 'Critical national and corporate priority with escalating cyber warfare, AI-driven phishing, and strict global data protection laws.',
    relatedCareerIds: ['software-developer', 'data-scientist', 'forensic-scientist'],
    icon: 'Lock'
  },
  {
    id: 'sports-physiotherapist',
    title: 'Sports Physiotherapist & Athletic Rehabilitation Specialist',
    stream: 'Vocational',
    subStream: 'Sports Science & Physical Therapy',
    tagline: 'Enhancing athletic biomechanics, rehabilitating injuries, and optimizing human physical performance.',
    overview: 'Sports Physiotherapists work with national athletes, sports franchises (IPL, ISL), and active individuals to prevent musculoskeletal injuries, design rehabilitation regimens, and maximize physical endurance through biomechanics and sports medicine.',
    whatTheyDo: [
      'Assess musculoskeletal posture, joint flexibility, and running/jumping biomechanics.',
      'Treat acute sports injuries (ligament tears, tendonitis, muscle strains) with manual therapy and electrotherapy.',
      'Design customized rehabilitation and strength conditioning protocols for competitive athletes.',
      'Provide on-field emergency medical care during live tournaments and high-contact matches.'
    ],
    skills: {
      technical: ['Human Musculoskeletal Anatomy', 'Biomechanics & Kinesiology', 'Manual Joint Mobilization', 'Dry Needling & Taping', 'Exercise Physiology'],
      soft: ['Patient Motivation & Encouragement', 'Observational Precision', 'Physical Stamina', 'Empathetic Rapport']
    },
    schoolSubjects: {
      essential: ['Physics', 'Chemistry', 'Biology (PCB)'],
      recommended: ['Physical Education', 'Psychology']
    },
    courses: ['4.5-Year Bachelor of Physiotherapy (BPT) including 6 months internship', 'Master of Physiotherapy (MPT) in Sports'],
    possiblePathways: {
      direct: 'Class 12 (PCB with 50%+) -> Clear State CET or University Entrance -> 4.5-Year BPT -> 2-Year MPT in Sports Physiotherapy -> Sports Team Physiotherapist.',
      alternative: 'BPT -> Work in orthopedic rehabilitation clinic -> Complete sports taping & strength training certifications -> Sports franchise consultant.'
    },
    entranceExams: ['NEET-UG (for certain government institutions)', 'State CETs (MHT-CET, KCET)', 'IPU CET'],
    workStyle: 'Active physical movement, on-pitch presence during matches, gymnasium training sessions.',
    workEnvironment: 'Professional sports teams (BCCI, IPL, ISL), Olympic training academies, sports injury hospitals, private wellness centers.',
    dimensionProfile: {
      Analytical: 65,
      Scientific: 85,
      Business: 40,
      Social: 85,
      Creative: 35,
      Practical: 95
    },
    salaryOutlookIndia: 'Clinic Physiotherapist: ₹3.5–7 LPA | Sports Team Physio: ₹10–25 LPA | Elite National / IPL Physio: ₹35–80+ LPA',
    futureScope: 'Rapid growth driven by Khelo India, privatization of national sports leagues, marathon culture, and corporate fitness awareness.',
    relatedCareerIds: ['doctor-surgeon', 'high-school-teacher', 'environmental-scientist'],
    icon: 'Activity'
  },
  {
    id: 'environmental-scientist',
    title: 'Environmental Scientist & Sustainability Consultant',
    stream: 'Science',
    subStream: 'Ecology, Climate & Sustainability',
    tagline: 'Protecting ecosystems, auditing carbon footprints, and creating climate-resilient futures.',
    overview: 'Environmental Scientists study the interactions between biological systems, human activity, and the biosphere. They monitor industrial pollution, assess carbon neutrality pathways, restore degraded habitats, and ensure corporations meet stringent ESG environmental norms.',
    whatTheyDo: [
      'Collect and analyze environmental samples of soil, groundwater, air particulates, and toxic effluents.',
      'Conduct Environmental Impact Assessments (EIA) for mega infrastructure and industrial projects.',
      'Develop corporate carbon-reduction and renewable transition strategies to achieve Net-Zero.',
      'Collaborate with forest departments and wildlife sanctuaries on biodiversity conservation projects.'
    ],
    skills: {
      technical: ['Environmental Sampling & Lab Analysis', 'GIS & Satellite Remote Sensing', 'Carbon Accounting & ESG Standards', 'Environmental Law & Policy', 'Ecological Modeling'],
      soft: ['Ecological Passion', 'Scientific Rigor', 'Multi-Stakeholder Diplomacy', 'Field Adaptability']
    },
    schoolSubjects: {
      essential: ['Biology / Chemistry', 'Physics / Mathematics'],
      recommended: ['Geography', 'Environmental Studies']
    },
    courses: ['B.Sc in Environmental Science / Ecology', 'B.Tech in Environmental Engineering', 'M.Sc / M.Tech in Climate Change & Sustainability Studies'],
    possiblePathways: {
      direct: 'Class 12 (Science) -> B.Sc / B.Tech in Environmental Science/Engineering -> M.Sc -> Sustainability Consultant or Central Pollution Control Board (CPCB) Scientist.',
      alternative: 'Class 12 (PCB) -> B.Sc Botany/Zoology -> M.Sc in Wildlife Biology / Ecology -> Wildlife Conservationist.'
    },
    entranceExams: ['CUET-UG', 'JEE Main (for Environmental Engg)', 'GATE', 'TERI SAS Entrance'],
    workStyle: 'Outdoor field research expeditions alternating with lab spectroscopy and corporate sustainability board presentations.',
    workEnvironment: 'Ecological field reserves, environmental testing labs, corporate ESG sustainability departments, United Nations / World Bank initiatives.',
    dimensionProfile: {
      Analytical: 80,
      Scientific: 95,
      Business: 55,
      Social: 75,
      Creative: 50,
      Practical: 88
    },
    salaryOutlookIndia: 'Junior Analyst: ₹4.5–8 LPA | ESG / Sustainability Lead: ₹14–28 LPA | Global Sustainability Director: ₹35–70+ LPA',
    futureScope: 'Exponential demand as global climate compliance tightens, green energy surges, and carbon trading markets expand.',
    relatedCareerIds: ['research-scientist', 'architect-urban-planner', 'civil-servant-ias'],
    icon: 'Leaf'
  },
  {
    id: 'fashion-designer',
    title: 'Fashion & Apparel Designer',
    stream: 'Vocational',
    subStream: 'Apparel Design & Textile Craft',
    tagline: 'Translating culture, human form, and innovative textiles into wearable aesthetic statements.',
    overview: 'Fashion Designers conceptualize clothing ranges, haute couture, footwear, and accessory lines. They sketch original garment silhouettes, select specialized weaves and dyes, engineer patterns, and direct runway presentations and retail brand collections.',
    whatTheyDo: [
      'Research global trend forecasts, historical apparel silhouettes, and cultural textile traditions.',
      'Create original fashion illustration collections and technical specification garment tech packs.',
      'Drape fabrics on mannequins, experiment with pattern grading, surface ornamentation, and embroidery.',
      'Supervise garment sampling, fit testing, and coordinate seasonal runway fashion exhibitions.'
    ],
    skills: {
      technical: ['Fashion Illustration & CAD (Clo3D, Adobe Illustrator)', 'Pattern Making & Draping', 'Textile Science & Dyeing', 'Garment Construction & Tailoring', 'Fashion Merchandising'],
      soft: ['Distinct Aesthetic Vision', 'Cultural Sensitivity', 'Attention to Texture & Silhouette', 'Collaborative Direction']
    },
    schoolSubjects: {
      essential: ['Any Stream (Humanities, Commerce, or Science)'],
      recommended: ['Fine Arts / Applied Arts', 'Home Science', 'History / Cultural Studies']
    },
    courses: ['4-Year B.Des in Fashion Design (NIFT / Pearl Academy)', 'B.Des in Textile Design / Knitwear Design', 'M.Des in Fashion Innovation'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> Clear NIFT Entrance Exam (CAT & GAT) -> 4-Year B.Des in Fashion Design at NIFT -> Assistant Designer to top couturier or retail apparel brand.',
      alternative: 'Class 12 -> Degree in Fine Arts or Commerce -> Diploma in Fashion Styling / Design -> Independent Fashion Label.'
    },
    entranceExams: ['NIFT Entrance Exam', 'NID-DAT', 'UCEED', 'Pearl Academy Entrance'],
    workStyle: 'Vibrant design ateliers, fabric market scouting, fitting sessions, hectic pre-fashion week schedules.',
    workEnvironment: 'Fashion houses (Sabyasachi, Manish Malhotra), apparel export houses, modern retail brands (Zara, Fabindia), independent design studios.',
    dimensionProfile: {
      Analytical: 40,
      Scientific: 35,
      Business: 70,
      Social: 65,
      Creative: 99,
      Practical: 90
    },
    salaryOutlookIndia: 'Assistant Designer: ₹4–7.5 LPA | Senior Brand Designer: ₹12–25 LPA | Established Couturier / Label Owner: ₹40L–2 Cr+',
    futureScope: 'High growth in sustainable slow fashion, 3D digital garment prototyping (Clo3D), and global exports of Indian artisan textiles.',
    relatedCareerIds: ['ui-ux-designer', 'game-designer', 'digital-marketer'],
    icon: 'Scissors'
  },
  {
    id: 'forensic-scientist',
    title: 'Forensic Scientist & Crime Scene Investigator',
    stream: 'Science',
    subStream: 'Forensic Science & Criminology',
    tagline: 'Applying biological and chemical science to uncover physical evidence and serve justice.',
    overview: 'Forensic Scientists work in Central and State Forensic Science Laboratories (FSL). They examine crime scene trace evidence—such as ballistic striations, DNA samples, toxicology residues, and fingerprint latents—to provide irrefutable evidence in court.',
    whatTheyDo: [
      'Process crime scenes meticulously to identify, document, and preserve physical biological and chemical evidence.',
      'Perform DNA profiling, capillary electrophoresis, blood-splatter analysis, and toxicological mass spectrometry.',
      'Examine firearms, spent bullet cartridges, questioned documents, and handwriting samples.',
      'Present objective, evidence-based scientific testimony as expert witnesses in criminal trials.'
    ],
    skills: {
      technical: ['DNA Fingerprinting & PCR', 'Gas Chromatography-Mass Spectrometry (GC-MS)', 'Ballistics & Microscopic Comparison', 'Chain of Custody Legal Protocol', 'Toxicological Screening'],
      soft: ['Unshakable Objectivity', 'Meticulous Attention to Detail', 'Emotional Detachment in Grim Scenarios', 'Methodical Patience']
    },
    schoolSubjects: {
      essential: ['Physics', 'Chemistry', 'Biology / Mathematics (PCB/PCMB)'],
      recommended: ['Psychology', 'Computer Science']
    },
    courses: ['B.Sc in Forensic Science (3-4 years)', 'M.Sc in Forensic Science (National Forensic Sciences University - NFSU)', 'Ph.D in Forensic Criminology'],
    possiblePathways: {
      direct: 'Class 12 (Science) -> NFSU Admission Test -> B.Sc-M.Sc Integrated Forensic Science at NFSU Gandhinagar -> Scientific Assistant / Officer at Central FSL / CBI.',
      alternative: 'Class 12 (PCB) -> B.Sc in Chemistry/Biotechnology -> M.Sc in Forensic Science -> State FSL recruitment.'
    },
    entranceExams: ['NFAT (National Forensic Admission Test by NFSU)', 'CUET-UG', 'State University Entrances'],
    workStyle: 'Clean, sterile laboratory protocols alternating with sudden on-call crime scene investigations.',
    workEnvironment: 'State and Central Forensic Science Laboratories, CBI crime labs, police investigation departments, NFSU campuses.',
    dimensionProfile: {
      Analytical: 95,
      Scientific: 95,
      Business: 20,
      Social: 55,
      Creative: 35,
      Practical: 90
    },
    salaryOutlookIndia: 'Scientific Assistant: ₹4.5–7 LPA | Senior Scientific Officer (Govt FSL): ₹10–18 LPA | Director of FSL: ₹22–35 LPA',
    futureScope: 'Expanding rapidly with new criminal justice laws mandating mandatory forensic visits for serious offenses in India.',
    relatedCareerIds: ['doctor-surgeon', 'cyber-security-specialist', 'research-scientist'],
    icon: 'Fingerprint'
  },
  {
    id: 'high-school-teacher',
    title: 'High School Educator & Academic Mentor',
    stream: 'Humanities',
    subStream: 'Education & Pedagogy',
    tagline: 'Igniting student potential, shaping young minds, and building the foundations of future generations.',
    overview: 'High School Educators inspire, instruct, and mentor students through their pivotal Classes 8–12 years. They create interactive lesson pedagogies, build experiential classroom laboratories, nurture critical thinking, and guide students through adolescent challenges.',
    whatTheyDo: [
      'Design engaging, curriculum-aligned lesson plans that foster conceptual understanding rather than rote memorization.',
      'Conduct hands-on classroom experiments, group discussions, and creative learning activities.',
      'Assess student learning gaps through formative evaluations and provide differentiated one-on-one mentorship.',
      'Collaborate with parents and counselors to nurture students’ emotional and academic well-being.'
    ],
    skills: {
      technical: ['Subject Matter Mastery', 'Curriculum & Lesson Planning', 'Educational Technology (Smart Boards, LMS)', 'Formative & Summative Assessment', 'Pedagogical Psychology'],
      soft: ['Infectious Enthusiasm', 'Infinite Patience & Empathy', 'Clear Articulate Communication', 'Inspirational Mentorship']
    },
    schoolSubjects: {
      essential: ['Subject of specialization in Class 11-12 (Maths/Physics/History/English/etc.)'],
      recommended: ['Psychology', 'Sociology']
    },
    courses: ['Bachelor’s Degree in Subject (B.Sc / B.A. / B.Com)', '2-Year B.Ed (Bachelor of Education) or 4-Year Integrated ITEP (B.Sc B.Ed / B.A. B.Ed)', 'M.A. / M.Sc for Senior Secondary (PGT)'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> 4-Year Integrated B.A. B.Ed / B.Sc B.Ed -> Clear Central Teacher Eligibility Test (CTET) -> TGT / PGT Teacher in reputed CBSE/ICSE school.',
      alternative: 'Graduate in B.Sc/B.A. -> Master’s Degree (M.Sc/M.A.) -> 2-Year B.Ed -> Post Graduate Teacher (PGT).'
    },
    entranceExams: ['NCET (National Common Entrance Test for 4-Year ITEP B.Ed)', 'CUET-UG', 'CTET (Central Teacher Eligibility Test)'],
    workStyle: 'Structured school hours, engaging live classroom sessions, energetic student interactions, holidays matching academic calendar.',
    workEnvironment: 'Reputed international IB/Cambridge schools, prestigious CBSE/ICSE institutions, Kendriya Vidyalayas, Navodaya Vidyalayas.',
    dimensionProfile: {
      Analytical: 65,
      Scientific: 60,
      Business: 35,
      Social: 98,
      Creative: 75,
      Practical: 60
    },
    salaryOutlookIndia: 'TGT (Trained Graduate Teacher): ₹4.5–8.5 LPA | PGT (Senior Secondary): ₹7–14 LPA | Principal / Academic Director: ₹18–35+ LPA',
    futureScope: 'High demand for skilled educators proficient in NEP 2020 experiential learning, STEM inquiry, and international IB curricula.',
    relatedCareerIds: ['clinical-psychologist', 'research-scientist', 'civil-servant-ias'],
    icon: 'GraduationCap'
  },
  {
    id: 'hotel-hospitality-manager',
    title: 'Hospitality & Luxury Resort Manager',
    stream: 'Vocational',
    subStream: 'Hospitality, Culinary & Tourism',
    tagline: 'Delivering exceptional guest experiences, luxury dining, and worldwide resort operations.',
    overview: 'Hospitality Managers orchestrate the world of luxury hotels, heritage palaces, cruise liners, and Michelin-star dining. They manage guest relations, culinary divisions, revenue management, banquet events, and front-office protocols.',
    whatTheyDo: [
      'Oversee day-to-day operations across food & beverage, guest concierges, housekeeping, and front office.',
      'Optimize hotel room occupancy rates, revenue per available room (RevPAR), and corporate event pricing.',
      'Manage high-profile diplomatic banquets, destination weddings, and international conferences.',
      'Uphold impeccable service standards, train hospitality staff, and swiftly resolve guest escalations.'
    ],
    skills: {
      technical: ['Property Management Systems (Opera PMS)', 'Revenue Management & Dynamic Room Pricing', 'Food & Beverage Service Standards', 'Event Operations & Banqueting', 'Hygiene & HACCP Standards'],
      soft: ['Warm Emotional Intelligence', 'Gracious Composure under Pressure', 'Multicultural Sensitivity', 'Leadership & Team Motivation']
    },
    schoolSubjects: {
      essential: ['Any Stream (Commerce, Humanities, or Science)'],
      recommended: ['English Core (Fluency is key)', 'Business Studies', 'Tourism']
    },
    courses: ['3-Year B.Sc in Hospitality & Hotel Administration (NCHMCT)', 'BHM (Bachelor of Hotel Management)', 'Oberoi STEP / Taj TMTC Management Programs'],
    possiblePathways: {
      direct: 'Class 12 (Any stream with English) -> Crack NCHMCT JEE -> 3-Year B.Sc at IHM Pusa / Mumbai -> Campus placement as Management Trainee in Taj, Oberoi, Marriott.',
      alternative: 'Class 12 -> Clear Oberoi Systematic Training and Education Programme (STEP) -> Learn on-job with full scholarship -> Fast-track Hotelier.'
    },
    entranceExams: ['NCHMCT JEE (National Council for Hotel Management Joint Entrance Exam)', 'Oberoi STEP Selection', 'CUET-UG'],
    workStyle: 'Vibrant, people-facing, rotational shifts, dynamic event coordination, luxury ambiance.',
    workEnvironment: '5-star luxury hotels (Taj, Oberoi, ITC, Marriott), luxury cruise liners, destination resorts, international airlines.',
    dimensionProfile: {
      Analytical: 55,
      Scientific: 30,
      Business: 90,
      Social: 92,
      Creative: 70,
      Practical: 80
    },
    salaryOutlookIndia: 'Management Trainee: ₹4–7 LPA | Department Head (F&B / Front Office): ₹10–18 LPA | General Manager (5-Star): ₹30–70+ LPA',
    futureScope: 'Rapid resurgence in Indian luxury tourism, international hotel expansions, destination weddings, and gourmet F&B ventures.',
    relatedCareerIds: ['digital-marketer', 'sports-physiotherapist', 'tech-entrepreneur'],
    icon: 'Utensils'
  },
  {
    id: 'biostatistician',
    title: 'Biostatistician & Health Data Epidemiologist',
    stream: 'Science',
    subStream: 'Statistics, Health Data & Biology',
    tagline: 'Analyzing clinical trials, disease epidemiology, and pharmaceutical drug safety data.',
    overview: 'Biostatisticians apply mathematical statistics to biological, health, and clinical questions. They design double-blind pharmaceutical drug trials, analyze global epidemic trends, model patient survival curves, and help bring lifesaving vaccines to market safely.',
    whatTheyDo: [
      'Design randomized clinical trial protocols and determine statistically valid patient sample sizes.',
      'Analyze clinical trial data using R, SAS, and Python to prove medical efficacy and safety to the FDA / CDSCO.',
      'Model epidemiological transmission patterns for infectious diseases and public health outbreaks.',
      'Publish statistical safety findings that guide national health policy and vaccine approvals.'
    ],
    skills: {
      technical: ['Statistical Programming (R, SAS, Python)', 'Survival Analysis & Hypothesis Testing', 'Clinical Trial Protocols (ICH-GCP)', 'Epidemiological Modeling', 'Bayesian Inference'],
      soft: ['High Methodological Ethics', 'Critical Analytical Precision', 'Interdisciplinary Translation', 'Patience with Complex Data']
    },
    schoolSubjects: {
      essential: ['Mathematics / Applied Mathematics', 'Biology / Chemistry'],
      recommended: ['Physics', 'Computer Science / IP']
    },
    courses: ['B.Sc in Statistics / Mathematics / Data Science', 'M.Sc in Biostatistics / Medical Statistics', 'Ph.D at premier research institutes'],
    possiblePathways: {
      direct: 'Class 12 (PCMB or Science with Math) -> B.Sc in Statistics / B.Stat at ISI -> M.Sc in Biostatistics (AIIMS / CMC Vellore / Manipal) -> Biostatistician at global CRO or pharma giant.',
      alternative: 'MBBS / B.Pharm -> Master of Public Health (MPH) with Epidemiology focus -> Public Health Epidemiologist.'
    },
    entranceExams: ['ISI Admission Test', 'CUET-UG', 'CUET-PG', 'AIIMS M.Sc Entrance'],
    workStyle: 'Quiet analytical research, code development, clinical trial data rooms, collaborative discussions with doctors.',
    workEnvironment: 'Global pharmaceutical companies (Pfizer, Novartis, Dr. Reddy’s), Contract Research Organizations (CROs), World Health Organization (WHO), ICMR.',
    dimensionProfile: {
      Analytical: 98,
      Scientific: 92,
      Business: 45,
      Social: 60,
      Creative: 35,
      Practical: 60
    },
    salaryOutlookIndia: 'Junior Biostatistician: ₹6–12 LPA | Senior Clinical Statistician: ₹16–32 LPA | Principal Director of Biostatistics: ₹45–80+ LPA',
    futureScope: 'High global demand driven by precision oncology, genomic therapies, digital health sensors, and clinical trial globalization.',
    relatedCareerIds: ['data-scientist', 'doctor-surgeon', 'research-scientist'],
    icon: 'HeartPulse'
  },
  {
    id: 'hr-business-partner',
    title: 'Human Resources (HR) Business Partner & Talent Strategist',
    stream: 'Commerce',
    subStream: 'Organizational Behavior & Human Capital',
    tagline: 'Shaping organizational culture, recruiting top talent, and unlocking human potential in workplaces.',
    overview: 'HR Business Partners align people strategy with commercial business goals. They direct executive talent acquisition, structure compensation & benefits, build leadership development pipelines, and mediate workplace employee relations.',
    whatTheyDo: [
      'Design competitive compensation structures, employee equity plans, and performance appraisal systems.',
      'Headhunt specialized executive and technical talent for high-priority organizational roles.',
      'Conduct employee engagement surveys, diagnose cultural friction points, and run wellness programs.',
      'Ensure fair labor law compliance, ethical workplace dispute mediation, and POSH guidelines enforcement.'
    ],
    skills: {
      technical: ['People Analytics & HR Metrics', 'Labor Law & Industrial Relations', 'Compensation & Benefits Structuring (Comp & Ben)', 'Talent Acquisition Frameworks', 'Organizational Development (OD)'],
      soft: ['High Emotional Intelligence', 'Empathetic Mediation', 'Discretion & Trustworthiness', 'Strategic Influence']
    },
    schoolSubjects: {
      essential: ['Any Stream (Commerce or Humanities preferred)'],
      recommended: ['Business Studies', 'Psychology', 'Economics', 'Sociology']
    },
    courses: ['BBA / B.Com / B.A. in Psychology or Sociology', 'MBA in Human Resource Management (XLRI Jamshedpur / TISS Mumbai)'],
    possiblePathways: {
      direct: 'Class 12 (Any stream) -> Graduation in BBA / B.Com / BA -> Clear XAT or CAT -> MBA in HRM at XLRI Jamshedpur or TISS Mumbai -> HR Management Trainee in Fortune 500.',
      alternative: 'Graduate in Psychology / Social Work (BSW/MSW) -> Join corporate HR recruitment -> Climb to HRBP.'
    },
    entranceExams: ['XAT (for XLRI)', 'CAT (for IIMs)', 'TISSNET / CUET-PG', 'IPMAT'],
    workStyle: 'People-facing, confidential counseling, boardroom strategic presentations, employee town halls.',
    workEnvironment: 'Global multinational corporate towers, tech unicorn headquarters, manufacturing conglomerate plants.',
    dimensionProfile: {
      Analytical: 65,
      Scientific: 35,
      Business: 88,
      Social: 95,
      Creative: 60,
      Practical: 50
    },
    salaryOutlookIndia: 'Management Trainee (XLRI/TISS): ₹14–24 LPA | Senior HRBP: ₹22–40 LPA | Chief Human Resources Officer (CHRO): ₹60L–2 Cr+',
    futureScope: 'Crucial strategic function managing hybrid workforces, employee mental well-being, automation transitions, and global culture.',
    relatedCareerIds: ['clinical-psychologist', 'tech-entrepreneur', 'digital-marketer'],
    icon: 'Users'
  }
];
