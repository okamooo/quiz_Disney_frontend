export interface Question {
    questionId: string;
    questionText: string;
    choices: string[];
    correctAnswerIndex: number;
}