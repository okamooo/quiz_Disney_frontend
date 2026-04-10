import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../types/authModels";
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

  // React.FormEvent ã§ã¯ãªãã€ãƒ–ãƒ©ã‚¦ã‚¶æ¨™æº–ã® "SubmitEvent" ã¾ãŸã¯ "Event" ã‚’ä½¿ã†
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("ƒpƒXƒ[ƒh‚ªˆê’v‚µ‚Ü‚¹‚ñB");
      return;
    }
    onRegister({ userId, email, password });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="userId" className={styles.label}>
            ƒ†[ƒU[ID
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
            ƒ[ƒ‹ƒAƒhƒŒƒX
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

        <div className={styles.field}>
          <label htmlFor="confirmPassword" className={styles.label}>
            ƒpƒXƒ[ƒhiŠm”Fj
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
        {isLoading ? "“o˜^’†..." : "“o˜^"}
      </button>

      <div className={styles.footer}>
        <button
          type="button"
          onClick={handleLoginClick}
          className={styles.linkButton}
        >
          Šù‚ÉƒAƒJƒEƒ“ƒg‚ð‚¨Ž‚¿‚Ì•û‚Í‚±‚¿‚ç
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
