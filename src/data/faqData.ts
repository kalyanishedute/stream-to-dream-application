export interface FAQItem {
  id: string;
  category: 'Streams' | 'Exams' | 'Class 10 to 11' | 'Parent Doubts' | 'NEP 2020';
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'stream-hierarchy',
    category: 'Streams',
    question: 'Is one stream (like Science) objectively better or more prestigious than Commerce or Humanities?',
    answer: 'Absolutely not. This is a legacy cultural stereotype from the 1980s and 1990s. In modern India, high-performing professionals in Corporate Law (Humanities), Investment Banking & CA (Commerce), Product Design (Vocational), and Tech Engineering (Science) command equal societal prestige, intellectual challenge, and financial reward. What matters is the alignment between your intrinsic cognitive strengths and the demands of that domain.'
  },
  {
    id: 'pcb-without-neet',
    category: 'Streams',
    question: 'What if I take PCB (Physics, Chemistry, Biology) but later decide I don\'t want to appear for NEET or become a doctor?',
    answer: 'You have dozens of high-growth career avenues outside of clinical MBBS! PCB graduates excel in Biotechnology, Bioinformatics, Clinical Research, Neuropsychology, Forensic Science (NFSU), Genetics, Pharmacology (B.Pharm), Sports Physiotherapy (BPT), Environmental Science, and Food Technology. Furthermore, PCB students are fully eligible for Law (CLAT), Design (UCEED/NID), Management (IPMAT), and Civil Services (UPSC).'
  },
  {
    id: 'commerce-without-math',
    category: 'Streams',
    question: 'Can I take Commerce without Mathematics in Class 11? Does it restrict my future careers?',
    answer: 'Yes, you can take Commerce without Math (often paired with Informatics Practices, Entrepreneurship, or Physical Education). This combination is completely fine for Chartered Accountancy (CA), Company Secretary (CS), Cost Management (CMA), Corporate Law (5-Year LLB), Human Resources, Marketing, and Hotel Management. However, taking Mathematics or Applied Mathematics is strongly recommended if you want to pursue B.Com (Hons) at Delhi University (SRCC), Economics (Hons), Actuarial Science, or quantitative Finance.'
  },
  {
    id: 'switch-stream-later',
    category: 'Class 10 to 11',
    question: 'Can I switch from Science to Commerce or Humanities after Class 12?',
    answer: 'Yes. In the Indian higher education system, students who complete Class 12 in Science are traditionally eligible to apply for almost any undergraduate course in Commerce or Humanities (including B.Com, BBA, BA Economics, BA Psychology, Journalism, Law, and Design). However, the reverse is generally not possible (Humanities or Commerce students cannot pursue B.Tech or MBBS because of mandatory Physics, Chemistry, and Math/Bio prerequisites).'
  },
  {
    id: 'blended-profile-meaning',
    category: 'Streams',
    question: 'What does "You have a blended profile" mean on my quiz results?',
    answer: 'A blended profile occurs when two or more of your stream affinity scores are within 5 points of each other. This indicates that your cognitive strengths and interests do not fit neatly into a single box! For instance, a student with high Science and high Creative scores often excels in Architecture, UI/UX Design, or Game Development. A student with high Commerce and high Humanities scores is ideally primed for Corporate Law, Public Policy, or Economic Journalism. You should look for interdisciplinary subjects and careers.'
  },
  {
    id: 'maths-standard-vs-basic',
    category: 'Class 10 to 11',
    question: 'I took Basic Mathematics in Class 10 CBSE. Can I take Mathematics or Applied Mathematics in Class 11?',
    answer: 'Under CBSE guidelines, students who opt for Basic Mathematics in Class 10 can take Applied Mathematics (Subject Code 241) in Class 11. Applied Mathematics focuses on commercial applications, financial mathematics, statistics, and business modeling. If a student wants to take Standard Mathematics (Subject Code 041, required for engineering/JEE), schools may permit it after evaluating aptitude or conducting an internal diagnostic.'
  },
  {
    id: 'parent-disagreement',
    category: 'Parent Doubts',
    question: 'My parents want me to take Science for engineering or medicine, but my quiz results show strong Humanities/Design. How do I convince them?',
    answer: 'Start by acknowledging their concern: parents usually push for Science out of deep love and a desire for your financial stability. Download your Stream to Dream Results Summary and the Parent Conversation Guide. Show them the specific careers matched to your profile, the verified starting salaries, and premier government institutions like NID, IIT IDC, and NLSIU Bengaluru. Invite a trusted school teacher or certified career counselor to join the conversation.'
  },
  {
    id: 'nep-stream-flexibility',
    category: 'NEP 2020',
    question: 'Can I really take Physics and History together under NEP 2020 in my school?',
    answer: 'While NEP 2020 officially allows multidisciplinary subject pools, practical availability depends entirely on your specific school’s timetable and teacher staffing. Many forward-thinking schools now permit students to take Physics, Mathematics, Economics, and Psychology together. Check your school’s Class 11 prospectus to see their available subject clusters.'
  }
];
