import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: "What would you rather spend a free weekend learning or tinkering with?",
    subtitle: "Choose the activity that naturally sparks your curiosity most.",
    categoryHint: "Curiosity & Weekend Projects",
    options: [
      {
        id: "1a",
        text: "Building a working robot or coding an interactive mobile mini-game",
        dimensionPoints: { Analytical: 4, Practical: 4, Scientific: 2 }
      },
      {
        id: "1b",
        text: "Understanding human behavior, body language, and why people make certain choices",
        dimensionPoints: { Social: 5, Scientific: 2, Analytical: 2 }
      },
      {
        id: "1c",
        text: "Starting a student pop-up stall or planning how to pitch a new business idea",
        dimensionPoints: { Business: 5, Analytical: 2, Social: 2 }
      },
      {
        id: "1d",
        text: "Designing visual graphics, editing a short cinematic video, or writing a creative fiction story",
        dimensionPoints: { Creative: 5, Social: 1, Practical: 2 }
      }
    ]
  },
  {
    id: 2,
    scenario: "Your school is organizing an Annual Exhibition. Which project team do you naturally volunteer to lead?",
    subtitle: "Think about which contribution brings out your best energy.",
    categoryHint: "School Exhibition",
    options: [
      {
        id: "2a",
        text: "The Working Model team: constructing physical working circuits or hydraulic crane models",
        dimensionPoints: { Practical: 5, Scientific: 3, Analytical: 2 }
      },
      {
        id: "2b",
        text: "The Research & Science team: demonstrating laboratory chemical reactions or astronomy simulations",
        dimensionPoints: { Scientific: 5, Analytical: 3, Practical: 2 }
      },
      {
        id: "2c",
        text: "The Budget & Sponsorship team: managing ticketing, securing local sponsors, and tracking expenses",
        dimensionPoints: { Business: 5, Analytical: 3, Social: 2 }
      },
      {
        id: "2d",
        text: "The Stage & Visual Design team: painting murals, directing the stage lighting, and creating the brochures",
        dimensionPoints: { Creative: 5, Practical: 2, Social: 2 }
      }
    ]
  },
  {
    id: 3,
    scenario: "When you read news about a new smartphone or electric car launch, what catches your attention first?",
    subtitle: "Notice what your mind gravitates toward automatically.",
    categoryHint: "Product Curiosity",
    options: [
      {
        id: "3a",
        text: "The battery chemistry, motor physics, and environmental impact data",
        dimensionPoints: { Scientific: 5, Analytical: 3, Practical: 2 }
      },
      {
        id: "3b",
        text: "The processor architecture, algorithm efficiency, and benchmark performance numbers",
        dimensionPoints: { Analytical: 5, Practical: 3, Scientific: 2 }
      },
      {
        id: "3c",
        text: "The pricing strategy, manufacturing cost margins, and competition with global rivals",
        dimensionPoints: { Business: 5, Analytical: 3, Social: 1 }
      },
      {
        id: "3d",
        text: "The aesthetic body design, user interface minimalism, and camera color grading",
        dimensionPoints: { Creative: 5, Practical: 2, Social: 2 }
      }
    ]
  },
  {
    id: 4,
    scenario: "If you were given a budget to resolve an issue in your local neighborhood, which initiative would you champion?",
    subtitle: "Which problem excites your inner problem-solver?",
    categoryHint: "Community Impact",
    options: [
      {
        id: "4a",
        text: "Setting up a free peer tutoring network and mental wellness peer-support center for students",
        dimensionPoints: { Social: 5, Creative: 2, Business: 1 }
      },
      {
        id: "4b",
        text: "Installing an automated rainwater harvesting and solar-powered filtration sensor grid",
        dimensionPoints: { Practical: 4, Scientific: 4, Analytical: 3 }
      },
      {
        id: "4c",
        text: "Creating a local artisan marketplace app that enables street vendors to sell online profitably",
        dimensionPoints: { Business: 4, Analytical: 3, Social: 3 }
      },
      {
        id: "4d",
        text: "Organizing an interactive public art street festival with murals and spoken word performances",
        dimensionPoints: { Creative: 5, Social: 3, Practical: 2 }
      }
    ]
  },
  {
    id: 5,
    scenario: "How do you prefer to tackle a difficult math or puzzle problem?",
    subtitle: "Reflect on your problem-solving style.",
    categoryHint: "Problem Solving Style",
    options: [
      {
        id: "5a",
        text: "Breaking it systematically into algebraic equations, looking for underlying logic rules and patterns",
        dimensionPoints: { Analytical: 5, Scientific: 2, Practical: 1 }
      },
      {
        id: "5b",
        text: "Visualizing it geometrically, drawing sketches, diagrams, or spatial models to see it intuitively",
        dimensionPoints: { Creative: 4, Analytical: 3, Practical: 2 }
      },
      {
        id: "5c",
        text: "Testing it with hands-on trial-and-error, building physical tokens, or writing a quick script to test it",
        dimensionPoints: { Practical: 4, Analytical: 3, Scientific: 2 }
      },
      {
        id: "5d",
        text: "Discussing it aloud with friends, bouncing ideas, and teaching each other different viewpoints",
        dimensionPoints: { Social: 4, Analytical: 2, Creative: 2 }
      }
    ]
  },
  {
    id: 6,
    scenario: "Which YouTube channel, podcast, or documentary topic would keep you watching until midnight?",
    subtitle: "What topics do you consume without anyone telling you to?",
    categoryHint: "Media Consumption",
    options: [
      {
        id: "6a",
        text: "Deep space astrophysics, neuroscience breakthroughs, or quantum mysteries (e.g., Veritasium, Kurzgesagt)",
        dimensionPoints: { Scientific: 5, Analytical: 3 }
      },
      {
        id: "6b",
        text: "Startup case studies, stock market breakdowns, and how billionaire founders built empires",
        dimensionPoints: { Business: 5, Analytical: 3 }
      },
      {
        id: "6c",
        text: "True crime investigations, courtroom trials, human psychology experiments, and historical geopolitics",
        dimensionPoints: { Social: 4, Analytical: 3, Creative: 2 }
      },
      {
        id: "6d",
        text: "Film cinematography breakdowns, industrial design teardowns, UI animations, and concept art",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  },
  {
    id: 7,
    scenario: "In a group project, what is your most natural and preferred role?",
    subtitle: "Where do you deliver your highest personal value?",
    categoryHint: "Group Collaboration",
    options: [
      {
        id: "7a",
        text: "The Strategist & Presenter: Pitching the final findings, coordinating tasks, and ensuring deadlines are met",
        dimensionPoints: { Business: 5, Social: 3 }
      },
      {
        id: "7b",
        text: "The Data Cruncher: Checking facts, verifying formulas, debugging errors, and organizing the data tables",
        dimensionPoints: { Analytical: 5, Scientific: 2 }
      },
      {
        id: "7c",
        text: "The Fabricator: Putting together the slides, building the physical demo, or configuring the software",
        dimensionPoints: { Practical: 5, Creative: 3 }
      },
      {
        id: "7d",
        text: "The Mediator: Resolving disagreements between team members and making sure everyone's voice is heard",
        dimensionPoints: { Social: 5, Creative: 2 }
      }
    ]
  },
  {
    id: 8,
    scenario: "When something in your house breaks down (like a mixer, bicycle, or Wi-Fi router), what is your first impulse?",
    subtitle: "What is your instinctive reaction to everyday breakdowns?",
    categoryHint: "Everyday Troubleshooting",
    options: [
      {
        id: "8a",
        text: "Grab a screwdriver, open it up, examine the internal gears or circuit board, and try to fix it",
        dimensionPoints: { Practical: 5, Scientific: 2, Analytical: 2 }
      },
      {
        id: "8b",
        text: "Google the exact error code, analyze the manual's logic tree, and configure network settings systematically",
        dimensionPoints: { Analytical: 4, Practical: 3 }
      },
      {
        id: "8c",
        text: "Evaluate warranty status, compare repair cost vs buying an upgraded replacement with better specs",
        dimensionPoints: { Business: 5, Analytical: 2 }
      },
      {
        id: "8d",
        text: "Look at how poorly the casing was designed and brainstorm a cleaner, more ergonomic product alternative",
        dimensionPoints: { Creative: 4, Practical: 3 }
      }
    ]
  },
  {
    id: 9,
    scenario: "Which kind of book or magazine article would you pick up at an airport or railway station bookstore?",
    subtitle: "Your unprompted reading choice reveals your deeper cognitive orientation.",
    categoryHint: "Reading Preferences",
    options: [
      {
        id: "9a",
        text: "A popular science book about CRISPR gene editing, viruses, or climate systems",
        dimensionPoints: { Scientific: 5, Analytical: 2 }
      },
      {
        id: "9b",
        text: "A compelling biography of an Indian social reformer, visionary educator, or supreme court justice",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "9c",
        text: "A bestseller on behavioural economics, marketing secrets, and investment philosophies",
        dimensionPoints: { Business: 5, Analytical: 3 }
      },
      {
        id: "9d",
        text: "A visual coffee-table book featuring modern architecture, typography, photography, or game concept art",
        dimensionPoints: { Creative: 5, Practical: 2 }
      }
    ]
  },
  {
    id: 10,
    scenario: "If you could shadow a professional at work for an entire day, who would you choose?",
    subtitle: "Imagine observing someone whose workday genuinely fascinates you.",
    categoryHint: "Career Day Shadowing",
    options: [
      {
        id: "10a",
        text: "A neurosurgeon or geneticist working in a state-of-the-art medical research facility",
        dimensionPoints: { Scientific: 5, Practical: 3, Analytical: 2 }
      },
      {
        id: "10b",
        text: "A venture capitalist listening to founders pitch revolutionary tech startups",
        dimensionPoints: { Business: 5, Analytical: 3, Social: 2 }
      },
      {
        id: "10c",
        text: "A Supreme Court advocate or investigative journalist exposing a major legal injustice",
        dimensionPoints: { Social: 4, Analytical: 3, Creative: 2 }
      },
      {
        id: "10d",
        text: "An art director designing animated worlds for an international film studio",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  },
  {
    id: 11,
    scenario: "What gives you the highest feeling of personal satisfaction after finishing a task?",
    subtitle: "What makes you feel proud and energized?",
    categoryHint: "Intrinsic Motivation",
    options: [
      {
        id: "11a",
        text: "Knowing I helped a classmate understand a difficult concept or cheered up a friend going through a tough time",
        dimensionPoints: { Social: 5, Creative: 1 }
      },
      {
        id: "11b",
        text: "Holding a physical or digital product I built with my own hands from scratch",
        dimensionPoints: { Practical: 5, Creative: 3 }
      },
      {
        id: "11c",
        text: "Finding an elegant, optimal mathematical solution or debugging a stubborn code error",
        dimensionPoints: { Analytical: 5, Scientific: 2 }
      },
      {
        id: "11d",
        text: "Organizing an event that ran smoothly, exceeded participation targets, and turned a neat surplus",
        dimensionPoints: { Business: 5, Social: 2 }
      }
    ]
  },
  {
    id: 12,
    scenario: "If you were invited to deliver a TEDx Youth talk, what would your theme most likely be?",
    subtitle: "What message would you feel passionate about sharing with the world?",
    categoryHint: "Public Advocacy",
    options: [
      {
        id: "12a",
        text: "“Why Every Student Should Learn to Question Evidence and Think Scientifically”",
        dimensionPoints: { Scientific: 4, Analytical: 4, Social: 2 }
      },
      {
        id: "12b",
        text: "“The Power of Youth Entrepreneurship in Solving India’s Tier-2 & Tier-3 Challenges”",
        dimensionPoints: { Business: 5, Social: 3 }
      },
      {
        id: "12c",
        text: "“Empathy Over Competition: Reimagining Mental Health and Inclusivity in Indian Schools”",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "12d",
        text: "“Storytelling in the Digital Age: How Design and Animation Shape Human Culture”",
        dimensionPoints: { Creative: 5, Social: 2, Practical: 2 }
      }
    ]
  },
  {
    id: 13,
    scenario: "Which school laboratory or activity room would you willingly stay back in after class bells ring?",
    subtitle: "Where does time seem to fly by without you noticing?",
    categoryHint: "School Environment",
    options: [
      {
        id: "13a",
        text: "The Computer Lab, experimenting with python loops, algorithm challenges, or game logic",
        dimensionPoints: { Analytical: 5, Practical: 3 }
      },
      {
        id: "13b",
        text: "The Chemistry / Biology Lab, viewing microscopic slide cultures or performing titration experiments",
        dimensionPoints: { Scientific: 5, Practical: 3 }
      },
      {
        id: "13c",
        text: "The Art & Craft Studio or Woodwork Workshop, sculpting, drafting posters, or building scale models",
        dimensionPoints: { Creative: 4, Practical: 4 }
      },
      {
        id: "13d",
        text: "The Debate Club room or Student Council office, framing resolutions and planning inter-school fests",
        dimensionPoints: { Social: 4, Business: 4 }
      }
    ]
  },
  {
    id: 14,
    scenario: "Imagine you are developing a new mobile application with three friends. Which part do you claim ownership of?",
    subtitle: "Which layer of the product feels like your natural strength?",
    categoryHint: "Tech Product Building",
    options: [
      {
        id: "14a",
        text: "The Backend & Algorithms: Writing efficient database queries and secure logic workflows",
        dimensionPoints: { Analytical: 5, Practical: 3 }
      },
      {
        id: "14b",
        text: "The User Experience (UI/UX): Crafting intuitive screens, typography, animations, and color palettes",
        dimensionPoints: { Creative: 5, Practical: 2 }
      },
      {
        id: "14c",
        text: "The Business Model: User acquisition, subscription pricing, marketing campaigns, and investor decks",
        dimensionPoints: { Business: 5, Social: 2 }
      },
      {
        id: "14d",
        text: "Community & User Research: Interviewing students to discover their real emotional pain points and needs",
        dimensionPoints: { Social: 5, Creative: 2 }
      }
    ]
  },
  {
    id: 15,
    scenario: "How do you feel when dealing with large sets of numbers and statistics?",
    subtitle: "Gauge your natural relationship with quantitative data.",
    categoryHint: "Quantitative Attitude",
    options: [
      {
        id: "15a",
        text: "I love spotting hidden correlations, building charts, and finding the story hidden inside the numbers",
        dimensionPoints: { Analytical: 5, Business: 3 }
      },
      {
        id: "15b",
        text: "I value numbers mainly when they test a scientific hypothesis or measure physical experimental constants",
        dimensionPoints: { Scientific: 5, Analytical: 3 }
      },
      {
        id: "15c",
        text: "I care about numbers when they represent financial profit, return on investment, or market share",
        dimensionPoints: { Business: 5, Analytical: 3 }
      },
      {
        id: "15d",
        text: "I prefer qualitative stories, emotional nuances, and visual meaning over raw numerical spreadsheets",
        dimensionPoints: { Creative: 4, Social: 4 }
      }
    ]
  },
  {
    id: 16,
    scenario: "During a nature camp or trek, what part of the experience engages you the most?",
    subtitle: "What is your relationship with the physical natural environment?",
    categoryHint: "Outdoor & Nature Engagement",
    options: [
      {
        id: "16a",
        text: "Identifying rare flora, insect species, rock strata, and studying the forest ecosystem",
        dimensionPoints: { Scientific: 5, Practical: 2 }
      },
      {
        id: "16b",
        text: "Navigating trails with compass and maps, setting up tents, and managing campsite survival gear",
        dimensionPoints: { Practical: 5, Analytical: 2 }
      },
      {
        id: "16c",
        text: "Sitting by the campfire listening to people's life stories, folklore, and fostering deep team bonds",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "16d",
        text: "Capturing stunning golden-hour photographs and sketching landscapes in my travel journal",
        dimensionPoints: { Creative: 5, Practical: 2 }
      }
    ]
  },
  {
    id: 17,
    scenario: "When studying Indian History or Civics, what aspect sparks your strongest intellectual engagement?",
    subtitle: "What questions do you ask when exploring society and history?",
    categoryHint: "Historical & Civic Thinking",
    options: [
      {
        id: "17a",
        text: "How the Indian Constitution balances fundamental rights, judicial precedents, and democratic governance",
        dimensionPoints: { Social: 5, Analytical: 3 }
      },
      {
        id: "17b",
        text: "How ancient trade routes (like the Silk Road and spice trades) shaped economies and empires",
        dimensionPoints: { Business: 4, Social: 3, Analytical: 2 }
      },
      {
        id: "17c",
        text: "The architectural genius, temple acoustics, metallurgy, and ancient engineering feats",
        dimensionPoints: { Practical: 4, Scientific: 3, Creative: 3 }
      },
      {
        id: "17d",
        text: "The literature, poetry, art movements, and philosophical shifts that reflected the cultural spirit",
        dimensionPoints: { Creative: 5, Social: 3 }
      }
    ]
  },
  {
    id: 18,
    scenario: "If you had to pick an elective subject in Class 11 just for pure fun, which would you pick?",
    subtitle: "Purely based on enjoyment, without worrying about marks.",
    categoryHint: "Elective Inclination",
    options: [
      {
        id: "18a",
        text: "Artificial Intelligence, Python Programming, or Applied Mathematics",
        dimensionPoints: { Analytical: 5, Practical: 3 }
      },
      {
        id: "18b",
        text: "Biotechnology, Microbiology, or Environmental Science",
        dimensionPoints: { Scientific: 5, Practical: 2 }
      },
      {
        id: "18c",
        text: "Psychology, Sociology, or Human Rights & Gender Studies",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "18d",
        text: "Entrepreneurship, Financial Markets Management, or Commercial Art",
        dimensionPoints: { Business: 4, Creative: 3 }
      }
    ]
  },
  {
    id: 19,
    scenario: "Suppose you are participating in a National Hackathon or Case Competition. What challenge excites you most?",
    subtitle: "Which problem type brings out your 'flow state'?",
    categoryHint: "Competition Challenge",
    options: [
      {
        id: "19a",
        text: "Developing an AI-driven predictive algorithm to detect crop disease from leaf photos",
        dimensionPoints: { Analytical: 4, Scientific: 4, Practical: 2 }
      },
      {
        id: "19b",
        text: "Designing an ultra-affordable mechanical prosthetic limb using 3D printing and recycled plastics",
        dimensionPoints: { Practical: 5, Scientific: 2, Creative: 3 }
      },
      {
        id: "19c",
        text: "Formulating a viable microfinance strategy to fund women-led self-help groups in rural districts",
        dimensionPoints: { Business: 5, Social: 4 }
      },
      {
        id: "19d",
        text: "Scripting and producing an interactive public health awareness campaign with viral motion graphics",
        dimensionPoints: { Creative: 5, Social: 3 }
      }
    ]
  },
  {
    id: 20,
    scenario: "When you receive your monthly pocket money or gift cash, what is your typical behavior?",
    subtitle: "How you perceive money often reflects business and analytical tendencies.",
    categoryHint: "Financial Attitude",
    options: [
      {
        id: "20a",
        text: "I track every rupee, research mutual funds or digital gold, and look for smart ways to invest and grow it",
        dimensionPoints: { Business: 5, Analytical: 4 }
      },
      {
        id: "20b",
        text: "I save it diligently for buying high-quality tools, hardware gadgets, books, or building kits",
        dimensionPoints: { Practical: 4, Scientific: 2 }
      },
      {
        id: "20c",
        text: "I spend it on experiences with close friends, celebrating birthdays, or contributing to a cause",
        dimensionPoints: { Social: 5, Creative: 1 }
      },
      {
        id: "20d",
        text: "I invest it in art supplies, music gear, fashion styling, camera accessories, or design software",
        dimensionPoints: { Creative: 5, Practical: 2 }
      }
    ]
  },
  {
    id: 21,
    scenario: "Which of the following activities feels most mentally exhausting or dull to you?",
    subtitle: "Knowing what drains you helps pinpoint your true strengths by contrast.",
    categoryHint: "Energy Drains",
    options: [
      {
        id: "21a",
        text: "Writing long emotional essays with no clear right or wrong factual answer (I prefer clear logical facts)",
        dimensionPoints: { Analytical: 4, Scientific: 3 } // Shows analytical/scientific preference
      },
      {
        id: "21b",
        text: "Memorizing formulas and calculating repetitive numerical steps with no human interaction",
        dimensionPoints: { Social: 4, Creative: 3 } // Shows human/creative preference
      },
      {
        id: "21c",
        text: "Sitting still listening to lectures for 6 hours without touching anything or doing physical tasks",
        dimensionPoints: { Practical: 5, Creative: 2 } // Shows hands-on preference
      },
      {
        id: "21d",
        text: "Working alone in isolation without presenting, leading, or strategizing with others",
        dimensionPoints: { Business: 4, Social: 4 } // Shows business/social preference
      }
    ]
  },
  {
    id: 22,
    scenario: "How would you prefer to spend a summer internship between school terms?",
    subtitle: "Where would you feel excited to wake up every morning?",
    categoryHint: "Internship Preference",
    options: [
      {
        id: "22a",
        text: "Assisting a scientist in an ICMR or IISc laboratory testing water quality or plant genetics",
        dimensionPoints: { Scientific: 5, Practical: 3, Analytical: 2 }
      },
      {
        id: "22b",
        text: "Volunteering with an NGO teaching underprivileged children and conducting community surveys",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "22c",
        text: "Working at an e-commerce startup analyzing customer sales funnels and running ad campaigns",
        dimensionPoints: { Business: 5, Analytical: 3 }
      },
      {
        id: "22d",
        text: "Interning at a creative branding agency or game studio drafting storyboards and character art",
        dimensionPoints: { Creative: 5, Practical: 2 }
      }
    ]
  },
  {
    id: 23,
    scenario: "When you play strategy games (like Chess, Catan, Age of Empires, or Monopoly), what is your winning style?",
    subtitle: "Your strategic mindset in gameplay reflects your cognitive inclination.",
    categoryHint: "Gaming & Strategy",
    options: [
      {
        id: "23a",
        text: "Calculating 4–5 moves in advance, anticipating opponent logic, and minimizing risk mathematically",
        dimensionPoints: { Analytical: 5, Scientific: 2 }
      },
      {
        id: "23b",
        text: "Trading aggressively, negotiating win-win alliances, and controlling the most valuable economic resources",
        dimensionPoints: { Business: 5, Social: 3 }
      },
      {
        id: "23c",
        text: "Reading the psychology of opponents, bluffing, and sensing their emotional pressure points",
        dimensionPoints: { Social: 4, Creative: 3 }
      },
      {
        id: "23d",
        text: "Inventing unconventional, unorthodox maneuvers and surprising everyone with aesthetic flair",
        dimensionPoints: { Creative: 5, Practical: 2 }
      }
    ]
  },
  {
    id: 24,
    scenario: "If you had to write a 1,500-word feature article for a national magazine, what would you investigate?",
    subtitle: "What story do you feel driven to research deeply?",
    categoryHint: "Deep Investigation",
    options: [
      {
        id: "24a",
        text: "“The Ethical Dilemmas of Brain-Computer Interfaces and Human Gene Editing in 2030”",
        dimensionPoints: { Scientific: 4, Social: 4, Analytical: 2 }
      },
      {
        id: "24b",
        text: "“Why 90% of D2C Startups in India Fail and What the Few Winners Do Differently”",
        dimensionPoints: { Business: 5, Analytical: 3 }
      },
      {
        id: "24c",
        text: "“Under the Radar: The Unheard Voices of Migrant Construction Laborers in Rapidly Expanding Metros”",
        dimensionPoints: { Social: 5, Creative: 3 }
      },
      {
        id: "24d",
        text: "“The Resurgence of Indian Traditional Crafts in Contemporary Global High Fashion & Architecture”",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  },
  {
    id: 25,
    scenario: "What kind of workplace environment would you feel happiest coming to every day?",
    subtitle: "Envision your ideal future professional setting.",
    categoryHint: "Workplace Preference",
    options: [
      {
        id: "25a",
        text: "A cutting-edge tech campus or advanced research laboratory filled with monitors, servers, or test equipment",
        dimensionPoints: { Analytical: 4, Scientific: 4, Practical: 2 }
      },
      {
        id: "25b",
        text: "A vibrant corporate office or bustling financial trading floor where rapid decisions and deals happen",
        dimensionPoints: { Business: 5, Analytical: 2, Social: 2 }
      },
      {
        id: "25c",
        text: "A university campus, hospital ward, courtroom, or community center where human connection is central",
        dimensionPoints: { Social: 5, Analytical: 2 }
      },
      {
        id: "25d",
        text: "A sunlit creative studio, fabrication makerspace, or outdoor shoot location with freedom to experiment",
        dimensionPoints: { Creative: 4, Practical: 4 }
      }
    ]
  },
  {
    id: 26,
    scenario: "When you encounter a complex debate (e.g. AI replacing creative jobs), what is your first thought?",
    subtitle: "How does your brain process nuance and future trends?",
    categoryHint: "Critical Thinking",
    options: [
      {
        id: "26a",
        text: "I want to understand the neural network mathematics and technical limits of large language models",
        dimensionPoints: { Analytical: 5, Scientific: 3 }
      },
      {
        id: "26b",
        text: "I wonder how it will affect the labor market, corporate profits, and new commercial SaaS ventures",
        dimensionPoints: { Business: 5, Analytical: 2 }
      },
      {
        id: "26c",
        text: "I worry about copyright theft, the loss of human soul in art, and emotional expression in storytelling",
        dimensionPoints: { Creative: 5, Social: 3 }
      },
      {
        id: "26d",
        text: "I focus on the human impact: worker retraining, social equity, mental stress, and government regulations",
        dimensionPoints: { Social: 5, Analytical: 2 }
      }
    ]
  },
  {
    id: 27,
    scenario: "Which school competition award would mean the absolute most to you?",
    subtitle: "What badge of accomplishment resonates with your core identity?",
    categoryHint: "Personal Achievement",
    options: [
      {
        id: "27a",
        text: "First Prize at the National Science Olympiad or Mathematics NTSE Talent Search",
        dimensionPoints: { Scientific: 4, Analytical: 5 }
      },
      {
        id: "27b",
        text: "Best Delegate at the Model United Nations (MUN) or Best Orator in the National Youth Parliament",
        dimensionPoints: { Social: 4, Business: 3, Creative: 2 }
      },
      {
        id: "27c",
        text: "Young Entrepreneur of the Year Award at an inter-school business plan challenge",
        dimensionPoints: { Business: 5, Analytical: 2 }
      },
      {
        id: "27d",
        text: "Gold Medal at the National Design & Fine Arts Exhibition or Robotics Makerspace Expo",
        dimensionPoints: { Creative: 4, Practical: 5 }
      }
    ]
  },
  {
    id: 28,
    scenario: "If you had 3 hours to teach someone a skill you already know well, what would you pick?",
    subtitle: "What do you enjoy transmitting to others?",
    categoryHint: "Teaching & Sharing",
    options: [
      {
        id: "28a",
        text: "How to solve a Rubik’s cube in under 60 seconds or write their first lines of code in Python",
        dimensionPoints: { Analytical: 4, Practical: 3 }
      },
      {
        id: "28b",
        text: "How to identify constellations in the night sky or understand how vaccinations protect the human body",
        dimensionPoints: { Scientific: 5, Social: 2 }
      },
      {
        id: "28c",
        text: "How to negotiate discounts, pitch an idea confidently, or budget personal finances",
        dimensionPoints: { Business: 5, Social: 3 }
      },
      {
        id: "28d",
        text: "How to sketch facial proportions, edit photos with lighting curves, or play guitar chords",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  },
  {
    id: 29,
    scenario: "When you think about the biggest challenge facing India in the coming decade, where do you feel drawn to contribute?",
    subtitle: "Where do you want your life's work to leave an enduring mark?",
    categoryHint: "Nation Building Vision",
    options: [
      {
        id: "29a",
        text: "Developing clean green tech, indigenous semiconductor manufacturing, or aerospace defense systems",
        dimensionPoints: { Scientific: 4, Analytical: 4, Practical: 3 }
      },
      {
        id: "29b",
        text: "Strengthening judicial access, mental health support, quality rural education, and civil governance",
        dimensionPoints: { Social: 5, Analytical: 2 }
      },
      {
        id: "29c",
        text: "Creating world-class global enterprises, job creation engines, and economic wealth for citizens",
        dimensionPoints: { Business: 5, Social: 2 }
      },
      {
        id: "29d",
        text: "Re-imagining sustainable urban architecture, public spaces, cultural storytelling, and Indian game IP",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  },
  {
    id: 30,
    scenario: "Finally, which quote resonates with how you want to live and build your future career?",
    subtitle: "Select the philosophy that feels most true to who you are becoming.",
    categoryHint: "Life Philosophy",
    options: [
      {
        id: "30a",
        text: "“Somewhere, something incredible is waiting to be known.” — Dr. Carl Sagan (Discovery & Science)",
        dimensionPoints: { Scientific: 5, Analytical: 3 }
      },
      {
        id: "30b",
        text: "“The best way to predict the future is to create it through enterprise and action.” (Leadership & Enterprise)",
        dimensionPoints: { Business: 5, Analytical: 2 }
      },
      {
        id: "30c",
        text: "“Be the change you wish to see in the world, one human life at a time.” — Mahatma Gandhi (Empathy & Service)",
        dimensionPoints: { Social: 5, Creative: 2 }
      },
      {
        id: "30d",
        text: "“Creativity is intelligence having fun and leaving the world more beautiful than you found it.” (Art & Craft)",
        dimensionPoints: { Creative: 5, Practical: 3 }
      }
    ]
  }
];
