import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* デフォルトルートをログイン画面に設定 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* 将来的にダッシュボードなどを追加する場合はここに追加 */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
