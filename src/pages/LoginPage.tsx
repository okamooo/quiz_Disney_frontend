import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../api/auth';
import { LoginRequest } from '../types/authModels';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (request: LoginRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await login(request);
      alert(`ログイン成功！ ようこそ ${response.loginId} さん\nメッセージ: ${response.messeage}`);
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
