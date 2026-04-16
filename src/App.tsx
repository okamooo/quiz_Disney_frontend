import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from './pages/HomePage';
import QuizStartPage from './pages/QuizStartPage';
import QuestionPage from './pages/QuestionPage';
import QuizResultPage from './pages/QuizResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quiz/start" element={<QuizStartPage />} />
          <Route path="/quiz/question" element={<QuestionPage />} />
          <Route path="/quiz/result" element={<QuizResultPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* 将来的にダッシュボードなどを追加する場合はここに追加 */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;