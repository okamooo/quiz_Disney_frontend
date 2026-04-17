import { useLocation, useNavigate } from 'react-router-dom';
import { QuizResult } from '../types/question';
import './QuizResultPage.css';

const QuizResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 遷移元 (QuestionPage) から渡された結果データを取得
  const result = location.state?.result as QuizResult;

  // データがない場合はホームへリダイレクト
  if (!result) {
    return (
      <main className="quiz-result-page">
        <div className="quiz-result-page__content" style={{ textAlign: 'center', paddingTop: '100px' }}>
          <p style={{ color: '#5f7a87', marginBottom: '24px' }}>結果データが見つかりませんでした。</p>
          <button 
            className="quiz-result-actions__button"
            style={{ width: 'auto', padding: '12px 24px' }}
            onClick={() => navigate('/home')}
          >
            ホームに戻る
          </button>
        </div>
      </main>
    );
  }

  const accuracy = Math.round((result.correctAnswers / result.totalQuestions) * 100);

  return (
    <main className="quiz-result-page">
      <div className="quiz-result-page__content">
        <header className="quiz-result-header">
          <h1 className="quiz-result-header__title">クイズ完了！</h1>
          <div className="quiz-result-summary">
            <div className="quiz-result-summary__score">
              <span className="quiz-result-summary__label">正答率</span>
              <span className="quiz-result-summary__value">{accuracy}%</span>
            </div>
            <div className="quiz-result-summary__detail">
              {result.totalQuestions}問中 {result.correctAnswers}問正解
            </div>
          </div>
        </header>

        <section className="quiz-result-list">
          <h2 className="quiz-result-list__title">今回の振り返り</h2>
          {result.userAnswers.map((answer, index) => (
            <div key={index} className={`quiz-result-item ${answer.isCorrect ? 'is-correct' : 'is-incorrect'}`}>
              <div className="quiz-result-item__header">
                <span className={`quiz-result-item__badge ${answer.isCorrect ? 'is-correct' : 'is-incorrect'}`}>
                  {answer.isCorrect ? '正解' : '不正解'}
                </span>
                <span className="quiz-result-item__number">問題 {index + 1}</span>
              </div>
              
              <div className="quiz-result-item__body">
                <p className="quiz-result-item__phrase">{answer.question.phraseText}</p>
                {answer.question.translationText && (
                  <p className="quiz-result-item__translation">
                    <span className="label">和訳：</span>
                    {answer.question.translationText}
                  </p>
                )}
                
                <div className="quiz-result-item__details">
                  <div className="quiz-result-item__answer">
                    <span className="label">正解:</span>
                    <span className="value">{answer.question.targetWord}</span>
                  </div>
                  
                  {answer.question.explanation && (
                    <div className="quiz-result-item__explanation">
                      <span className="label">解説:</span>
                      <p className="text">{answer.question.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="quiz-result-actions">
          <button 
            className="quiz-result-actions__button"
            onClick={() => navigate('/home')}
          >
            ホームに戻る
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuizResultPage;
