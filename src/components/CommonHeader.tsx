import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import HomeHeader from './HomeHeader';
import styles from './CommonHeader.module.css';

const CommonHeader = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId') || '';
  const userName = localStorage.getItem('userName') || userId || 'ゲスト';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <HomeHeader userId={userId} userName={userName} />
      </div>
      <div className={styles.menuArea}>
        <HamburgerMenu
          userId={userId}
          userName={userName}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default CommonHeader;
