import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../components/CommonHeader";
import LoginForm from "../components/LoginForm";
import { login } from "../api/auth";
import styles from "./AuthPage.module.css";
import { LoginRequest } from "../types/auth";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (request: LoginRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      await login(request);
      // ログイン成功時に情報を localStorage に保存
      localStorage.setItem('userId', request.loginId);
      navigate("/home");
    } catch (err) {
      console.error("ログインエラー:", err);
      setError("ログインに失敗しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authPageContainer}>
      <CommonHeader />
      <main className={styles.authPage}>
        <section className={styles.card}>
          <h1 className={styles.title}>ログイン</h1>
          {error && <p className={styles.error}>{error}</p>}
          <LoginForm onLogin={handleLogin} isLoading={isLoading} />
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
