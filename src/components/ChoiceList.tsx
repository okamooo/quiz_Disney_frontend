import { QuizChoice } from '../types/question';

interface ChoiceListProps {
  choices: QuizChoice[];
  selectedChoiceId: number | null;
  onSelect: (choiceId: number) => void;
  isAnswered?: boolean;
  correctChoiceId?: number;
  explanation?: string;
}

const ChoiceList = ({
  choices,
  selectedChoiceId,
  onSelect,
  isAnswered,
  correctChoiceId,
  explanation,
}: ChoiceListProps) => {
  return (
    <section className="choice-list" aria-label="選択肢">
      {choices.map((choice) => {
        const isSelected = choice.choiceId === selectedChoiceId;
        const isCorrect = choice.choiceId === correctChoiceId;

        // 回答後の状態に応じたクラス名
        let markerStatus = "";
        let itemStatus = "";
        
        if (isAnswered) {
          if (isCorrect) {
            markerStatus = "is-correct";
            itemStatus = "is-correct";
          } else if (isSelected) {
            markerStatus = "is-wrong";
            itemStatus = "is-wrong";
          }
        }

        return (
          <div key={choice.choiceId} className="choice-list__wrapper">
            <button
              type="button"
              className={`choice-list__item ${isSelected ? 'is-selected' : ''} ${itemStatus}`}
              onClick={() => !isAnswered && onSelect(choice.choiceId)}
              aria-pressed={isSelected}
              disabled={isAnswered}
            >
              <span className={`choice-list__marker ${markerStatus}`}>
                {!isAnswered && isSelected && '✓'}
              </span>
              <span className="choice-list__text">{choice.choiceText}</span>
            </button>
            
            {isAnswered && isCorrect && explanation && (
              <div className="choice-list__explanation">
                <h3 className="explanation-title">解説</h3>
                <p className="explanation-text">{explanation}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ChoiceList;
