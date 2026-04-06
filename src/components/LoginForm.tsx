import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../types/auth';

interface LoginFormProps {
  onLogin: (request: LoginRequest) => void;
  isLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isLoading }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ userId, password });
  };

  const handleRegisterClick = () => {
    navigate('/register');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <label htmlFor="userId">ユーザーID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">パスワード:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'ログイン中...' : 'ログイン'}
      </button>

      <div style={{ marginTop: '10px' ,textAlign : 'center' , fontSize:'10px'}}>
        <button onClick={handleRegisterClick}>
          アカウントをお持ちでない方はこちら
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
