export interface QuizChoice {
  choiceId: number;
  choiceText: string;
}

export interface QuizQuestion {
  questionId: number;
  currentQuestionNumber: number;
  totalQuestionCount: number;
  categoryId: number;
  phraseText: string;
  translationText: string;
  targetWord: string;
  choices: QuizChoice[];
  explanation?: string;
}

export interface QuizProgress {
  currentQuestionNumber: number;
  totalQuestionCount: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  skipCount?: number;
}

export interface UserAnswer {
  question: QuizQuestion;
  selectedChoiceId: number | null;
  selectedChoiceText?: string;
  isCorrect: boolean;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  userAnswers: UserAnswer[];
}

export interface StartQuizRequest {
  userId?: string;
  categoryId: number;
  mode: string;
}

export interface StartQuizResponse {
  quizSessionId: string;
  quizId: number;
  progress: QuizProgress;
  question: QuizQuestion;
}

export interface AnswerQuizRequest {
  questionId: number;
  action: 'ANSWER' | 'SKIP';
  selectedChoiceText?: string;
}

export interface QuizResultSummary {
  quizSessionId: string;
  totalQuestionCount: number;
  correctCount: number;
  incorrectCount: number;
  skipCount: number;
  accuracyRate: number;
}

export interface AnswerQuizResponse {
  action: string;
  skipped: boolean;
  questionId: number;
  correct: boolean;
  selectedChoiceText?: string;
  translationText: string;
  correctAnswer: string;
  explanation?: string;
  progress: QuizProgress;
  nextQuestion?: QuizQuestion;
  finished: boolean;
  result?: QuizResultSummary;
}
