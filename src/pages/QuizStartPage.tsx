import { useNavigate, useLocation } from "react-router-dom";
import CommonHeader from "../components/CommonHeader";
import "./QuizStartPage.css";

const QuizStartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { modeLabel, mode, userName: stateUserName } = location.state || {
    modeLabel: "選択問題",
    mode: "choice",
    userName: ""
  };

  // 渡された名前があれば使い、なければ userId を使う
  const userId = localStorage.getItem('userId') ?? "";
  const userName = stateUserName || userId;

  const handleStart = () => {
    navigate("/quiz/question", { state: { mode } });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <main className="quiz-start-page">
      <CommonHeader
        userId={userId}
        userName={userName}
        onLogout={() => {
          localStorage.removeItem('userId');
          localStorage.removeItem('userName');
          navigate("/login");
        }}
      />

      <div className="start-container">
        <section className="start-card">
          <h2 className="start-title">クイズ開始</h2>
          <div className="mode-info">
            <p className="label">選択中のモード</p>
            <p className="value">{modeLabel}</p>
          </div>

          <div className="start-actions">
            <button
              type="button"
              className="start-button primary"
              onClick={handleStart}
            >
              クイズ開始
            </button>
            <button
              type="button"
              className="start-button secondary"
              onClick={handleBack}
            >
              ホームに戻る
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default QuizStartPage;
