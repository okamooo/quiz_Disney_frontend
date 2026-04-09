import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../types/authModels";

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

  const handleSubmit = (e: React.FormEvent) => {
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

  const inputStyle = {
    padding: "10px",
    width: "100%",
    boxSizing: "border-box" as const,
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const fieldContainerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "5px",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={fieldContainerStyle}>
          <label htmlFor="userId" style={labelStyle}>
            ユーザーID
          </label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldContainerStyle}>
          <label htmlFor="email" style={labelStyle}>
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldContainerStyle}>
          <label htmlFor="password" style={labelStyle}>
            パスワード
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldContainerStyle}>
          <label htmlFor="confirmPassword" style={labelStyle}>
            パスワード（確認）
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        style={{
          padding: "12px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        {isLoading ? "登録中..." : "登録"}
      </button>

      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          onClick={handleLoginClick}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "12px",
          }}
        >
          既にアカウントをお持ちの方はこちら
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
