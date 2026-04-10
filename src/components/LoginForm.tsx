import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../types/auth";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onLogin: (request: LoginRequest) => void;
  isLoading: boolean;
}

const LoginForm = ({ onLogin, isLoading }: LoginFormProps) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // React.FormEvent ã§ã¯ãªãã€ãƒ–ãƒ©ã‚¦ã‚¶æ¨™æº–ã® "SubmitEvent" ã¾ãŸã¯ "Event" ã‚’ä½¿ã†
  const handleSubmit = (e: { preventDefault: () => void }) => {
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
            ƒ†[ƒU[ID or ƒ[ƒ‹ƒAƒhƒŒƒX
          </label>
          <input
            id="loginId"
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            ƒpƒXƒ[ƒh
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
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? "ƒƒOƒCƒ“’†..." : "ƒƒOƒCƒ“"}
      </button>

      <div className={styles.footer}>
        <button
          type="button"
          onClick={handleRegisterClick}
          className={styles.linkButton}
        >
          ƒAƒJƒEƒ“ƒg‚ð‚¨Ž‚¿‚Å‚È‚¢•û‚Í‚±‚¿‚ç
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
