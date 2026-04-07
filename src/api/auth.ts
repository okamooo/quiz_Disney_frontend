import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../types/authModels';

const API_BASE_URL = 'http://localhost:8080/api/v1/quiz';

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('ログインに失敗しました');
  }

  const data = await response.json() as LoginResponse;

  if (!data.success) {
    throw new Error(data.message);
  }

  return {
    ...data,
    loginId: request.loginId,
    messeage: data.message,
  };
};

export const register = async (request: RegisterRequest): Promise<RegisterResponse> => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('登録に失敗しました');
  }

  const data = await response.json() as RegisterResponse;

  if (!data.success) {
    throw new Error(data.message);
  }

  return {
    ...data,
    loginId: request.userId,
    messeage: data.message,
  };
};
