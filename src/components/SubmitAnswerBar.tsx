interface SubmitAnswerBarProps {
  isEnabled: boolean;
}

const SubmitAnswerBar = ({ isEnabled }: SubmitAnswerBarProps) => {
  return (
    <div className="submit-answer-bar">
      <button
        type="button"
        className="submit-answer-bar__button"
        disabled={!isEnabled}
      >
        回答する
      </button>
    </div>
  );
};

export default SubmitAnswerBar;
