import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../types/auth";

interface LoginFormProps {
  onLogin: (request: LoginRequest) => void;
  isLoading: boolean;
}

const LoginForm = ({ onLogin, isLoading }: LoginFormProps) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ loginId, password });
  };

  const handleRegisterClick = () => {
    navigate("/register");
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label
            htmlFor="loginId"
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            ユーザーID or メールアドレス
          </label>
          <input
            id="loginId"
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
            style={{
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label
            htmlFor="password"
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            パスワード
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
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
        {isLoading ? "ログイン中..." : "ログイン"}
      </button>

      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          onClick={handleRegisterClick}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "12px",
          }}
        >
          アカウントをお持ちでない方はこちら
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
