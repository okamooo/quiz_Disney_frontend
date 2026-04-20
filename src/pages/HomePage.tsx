import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../components/CommonHeader";
import LearningHistoryList from "../components/LearningHistoryList";
import QuizModeSection from "../components/QuizModeSection";
import "./HomePage.css";
import { HomeData, QuizModeOption } from "../types/home";
import { getHomeData } from "../api/home";

const HomePage = () => {
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [selectedQuizMode, setSelectedQuizMode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showGuestAlert, setShowGuestAlert] = useState(false);

  const userId = localStorage.getItem("userId") || "";

  useEffect(() => {
    const fetchHomeData = async () => {
      if (!userId) {
        // ゲスト用デフォルトデータ
        setHomeData({
          userId: "GUEST",
          userName: "ゲスト",
          welcomeMessage: "夢と魔法（と念能力）の世界へようこそ！",
          quizModes: [
            {
              quizMode: "mode1",
              quizModeLabel: "選択問題",
              quizStartUrl: "/api/v1/quiz/start/select",
              isAvailable: true,
            },
            {
              quizMode: "mode2",
              quizModeLabel: "並べ替え問題",
              quizStartUrl: "/api/v1/quiz/start/sort",
              isAvailable: false,
            },
          ],
          learningHistories: [],
          hasAvailableQuiz: true,
        });
        setSelectedQuizMode("mode1");
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const data = await getHomeData(userId);
        setHomeData(data);
        if (data.userName) {
          localStorage.setItem("userName", data.userName);
        }
        if (data.quizModes && data.quizModes.length > 0) {
          setSelectedQuizMode(data.quizModes[0].quizMode);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("サーバーとの通信に失敗しました。");
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomeData();
  }, [userId]);

  const selectedQuizModeData = useMemo<QuizModeOption | undefined>(() => {
    return (homeData?.quizModes || []).find(
      (m) => m.quizMode === selectedQuizMode,
    );
  }, [homeData?.quizModes, selectedQuizMode]);

  const hasAvailableQuiz: boolean =
    Boolean(homeData?.hasAvailableQuiz) &&
    (selectedQuizModeData?.isAvailable ?? false);

  const handleQuizStart = () => {
    if (!userId || userId === "") {
      setShowGuestAlert(true);
      return;
    }

    if (!selectedQuizModeData || !homeData) return;

    navigate("/quiz/start", {
      state: {
        mode: selectedQuizModeData.quizMode,
        modeLabel: selectedQuizModeData.quizModeLabel,
        userName: homeData.userName,
      },
    });
  };

  if (isLoading)
    return (
      <div style={{ color: "white", textAlign: "center", padding: "100px" }}>
        読み込み中...
      </div>
    );
  if (error)
    return (
      <div style={{ color: "#ff6b6b", textAlign: "center", padding: "100px" }}>
        {error}
      </div>
    );
  if (!homeData) return null;

  return (
    <main className="home-page">
      <CommonHeader />

      <QuizModeSection
        quizModes={homeData.quizModes || []}
        selectedQuizMode={selectedQuizMode}
        hasAvailableQuiz={hasAvailableQuiz}
        onQuizModeChange={setSelectedQuizMode}
        onQuizStart={handleQuizStart}
      />

      <div className="learning-history-wrapper">
        <LearningHistoryList
          learningHistories={homeData.learningHistories || []}
        />
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">Coming Soon,,,</span>
        </div>
      </div>

      {/* ヒソカの警告ポップアップ */}
      {showGuestAlert && (
        <div className="guest-alert-overlay">
          <div className="guest-alert">
            <p className="guest-alert__message">
              「通さないよ♣
              <br />
              ってか通れないだろ？」
              <br />
              <span>ユーザー登録をしてください</span>
            </p>
            <div className="guest-alert__actions">
              <button
                type="button"
                className="guest-alert__button primary"
                onClick={() => navigate("/register")}
              >
                ユーザー登録へ
              </button>
              <button
                type="button"
                className="guest-alert__button secondary"
                onClick={() => setShowGuestAlert(false)}
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
