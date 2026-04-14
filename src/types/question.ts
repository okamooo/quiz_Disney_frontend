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
}

export interface QuizProgress {
  currentQuestionNumber: number;
  totalQuestionCount: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
}

export interface StartQuizResponse {
  quizSessionId: string;
  quizId: number;
  progress: QuizProgress;
  question: QuizQuestion;
}
