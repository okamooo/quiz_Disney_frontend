import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../api/auth';

import { LoginRequest } from '../types/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (request: LoginRequest) => {
    setIsLoading(true);
    setError(null);
    try {      
      await login(request);
      navigate('/home');
    } catch (err) {
      console.error('ログインエラー:', err);
      setError('ログインに失敗しました。サーバーが起動しているか確認してください。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h1>ログイン</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
};

export default LoginPage;
