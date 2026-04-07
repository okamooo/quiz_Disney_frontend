import React, { useMemo } from 'react';
import { QuizModeOption } from '../types/home';

interface QuizModeSectionProps {
  quizModes: QuizModeOption[];
  selectedQuizMode: string;
  hasAvailableQuiz: boolean;
  onQuizModeChange: (quizMode: string) => void;
  onQuizStart: () => void;
}

const QuizModeSection: React.FC<QuizModeSectionProps> = ({
  quizModes,
  selectedQuizMode,
  hasAvailableQuiz,
  onQuizModeChange,
  onQuizStart,
}) => {
  const selectedQuizModeData = useMemo(() => {
    return quizModes.find((quizModeOption) => quizModeOption.quizMode === selectedQuizMode);
  }, [quizModes, selectedQuizMode]);

  return (
    <section className="home-card">
      <div className="home-section-header">
        <h2>クイズ開始</h2>
        <p>出題形式を選択してください。</p>
      </div>

      <div className="quiz-mode-list">
        {quizModes.map((quizModeOption) => {
          const isSelected = quizModeOption.quizMode === selectedQuizMode;

          return (
            <button
              key={quizModeOption.quizMode}
              type="button"
              className={`quiz-mode-button ${isSelected ? 'selected' : ''}`}
              onClick={() => onQuizModeChange(quizModeOption.quizMode)}
            >
              <span className="quiz-mode-label">{quizModeOption.quizModeLabel}</span>
              <span className="quiz-mode-status">
                {quizModeOption.isAvailable ? '利用可能' : '準備中'}
              </span>
            </button>
          );
        })}
      </div>

      <div className="quiz-start-panel">
        <div>
          <p className="quiz-start-title">現在の選択</p>
          <p className="quiz-start-value">
            {selectedQuizModeData?.quizModeLabel ?? '未選択'}
          </p>
        </div>

        <button
          type="button"
          className="quiz-start-button"
          disabled={!hasAvailableQuiz}
          onClick={onQuizStart}
        >
          クイズを始める
        </button>
      </div>
    </section>
  );
};

export default QuizModeSection;