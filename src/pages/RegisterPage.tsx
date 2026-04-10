import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../types/authModels";
import { register } from "../api/auth";

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
      setError(
        "登録に失敗しました。", //エラーに対応したエラーメッセージを実装予定
      );
    } finally {
      setIsLoading(false);
    }
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
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>ユーザー登録</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const userId = formData.get("userId") as string;
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          handleRegister({ userId, email, password });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={fieldContainerStyle}>
            <label htmlFor="userId" style={labelStyle}>
              ログインID
            </label>
            <input id="userId" name="userId" type="text" required style={inputStyle} />
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="email" style={labelStyle}>
              メールアドレス
            </label>
            <input id="email" name="email" type="email" required style={inputStyle} />
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="password" style={labelStyle}>
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
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
            onClick={() => navigate("/login")}
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
    </div>
  );
};

export default RegisterPage;
