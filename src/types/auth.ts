export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  loginId: string;
  messeage: string; // バックエンドのDTOの綴りに合わせる

}export interface RegisterRequest {
  loginId: string;
  password: string;
}

export interface RegisterResponse {
  loginId: string;
  messeage: string; // バックエンドのDTOの綴りに合わせる
}