interface SubmitAnswerBarProps {
  isEnabled: boolean;
  isAnswered: boolean;
  onAnswer: () => void;
  onSkip: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const SubmitAnswerBar = ({
  isEnabled,
  isAnswered,
  onAnswer,
  onSkip,
  onNext,
  isLastQuestion,
}: SubmitAnswerBarProps) => {
  return (
    <div className="submit-answer-bar">
      {!isAnswered ? (
        <div className="submit-answer-bar__layout">
          <button
            type="button"
            className="submit-answer-bar__button--main"
            disabled={!isEnabled}
            onClick={onAnswer}
          >
            回答する
          </button>
          <button
            type="button"
            className="submit-answer-bar__button--side"
            onClick={onSkip}
          >
            スキップ
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="submit-answer-bar__button--full"
          onClick={onNext}
        >
          {isLastQuestion ? "結果を見る" : "次の問題へ"}
        </button>
      )}
    </div>
  );
};

export default SubmitAnswerBar;
