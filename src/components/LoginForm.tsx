import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../types/auth";
import styles from "./LoginForm.module.css";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onLogin: (request: LoginRequest) => void;
  isLoading: boolean;
}

const LoginForm = ({ onLogin, isLoading }: LoginFormProps) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin({ loginId, password });
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="loginId" className={styles.label}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="loginId" className={styles.label}>
            ユーザーID or メールアドレス
          </label>
          <input
            id="loginId"
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
            className={styles.input}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            パスワード
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
            className={styles.input}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
        className={styles.submitButton}
      >
        {isLoading ? "ログイン中..." : "ログイン"}
      </button>

      <div className={styles.footer}>
      <div className={styles.footer}>
        <button
          type="button"
          onClick={handleRegisterClick}
          className={styles.linkButton}
          className={styles.linkButton}
        >
          アカウントをお持ちでない方はこちら
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
