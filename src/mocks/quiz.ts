import { StartQuizResponse } from '../types/question';

export const mockStartQuizResponse: StartQuizResponse = {
  quizSessionId: 'dummy-session-id',
  quizId: 101,
  progress: {
    currentQuestionNumber: 1,
    totalQuestionCount: 10,
    answeredCount: 0,
    correctCount: 0,
    incorrectCount: 0,
  },
  question: {
    questionId: 101,
    currentQuestionNumber: 1,
    totalQuestionCount: 10,
    categoryId: 1,
    phraseText: 'I challenge my limits and go beyond them.',
    translationText: '限界に挑戦して、それをさらに越えていけ。',
    targetWord: 'limits',
    choices: [
      { choiceId: 0, choiceText: 'limits' },
      { choiceId: 1, choiceText: 'dreams' },
      { choiceId: 2, choiceText: 'goals' },
      { choiceId: 3, choiceText: 'starts' },
    ],
  },
};
