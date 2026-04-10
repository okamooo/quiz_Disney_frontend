import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { register } from "../api/auth";
import styles from "./AuthPage.module.css";
import { RegisterRequest } from "../types/authModels";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (request: RegisterRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await register(request);
      alert(
        `${response.loginId}さん ようこそ、夢と魔法の国へ！ \n${response.messeage}`,
      );
      navigate("/login");
    } catch (err) {
      console.error("登録エラー;", err);
      setError("登録に失敗しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.authPage}>
      <section className={styles.card}>
        <h1 className={styles.title}>ユーザー登録</h1>
        {error && <p className={styles.error}>{error}</p>}
        <RegisterForm onRegister={handleRegister} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default RegisterPage;
