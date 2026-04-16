import { 
  StartQuizRequest, 
  StartQuizResponse, 
  AnswerQuizRequest, 
  AnswerQuizResponse 
} from '../types/question';

const BASE_URL = "http://localhost:8080/api/v1/quiz";

/**
 * クイズを開始し、最初の問題を取得する
 */
export const startQuiz = async (request: StartQuizRequest): Promise<StartQuizResponse> => {
  const response = await fetch(`${BASE_URL}/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('クイズの開始に失敗しました');
  }

  return response.json();
};

/**
 * 現在の問題に回答を送信し、結果と次の問題を取得する
 */
export const answerQuiz = async (
  sessionId: string, 
  request: AnswerQuizRequest
): Promise<AnswerQuizResponse> => {
  const response = await fetch(`${BASE_URL}/${sessionId}/answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('回答の送信に失敗しました');
  }

  return response.json();
};
