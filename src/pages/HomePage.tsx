import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonHeader from '../components/CommonHeader';
import LearningHistoryList from '../components/LearningHistoryList';
import QuizModeSection from '../components/QuizModeSection';
import './HomePage.css';
import { HomeData, QuizModeOption } from '../types/home';
import { getHomeData } from '../api/home';

const HomePage = () => {
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [selectedQuizMode, setSelectedQuizMode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem('userId') || "";
  const userName = localStorage.getItem('userName') || "ゲスト";

  useEffect(() => {
    const fetchHomeData = async () => {
      if (!userId) {
        setError("ログイン情報が見つかりません。");
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const data = await getHomeData(userId);
        setHomeData(data);
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
      (m) => m.quizMode === selectedQuizMode
    );
  }, [homeData?.quizModes, selectedQuizMode]);

  const hasAvailableQuiz: boolean = 
    Boolean(homeData?.hasAvailableQuiz) && (selectedQuizModeData?.isAvailable ?? true);

  const handleQuizStart = () => {
    if (!selectedQuizModeData || !homeData) return;

    navigate('/quiz/start', {
      state: {
        mode: selectedQuizModeData.quizMode,
        modeLabel: selectedQuizModeData.quizModeLabel,
        userName: homeData.userName
      }
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (isLoading) return <div style={{ color: 'white', textAlign: 'center', padding: '100px' }}>読み込み中...</div>;
  if (error) return <div style={{ color: '#ff6b6b', textAlign: 'center', padding: '100px' }}>{error}</div>;
  if (!homeData) return null;

  return (
    <main className="home-page">
      <CommonHeader
        userId={homeData.userId || userId}
        userName={homeData.userName || userName}
        onLogout={handleLogout}
      />

      <QuizModeSection
        quizModes={homeData.quizModes || []}
        selectedQuizMode={selectedQuizMode}
        hasAvailableQuiz={hasAvailableQuiz}
        onQuizModeChange={setSelectedQuizMode}
        onQuizStart={handleQuizStart}
      />

      <LearningHistoryList learningHistories={homeData.learningHistories || []} />
    </main>
  );
};

export default HomePage;
