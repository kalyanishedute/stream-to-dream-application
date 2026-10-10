import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  QuizCalculationResult, 
  CustomRoadmap, 
  Career,
  StreamType 
} from '../types';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { CAREERS_DATA } from '../data/careersData';
import { calculateQuizResults } from '../utils/scoring';

interface CareerQuizContextType {
  answers: Record<number, string>;
  currentQuestionIndex: number;
  totalQuestions: number;
  results: QuizCalculationResult | null;
  bookmarkedCareerIds: string[];
  roadmap: CustomRoadmap;
  setAnswer: (questionId: number, optionId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitQuiz: () => QuizCalculationResult;
  retakeQuiz: () => void;
  toggleBookmark: (careerId: string) => void;
  updateRoadmap: (updater: Partial<CustomRoadmap> | ((prev: CustomRoadmap) => CustomRoadmap)) => void;
  resetRoadmap: () => void;
  allCareers: Career[];
}

const STORAGE_KEY_ANSWERS = 'stream_to_dream_quiz_answers_v1';
const STORAGE_KEY_RESULTS = 'stream_to_dream_quiz_results_v1';
const STORAGE_KEY_BOOKMARKS = 'stream_to_dream_bookmarks_v1';
const STORAGE_KEY_ROADMAP = 'stream_to_dream_roadmap_v1';

const defaultRoadmap: CustomRoadmap = {
  studentName: '',
  targetClass: 'Class 10',
  targetStream: 'Undecided',
  chosenCareers: ['software-developer', 'chartered-accountant'],
  selectedSubjects: ['Mathematics', 'Physics', 'Economics'],
  targetExams: ['CUET-UG', 'JEE Main'],
  customGoals: [
    'Research Class 11 subject options offered by my school',
    'Schedule a 30-minute discussion with parents',
    'Review top 3 careers side by side on Stream to Dream'
  ]
};

const CareerQuizContext = createContext<CareerQuizContextType | undefined>(undefined);

export const CareerQuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn('Failed to parse saved answers', e);
      return {};
    }
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
    // If some answers exist, resume at the first unanswered question
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        const count = Object.keys(parsed).length;
        if (count > 0 && count < QUIZ_QUESTIONS.length) {
          return count;
        }
      }
    } catch {}
    return 0;
  });

  const [results, setResults] = useState<QuizCalculationResult | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESULTS);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.warn('Failed to parse saved results', e);
      return null;
    }
  });

  const [bookmarkedCareerIds, setBookmarkedCareerIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return saved ? JSON.parse(saved) : ['software-developer', 'clinical-psychologist'];
    } catch (e) {
      return ['software-developer', 'clinical-psychologist'];
    }
  });

  const [roadmap, setRoadmap] = useState<CustomRoadmap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROADMAP);
      return saved ? JSON.parse(saved) : defaultRoadmap;
    } catch (e) {
      return defaultRoadmap;
    }
  });

  // Persist answers
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [answers]);

  // Persist results
  useEffect(() => {
    try {
      if (results) {
        localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(results));
      } else {
        localStorage.removeItem(STORAGE_KEY_RESULTS);
      }
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [results]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarkedCareerIds));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [bookmarkedCareerIds]);

  // Persist roadmap
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ROADMAP, JSON.stringify(roadmap));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [roadmap]);

  const setAnswer = (questionId: number, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const submitQuiz = (): QuizCalculationResult => {
    const calc = calculateQuizResults(answers, QUIZ_QUESTIONS, CAREERS_DATA);
    setResults(calc);

    // Auto update target stream in roadmap if undecided
    if (calc.streamResults.length > 0 && roadmap.targetStream === 'Undecided') {
      const topStream = calc.streamResults[0].stream as StreamType;
      setRoadmap(prev => ({
        ...prev,
        targetStream: topStream
      }));
    }

    return calc;
  };

  const retakeQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResults(null);
    localStorage.removeItem(STORAGE_KEY_ANSWERS);
    localStorage.removeItem(STORAGE_KEY_RESULTS);
  };

  const toggleBookmark = (careerId: string) => {
    setBookmarkedCareerIds(prev => {
      if (prev.includes(careerId)) {
        return prev.filter(id => id !== careerId);
      } else {
        return [...prev, careerId];
      }
    });
  };

  const updateRoadmap = (updater: Partial<CustomRoadmap> | ((prev: CustomRoadmap) => CustomRoadmap)) => {
    setRoadmap(prev => {
      if (typeof updater === 'function') {
        return updater(prev);
      }
      return { ...prev, ...updater };
    });
  };

  const resetRoadmap = () => {
    setRoadmap(defaultRoadmap);
    localStorage.removeItem(STORAGE_KEY_ROADMAP);
  };

  return (
    <CareerQuizContext.Provider
      value={{
        answers,
        currentQuestionIndex,
        totalQuestions: QUIZ_QUESTIONS.length,
        results,
        bookmarkedCareerIds,
        roadmap,
        setAnswer,
        nextQuestion,
        prevQuestion,
        goToQuestion,
        submitQuiz,
        retakeQuiz,
        toggleBookmark,
        updateRoadmap,
        resetRoadmap,
        allCareers: CAREERS_DATA
      }}
    >
      {children}
    </CareerQuizContext.Provider>
  );
};

export const useCareerQuiz = () => {
  const context = useContext(CareerQuizContext);
  if (!context) {
    throw new Error('useCareerQuiz must be used within a CareerQuizProvider');
  }
  return context;
};
