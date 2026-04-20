import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CommonHeader from "../components/CommonHeader";
import ChoiceList from "../components/ChoiceList";
import QuizMetaInfo from "../components/QuizMetaInfo";
import QuizProgressHeader from "../components/QuizProgressHeader";
import QuizPromptCard from "../components/QuizPromptCard";
import SubmitAnswerBar from "../components/SubmitAnswerBar";
import { answerQuiz } from "../api/quiz";
import {
  UserAnswer,
  QuizProgress,
  QuizResult,
  QuizQuestion,
  QuizResultSummary,
} from "../types/question";
import "./QuestionPage.css";

const QuestionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { sessionId, initialQuestion, initialProgress } = location.state || {};

  const [currentQuestion, setCurrentQuestion] =
    useState<QuizQuestion>(initialQuestion);
  const [progress, setProgress] = useState<QuizProgress>(initialProgress);
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showGonPopup, setShowGonPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [answerResult, setAnswerResult] = useState<{
    correctAnswer: string;
    explanation?: string;
    isCorrect: boolean;
    nextQuestion?: QuizQuestion;
    finished: boolean;
    resultSummary?: QuizResultSummary;
  } | null>(null);

  if (!sessionId || !currentQuestion) {
    return (
      <div style={{ color: "white", textAlign: "center", padding: "100px" }}>
        不正なアクセスです。
      </div>
    );
  }

  const correctChoice = currentQuestion.choices.find(
    (choice) => choice.choiceText === answerResult?.correctAnswer,
  );

  const handleAnswer = async () => {
    if (selectedChoiceId === null || isAnswered || isSubmitting) return;

    const selectedChoice = currentQuestion.choices.find(
      (c) => c.choiceId === selectedChoiceId,
    );

    try {
      setIsSubmitting(true);
      const response = await answerQuiz(sessionId, {
        questionId: currentQuestion.questionId,
        action: "ANSWER",
        selectedChoiceText: selectedChoice?.choiceText,
      });

      setAnswerResult({
        correctAnswer: response.correctAnswer,
        explanation: response.explanation,
        isCorrect: response.correct,
        nextQuestion: response.nextQuestion,
        finished: response.finished,
        resultSummary: response.result,
      });

      // Update current question with data from response to show translation/explanation immediately
      const updatedQuestion: QuizQuestion = {
        ...currentQuestion,
        translationText:
          response.translationText || currentQuestion.translationText,
        explanation: response.explanation || currentQuestion.explanation,
      };
      setCurrentQuestion(updatedQuestion);

      const newAnswer: UserAnswer = {
        question: updatedQuestion,
        selectedChoiceId,
        selectedChoiceText: selectedChoice?.choiceText,
        isCorrect: response.correct,
      };

      setUserAnswers((prev) => [...prev, newAnswer]);
      setProgress(response.progress);
      setIsAnswered(true);
    } catch (err) {
      console.error("Answer submission error:", err);
      alert("回答の送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    if (isAnswered || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const response = await answerQuiz(sessionId, {
        questionId: currentQuestion.questionId,
        action: "SKIP",
      });

      setAnswerResult({
        correctAnswer: response.correctAnswer,
        explanation: response.explanation,
        isCorrect: false,
        nextQuestion: response.nextQuestion,
        finished: response.finished,
        resultSummary: response.result,
      });

      // Update current question with data from response
      const updatedQuestion: QuizQuestion = {
        ...currentQuestion,
        translationText:
          response.translationText || currentQuestion.translationText,
        explanation: response.explanation || currentQuestion.explanation,
      };
      setCurrentQuestion(updatedQuestion);

      const newAnswer: UserAnswer = {
        question: updatedQuestion,
        selectedChoiceId: null,
        isCorrect: false,
      };

      setUserAnswers((prev) => [...prev, newAnswer]);
      setProgress(response.progress);
      setIsAnswered(true);
      setSelectedChoiceId(null);
    } catch (err) {
      console.error("Skip error:", err);
      alert("スキップの送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (answerResult?.finished) {
      const summary = answerResult.resultSummary;
      const resultData: QuizResult = {
        totalQuestions:
          summary?.totalQuestionCount || progress.totalQuestionCount,
        correctAnswers:
          summary?.correctCount ??
          userAnswers.filter((a) => a.isCorrect).length,
        userAnswers: userAnswers,
      };
      navigate("/quiz/result", { state: { result: resultData } });
    } else if (answerResult?.nextQuestion) {
      // 9問目から10問目に移動する時にポップアップを表示
      if (answerResult.nextQuestion.currentQuestionNumber === 10) {
        setShowGonPopup(true);
      } else {
        proceedToNext();
      }
    }
  };

  const proceedToNext = () => {
    if (answerResult?.nextQuestion) {
      setCurrentQuestion(answerResult.nextQuestion);
      setIsAnswered(false);
      setSelectedChoiceId(null);
      setAnswerResult(null);
      setShowGonPopup(false);
    }
  };

  return (
    <main className="question-page">
      <CommonHeader />
      <div className="question-page__content">
        <QuizProgressHeader progress={progress} />
        <QuizMetaInfo
          categoryId={currentQuestion.categoryId}
          answeredCount={progress.answeredCount}
          totalQuestionCount={progress.totalQuestionCount}
        />
        <QuizPromptCard
          phraseText={currentQuestion.phraseText}
          targetWord={currentQuestion.targetWord}
          translationText={currentQuestion.translationText}
        />
        <ChoiceList
          choices={currentQuestion.choices}
          selectedChoiceId={selectedChoiceId}
          onSelect={setSelectedChoiceId}
          isAnswered={isAnswered}
          correctChoiceId={correctChoice?.choiceId}
          explanation={answerResult?.explanation}
        />
      </div>
      <SubmitAnswerBar
        isEnabled={selectedChoiceId !== null && !isSubmitting}
        isAnswered={isAnswered}
        onAnswer={handleAnswer}
        onSkip={handleSkip}
        onNext={handleNext}
        isLastQuestion={answerResult?.finished ?? false}
      />

      {/* ゴンの覚悟ポップアップ */}
      {showGonPopup && (
        <div className="gon-popup-overlay">
          <div className="gon-popup">
            <p className="gon-popup__message">
              もうこれで終わってもいい
              <br />
              だからありったけを・ ・・
            </p>
            <button
              type="button"
              className="gon-popup__button"
              onClick={proceedToNext}
            >
              最初はグー
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default QuestionPage;
