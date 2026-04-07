import React, { useMemo, useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import LearningHistoryList from '../components/LearningHistoryList';
import QuizModeSection from '../components/QuizModeSection';
import './HomePage.css';
import { HomeData, QuizModeOption } from '../types/home';

// API 連携前でも画面確認できるように、まずはモックデータを置いています。
const mockHomeData: HomeData = {
  userId: 'user-001',
  userName: 'Lilo',
  welcomeMessage: '',
  hasAvailableQuiz: true,
  quizModes: [
    {
      quizMode: 'choice',
      quizModeLabel: '選択問題',
      quizStartUrl: '/quiz/choice',
      isAvailable: true,
    },
    {
      quizMode: 'sort',
      quizModeLabel: '並び替え問題',
      quizStartUrl: '/quiz/sort',
      isAvailable: false,
    },
  ],
  learningHistories: [
    {
      historyId: 'history-001',
      playedAt: '2026-04-07T09:30:00+09:00',
      solvedCount: 10,
      correctCount: 8,
      incorrectCount: 2,
      accuracyRate: 80,
    },
    {
      historyId: 'history-002',
      playedAt: '2026-04-06T20:15:00+09:00',
      solvedCount: 12,
      correctCount: 9,
      incorrectCount: 3,
      accuracyRate: 75,
    },
  ],
};

const HomePage: React.FC = () => {
  const [homeData] = useState<HomeData>(mockHomeData);
  const [selectedQuizMode, setSelectedQuizMode] = useState<string>(
    mockHomeData.quizModes[0]?.quizMode ?? '',
  );

  const selectedQuizModeData = useMemo<QuizModeOption | undefined>(() => {
    return homeData.quizModes.find(
      (quizModeOption) => quizModeOption.quizMode === selectedQuizMode,
    );
  }, [homeData.quizModes, selectedQuizMode]);

  const hasAvailableQuiz =
    homeData.hasAvailableQuiz && Boolean(selectedQuizModeData?.isAvailable);

  const handleQuizStart = () => {
    if (!selectedQuizModeData) {
      return;
    }

    alert(
      `${selectedQuizModeData.quizModeLabel} を開始します。\n遷移先: ${selectedQuizModeData.quizStartUrl}`,
    );
  };

  return (
    <main className="home-page">
      <HomeHeader
        userId={homeData.userId}
        userName={homeData.userName}
      />

      <QuizModeSection
        quizModes={homeData.quizModes}
        selectedQuizMode={selectedQuizMode}
        hasAvailableQuiz={hasAvailableQuiz}
        onQuizModeChange={setSelectedQuizMode}
        onQuizStart={handleQuizStart}
      />

      <LearningHistoryList learningHistories={homeData.learningHistories} />
    </main>
  );
};

export default HomePage;