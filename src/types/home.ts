export type QuizMode = 'mode1' | 'mode2';

export interface QuizModeOption {
  quizMode: QuizMode;
  quizModeLabel: string;
  quizStartUrl: string;
  isAvailable: boolean;
}

export interface LearningHistory {
  historyId: string;
  playedAt: string;
  solvedCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracyRate: number;
}

export interface HomeData {
  userId: string;
  userName: string;
  welcomeMessage: string;
  quizModes: QuizModeOption[];
  hasAvailableQuiz: boolean;
  learningHistories: LearningHistory[];
}
