export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  loginId?: string;
  messeage?: string;
}

export interface RegisterRequest {
  userId: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  loginId?: string;
  messeage?: string;
}
