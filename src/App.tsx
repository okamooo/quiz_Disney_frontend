import { useEffect, useState } from 'react'
import './App.css'

// データの型を定義（Javaエンジニアなら型定義は必須！）
interface Quiz {
  id: number;
  question: string;
  answer: string;
}

function App() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    // Spring BootのAPIを叩く
    fetch('http://localhost:8080/api/v1/quiz/test')
      .then(res => res.json())
      .then(data => setQuiz(data))
      .catch(err => console.error("通信エラー:", err));
  }, []);

  return (
    <div className="App">
      <h1>Quiz App Test</h1>
      {quiz ? (
        <div className="quiz-card">
          <p><strong>問題:</strong> {quiz.question}</p>
          <p><strong>答え:</strong> {quiz.answer}</p>
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  )
}

export default App