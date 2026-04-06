export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  messeage: string; // バックエンドのDTOの綴りに合わせる

}export interface RegisterRequest {
  userId: string;
  password: string;
}

export interface RegisterResponse {
  userId: string;
  messeage: string; // バックエンドのDTOの綴りに合わせる
}