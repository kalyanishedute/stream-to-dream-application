import { StreamDetail } from '../types';

export const STREAMS_DATA: Record<string, StreamDetail> = {
  science: {
    id: 'Science',
    title: 'Science (STEM)',
    badge: 'Inquiry, Innovation & Technology',
    tagline: 'Empowering minds that seek to understand the physical universe, build technologies, and cure illnesses.',
    overview: 'The Science stream emphasizes empirical inquiry, mathematical rigor, systematic experimentation, and technological design. In India, it is traditionally divided into PCM (Physics, Chemistry, Mathematics), PCB (Physics, Chemistry, Biology), and PCMB. Modern pedagogy embraces interdisciplinary STEM fields combining computation, genomics, and artificial intelligence.',
    subTracks: [
      {
        name: 'PCM (Physics, Chemistry, Mathematics)',
        description: 'The foundation for engineering, physical sciences, computer science, architecture, aviation, and data analytics.',
        popularSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science / IP', 'English Core']
      },
      {
        name: 'PCB (Physics, Chemistry, Biology)',
        description: 'The pathway for medicine, dentistry, biotechnology, pharmacology, nursing, veterinary sciences, and neuroscience.',
        popularSubjects: ['Physics', 'Chemistry', 'Biology', 'Psychology / Physical Education', 'English Core']
      },
      {
        name: 'PCMB (Physics, Chemistry, Mathematics, Biology)',
        description: 'The dual-pathway offering total flexibility between engineering and biological sciences, bio-informatics, biomedical engineering, and pure sciences.',
        popularSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English Core']
      }
    ],
    keySkills: [
      'Empirical hypothesis formulation & testing',
      'Mathematical logic and quantitative problem solving',
      'Algorithmic computation and spatial abstraction',
      'Laboratory precision and systematic protocol execution'
    ],
    undergraduateCourses: [
      'B.Tech / B.E. (Computer Science, Mechanical, Aerospace, Electrical, AI)',
      'MBBS (Medicine & Surgery - 5.5 Years)',
      'B.Arch (Architecture - 5 Years)',
      'B.Sc / BS (Physics, Mathematics, Chemistry, Biotechnology at IISc / IISER)',
      'BDS (Dental Surgery), BAMS (Ayurveda), BHMS (Homeopathy)',
      'B.Pharm (Pharmacy)',
      'Commercial Pilot License (CPL Flight Training)'
    ],
    prominentCareers: [
      'Software Developer / AI Engineer',
      'Physician & Specialist Surgeon',
      'Aerospace & Robotics Engineer',
      'Data Scientist & Machine Learning Specialist',
      'Research Scientist at ISRO / CSIR / IISc',
      'Commercial Airline Pilot',
      'Cyber Security Architect'
    ],
    topEntranceExams: [
      'JEE Main & JEE Advanced (for IITs/NITs/IIITs)',
      'NEET-UG (for MBBS/BDS/BAMS nationwide)',
      'BITSAT (for BITS Pilani campuses)',
      'IAT (IISER Aptitude Test for Pure Sciences)',
      'NATA & JEE Main Paper 2 (for Architecture)',
      'VITEEE, MET, MHT-CET, KCET'
    ],
    whoMayEnjoy: [
      'Students who constantly ask "Why?" and "How does this machine/organism work?"',
      'Those who enjoy solving math puzzles, writing code, or doing experiments in the laboratory.',
      'Students energized by technology, astronomy, living systems, or physical tinkering.',
      'Those comfortable with continuous structured practice and analytical problem deconstruction.'
    ],
    mythsAndFacts: [
      {
        myth: 'Science is the only "respectable" or lucrative stream for bright Indian students.',
        fact: 'All streams in 21st-century India offer world-class careers. Success depends on individual mastery, curiosity, and adaptability—not just stream prestige.'
      },
      {
        myth: 'Taking PCB closes all technical doors if you don\'t become a doctor.',
        fact: 'PCB students have flourishing careers in Biotechnology, Bioinformatics, Clinical Research, Neuropsychology, Forensic Science, and Health Data Science.'
      }
    ],
    color: '#06B6D4'
  },
  commerce: {
    id: 'Commerce',
    title: 'Commerce & Business Management',
    badge: 'Enterprise, Markets & Capital',
    tagline: 'Driving global economies, corporate leadership, entrepreneurial ventures, and wealth creation.',
    overview: 'The Commerce stream investigates the flow of capital, organizational leadership, market dynamics, trade policies, and corporate governance. Far from just bookkeeping, modern Commerce encompasses investment banking, algorithmic trading, startup entrepreneurship, international trade law, and corporate sustainability.',
    subTracks: [
      {
        name: 'Commerce with Mathematics',
        description: 'Combines commercial acumen with quantitative modeling. Opens doors to Investment Banking, Actuarial Science, Quantitative Economics, and top business schools.',
        popularSubjects: ['Accountancy', 'Economics', 'Business Studies', 'Mathematics / Applied Mathematics', 'English Core']
      },
      {
        name: 'Commerce with Informatics Practices / Entrepreneurship',
        description: 'Focuses on digital enterprise, e-commerce technologies, practical venture creation, business law, and commercial operations.',
        popularSubjects: ['Accountancy', 'Economics', 'Business Studies', 'Informatics Practices / Entrepreneurship', 'English Core']
      },
      {
        name: 'Professional Accounting Track (CA / CS / CMA)',
        description: 'Focused on statutory auditing, corporate secretarial law, taxation regulations, and cost accounting frameworks.',
        popularSubjects: ['Accountancy', 'Business Studies', 'Economics', 'Commercial Art / Physical Education', 'English Core']
      }
    ],
    keySkills: [
      'Financial statement deconstruction and balance sheet analysis',
      'Economic trend forecasting and cost-benefit trade-offs',
      'Strategic negotiation and organizational leadership',
      'Commercial acumen and risk-return management'
    ],
    undergraduateCourses: [
      'B.Com (Honours) at premier colleges (SRCC, LSR, Loyola)',
      'BBA / BMS (Bachelor of Business Administration / Management Studies)',
      'Chartered Accountancy (ICAI CA Foundation -> Inter -> Final)',
      '5-Year Integrated Program in Management (IPM at IIM Indore/Rohtak)',
      'Company Secretary (ICSI CS)',
      'B.A. (Honours) in Economics',
      'Actuarial Science (IAI examinations)'
    ],
    prominentCareers: [
      'Chartered Accountant (CA) & Statutory Auditor',
      'Investment Banker & Equity Research Analyst',
      'Corporate Startup Founder & Venture Builder',
      'Management Consultant (McKinsey, BCG, Bain)',
      'Chief Financial Officer (CFO)',
      'Actuary & Risk Underwriter',
      'Digital Marketing & Growth Strategist'
    ],
    topEntranceExams: [
      'CUET-UG (for top Commerce colleges in DU, BHU, etc.)',
      'IPMAT (IIM Indore, Rohtak, Ranchi, Bodh Gaya, Jammu)',
      'ICAI CA Foundation Exam',
      'NPAT (NMIMS Mumbai)',
      'SET (Symbiosis International)',
      'ACET (Actuarial Common Entrance Test)'
    ],
    whoMayEnjoy: [
      'Students interested in how companies make money, launch products, and grow valuations.',
      'Those who enjoy budgeting, following stock market trends, or negotiating deals.',
      'Students with strong commercial instincts and interest in socio-economic policies.',
      'Those who enjoy leadership roles, public speaking, organizing fests, and team collaboration.'
    ],
    mythsAndFacts: [
      {
        myth: 'Commerce is only for students who couldn\'t get into Science.',
        fact: 'Top Commerce programs like SRCC or IIM IPMAT have entrance cutoffs as competitive as IITs, and lead to elite global careers in finance, venture capital, and leadership.'
      },
      {
        myth: 'Without Mathematics, Commerce offers no good careers.',
        fact: 'Commerce without Math is great for CA, CS, Company Law, Marketing, Human Resources, and Event Management. However, Applied Math is recommended for Finance and Economics.'
      }
    ],
    color: '#F59E0B'
  },
  humanities: {
    id: 'Humanities',
    title: 'Humanities & Social Sciences',
    badge: 'Society, Culture, Law & Human Mind',
    tagline: 'Examining the human experience, upholding justice, shaping public policy, and inspiring societal transformation.',
    overview: 'Humanities and Social Sciences explore the deepest aspects of the human condition: behavioral psychology, constitutional law, societal structures, historical civilizations, international geopolitics, literature, and philosophical ethics. Humanities graduates in India dominate civil administration, premier law firms, policy think-tanks, behavioral research, and investigative journalism.',
    subTracks: [
      {
        name: 'Legal & Policy Track',
        description: 'Prepares students for constitutional law, corporate jurisprudence, civil services (UPSC), and international diplomacy.',
        popularSubjects: ['Legal Studies', 'Political Science', 'History', 'Economics', 'English Core']
      },
      {
        name: 'Psychology & Behavioral Track',
        description: 'Focuses on cognitive psychology, child development, mental health counseling, neurodiversity, and behavioral economics.',
        popularSubjects: ['Psychology', 'Sociology', 'English Literature', 'Biology / Applied Math', 'Political Science']
      },
      {
        name: 'Media, Literature & Culture Track',
        description: 'Oriented towards creative writing, journalism, filmmaking, cultural heritage preservation, and public relations.',
        popularSubjects: ['English Literature', 'Mass Media Studies', 'History', 'Fine Arts', 'Sociology']
      }
    ],
    keySkills: [
      'Critical thinking, bias detection, and logical argumentation',
      'Qualitative research, behavioral empathy, and deep interviewing',
      'Articulate verbal oratory and persuasive written communication',
      'Socio-historical contextualization of contemporary problems'
    ],
    undergraduateCourses: [
      '5-Year Integrated B.A. LL.B (Hons) at National Law Universities (NLUs)',
      'B.A. (Honours) in Psychology, Political Science, History, Sociology, English',
      'B.A. in Journalism & Mass Communication (BJMC)',
      'B.Des (Design / Visual Communication)',
      'B.El.Ed / Integrated 4-Year B.Ed (Teacher Education)',
      'B.S.W. (Bachelor of Social Work)'
    ],
    prominentCareers: [
      'Civil Servant (IAS, IPS, IFS through UPSC)',
      'Supreme Court & Corporate Advocate',
      'Clinical & Neuro-Psychologist',
      'Investigative Journalist & Media Editor',
      'Public Policy Think-Tank Fellow',
      'University Professor & Academician',
      'Diplomat & Foreign Service Officer'
    ],
    topEntranceExams: [
      'CLAT (Common Law Admission Test for NLUs)',
      'AILET (National Law University, Delhi)',
      'CUET-UG (for St. Stephen’s, Hindu, LSR, Ashoka, TISS)',
      'UPSC Civil Services Examination (Post-Graduation)',
      'IIMC & ACJ Entrance (for Journalism)'
    ],
    whoMayEnjoy: [
      'Students who love reading, debating, writing, and understanding why societies behave the way they do.',
      'Those with a strong moral compass passionate about social justice, human rights, and constitutional law.',
      'Students curious about emotional psychology, adolescent mental health, and counseling.',
      'Those who enjoy creative writing, theater, historical documentaries, and public advocacy.'
    ],
    mythsAndFacts: [
      {
        myth: 'Humanities has very low career scope or salary potential.',
        fact: 'Top NLU corporate lawyers, clinical psychologists, UN diplomats, and civil servants command immense societal impact and top-tier financial rewards.'
      },
      {
        myth: 'Humanities requires only rote learning and memorizing dates.',
        fact: 'Modern Humanities requires high-level analytical reasoning, source critique, ethical evaluation, and complex behavioral modeling.'
      }
    ],
    color: '#10B981'
  },
  vocational: {
    id: 'Vocational',
    title: 'Vocational & Creative Arts',
    badge: 'Craft, Design, Media & Applied Practice',
    tagline: 'Translating imagination and practical craft into real-world products, experiences, and digital arts.',
    overview: 'Vocational & Creative streams champion practical mastery, design thinking, aesthetic expression, athletic performance, and experiential industries. In sync with India\'s National Education Policy (NEP 2020), vocational education removes the false barrier between academic theory and practical craft, preparing students for dynamic creative economies.',
    subTracks: [
      {
        name: 'Design & Visual Arts Track',
        description: 'Focuses on UI/UX product design, graphic design, industrial ergonomics, animation, and fashion textiles.',
        popularSubjects: ['Applied Arts / Painting', 'Design', 'Computer Applications', 'Typography / Media', 'English Core']
      },
      {
        name: 'Media, Animation & Interactive Gaming',
        description: 'Centers on 3D game asset creation, video production, sound engineering, and augmented/virtual reality.',
        popularSubjects: ['Mass Media Studies', 'Animation & VFX', 'Information Technology', 'Music / Arts', 'English Core']
      },
      {
        name: 'Hospitality, Sports & Applied Services',
        description: 'Covers luxury hotel operations, culinary arts, sports coaching, fitness kinesiology, and event production.',
        popularSubjects: ['Hospitality & Tourism', 'Physical Education', 'Food Nutrition & Dietetics', 'Marketing', 'English Core']
      }
    ],
    keySkills: [
      'User-centered design thinking and rapid prototyping',
      'Aesthetic composition, color theory, and spatial form',
      'Technical dexterity with industry tools (Figma, Blender, Maya, Premiere)',
      'Experiential customer hospitality and athletic kinesiology'
    ],
    undergraduateCourses: [
      '4-Year B.Des (Bachelor of Design at NID, IITs, NIFT)',
      'B.Sc in Animation, VFX & Interactive Game Art',
      '3-Year B.Sc in Hospitality & Hotel Administration (IHM Pusa/Mumbai)',
      'B.P.Ed (Bachelor of Physical Education) / Sports Science',
      'B.Voc (Bachelor of Vocational Studies in Digital Media/IT)',
      'B.A. in Film Production & Cinematography (FTII / SRFTI)'
    ],
    prominentCareers: [
      'UI/UX Product Designer for tech platforms',
      '3D Game Artist & Unreal Engine Specialist',
      'Fashion Couturier & Textile Brand Director',
      'Luxury Resort & 5-Star General Manager',
      'Sports Physiotherapist & Performance Coach',
      'Commercial Cinematographer & Film Director',
      'Event Producer & Experiential Marketer'
    ],
    topEntranceExams: [
      'UCEED (IIT Bombay, Delhi, Guwahati, Hyderabad)',
      'NID-DAT (National Institute of Design Prelims & Mains)',
      'NIFT Entrance Exam (Bachelor of Design)',
      'NCHMCT JEE (National Council for Hotel Management)',
      'FTII JET (Film & Television Institute of India)'
    ],
    whoMayEnjoy: [
      'Students who learn best by doing, sketching, sculpting, filming, or physically building things.',
      'Those drawn to visual storytelling, gaming worlds, fashion styling, or musical composition.',
      'Athletes and sports enthusiasts passionate about biomechanics, training, and team dynamics.',
      'Students with an eye for hospitality, luxury service, culinary arts, and event management.'
    ],
    mythsAndFacts: [
      {
        myth: 'Vocational and Creative fields are for students with weak academic scores.',
        fact: 'Design institutes like NID and IIT IDC accept less than 1% of applicants—far more selective than most engineering colleges—and product designers frequently earn higher starting salaries than core engineers.'
      },
      {
        myth: 'Design and artistic careers are not stable long-term jobs.',
        fact: 'Every technology company, consumer brand, game studio, and hospital relies on design, media, and hospitality professionals to create compelling human experiences.'
      }
    ],
    color: '#EC4899'
  }
};
