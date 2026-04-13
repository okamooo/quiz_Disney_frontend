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
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* 蟆・擂逧・↓繝繝・す繝･繝懊・繝峨↑縺ｩ繧定ｿｽ蜉縺吶ｋ蝣ｴ蜷医・縺薙％縺ｫ霑ｽ蜉 */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
