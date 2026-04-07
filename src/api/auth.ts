import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../types/auth';

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

  return response.json();
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

  return response.json();
};