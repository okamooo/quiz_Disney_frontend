import { QuizProgress } from '../types/question';

interface QuizProgressHeaderProps {
  progress: QuizProgress;
}

const QuizProgressHeader = ({ progress }: QuizProgressHeaderProps) => {
  const safeTotal = Math.max(progress.totalQuestionCount, 1);
  const progressPercent =
    (progress.currentQuestionNumber / safeTotal) * 100;

  return (
    <section className="quiz-progress-header" aria-label="クイズ進捗">
      <p className="quiz-progress-header__label">
        第{progress.currentQuestionNumber}問 / 全{progress.totalQuestionCount}問
      </p>
      <progress
        className="quiz-progress-header__track"
        value={progress.currentQuestionNumber}
        max={safeTotal}
        data-progress-percent={progressPercent}
      />
    </section>
  );
};

export default QuizProgressHeader;
