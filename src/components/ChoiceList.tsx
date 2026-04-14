import { QuizChoice } from '../types/question';

interface ChoiceListProps {
  choices: QuizChoice[];
  selectedChoiceId: number | null;
  onSelect: (choiceId: number) => void;
}

const ChoiceList = ({
  choices,
  selectedChoiceId,
  onSelect,
}: ChoiceListProps) => {
  return (
    <section className="choice-list" aria-label="選択肢">
      {choices.map((choice) => {
        const isSelected = choice.choiceId === selectedChoiceId;

        return (
          <button
            key={choice.choiceId}
            type="button"
            className={`choice-list__item ${isSelected ? 'is-selected' : ''}`}
            onClick={() => onSelect(choice.choiceId)}
            aria-pressed={isSelected}
          >
            <span className="choice-list__marker">{isSelected ? '✓' : ''}</span>
            <span className="choice-list__text">{choice.choiceText}</span>
          </button>
        );
      })}
    </section>
  );
};

export default ChoiceList;
