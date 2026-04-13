interface QuizMetaInfoProps {
  categoryId: number;
  answeredCount: number;
  totalQuestionCount: number;
}

const QuizMetaInfo = ({
  categoryId,
  answeredCount,
  totalQuestionCount,
}: QuizMetaInfoProps) => {
  return (
    <section className="quiz-meta-info" aria-label="問題補助情報">
      <div className="quiz-meta-info__item">
        <span className="quiz-meta-info__label">カテゴリ</span>
        <span className="quiz-meta-info__value">ID: {categoryId}</span>
      </div>
      <div className="quiz-meta-info__item quiz-meta-info__item--align-right">
        <span className="quiz-meta-info__label">回答済み</span>
        <span className="quiz-meta-info__value">
          {answeredCount} / {totalQuestionCount}
        </span>
      </div>
    </section>
  );
};

export default QuizMetaInfo;
