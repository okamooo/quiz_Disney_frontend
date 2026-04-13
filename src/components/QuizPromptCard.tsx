const escapeRegExp = (value: string) => {
 return value.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
};

const maskTargetWord = (phraseText: string, targetWord: string) => {
  const escapedTargetWord = escapeRegExp(targetWord);
  const wholeWordPattern = new RegExp(String.raw`\b${escapedTargetWord}\b`, 'i');

  if (wholeWordPattern.test(phraseText)) {
    return phraseText.replace(wholeWordPattern, '____');
  }

  const fallbackPattern = new RegExp(escapedTargetWord, 'i');
  return phraseText.replace(fallbackPattern, '____');
};

interface QuizPromptCardProps {
  phraseText: string;
  targetWord: string;
  translationText?: string;
}

const QuizPromptCard = ({
  phraseText,
  targetWord,
  translationText,
}: QuizPromptCardProps) => {
  const maskedPhraseText = maskTargetWord(phraseText, targetWord);

  return (
    <section className="quiz-prompt-card" aria-label="問題文">
      <p className="quiz-prompt-card__instruction">
        空欄に入る単語を選んでください
      </p>
      <p className="quiz-prompt-card__phrase">{maskedPhraseText}</p>
      {translationText ? (
        <p className="quiz-prompt-card__translation">{translationText}</p>
      ) : null}
    </section>
  );
};

export default QuizPromptCard;
