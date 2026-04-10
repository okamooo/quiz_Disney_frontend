import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../types/authModels";
import styles from "./RegisterForm.module.css";
import styles from "./RegisterForm.module.css";

interface RegisterFormProps {
  onRegister: (request: RegisterRequest) => void;
  isLoading: boolean;
}

const RegisterForm = ({ onRegister, isLoading }: RegisterFormProps) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。");
      return;
    }
    onRegister({ userId, email, password });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="userId" className={styles.label}>
            ログインID
          </label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>

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
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword" className={styles.label}>
            パスワード確認
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? "登録中..." : "登録"}
      </button>

      <div className={styles.footer}>
        <button
          type="button"
          onClick={handleLoginClick}
          className={styles.linkButton}
        >
          既にアカウントをお持ちの方はこちら
        </button>
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          onClick={handleLoginClick}
          className={styles.linkButton}
        >
          既にアカウントをお持ちの方はこちら
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
