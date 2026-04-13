import { useState } from 'react';
import ChoiceList from '../components/ChoiceList';
import QuizMetaInfo from '../components/QuizMetaInfo';
import QuizProgressHeader from '../components/QuizProgressHeader';
import QuizPromptCard from '../components/QuizPromptCard';
import SubmitAnswerBar from '../components/SubmitAnswerBar';
import { mockStartQuizResponse } from '../mocks/quiz';
import './QuestionPage.css';

const QuestionPage = () => {
  const quizData = mockStartQuizResponse;
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | null>(null);

  return (
    <main className="question-page">
      <div className="question-page__content">
        <QuizProgressHeader progress={quizData.progress} />

        <QuizMetaInfo
          categoryId={quizData.question.categoryId}
          answeredCount={quizData.progress.answeredCount}
          totalQuestionCount={quizData.progress.totalQuestionCount}
        />

        <QuizPromptCard
          phraseText={quizData.question.phraseText}
          targetWord={quizData.question.targetWord}
          translationText={quizData.question.translationText}
        />

        <ChoiceList
          choices={quizData.question.choices}
          selectedChoiceId={selectedChoiceId}
          onSelect={setSelectedChoiceId}
        />
      </div>

      <SubmitAnswerBar isEnabled={selectedChoiceId !== null} />
    </main>
  );
};

export default QuestionPage;
