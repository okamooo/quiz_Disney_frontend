import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  userId: string;
  userName: string;
  onLogout: () => void;
}

const HamburgerMenu = ({ userId, userName, onLogout }: HamburgerMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    onLogout();
  };

  return (
    <div className={styles.menuWrapper}>
      <button
        type="button"
        className={`${styles.button} ${isMenuOpen ? styles.open : ''}`}
        onClick={handleToggle}
        aria-expanded={isMenuOpen}
        aria-label="メニューを開く"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {isMenuOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <p className={styles.label}>ログインユーザー</p>
            <p className={styles.value}>
              {userName}({userId})
            </p>
          </div>
          <hr className={styles.divider} />
          <button
            type="button"
            className={styles.menuItem}
            onClick={handleLogoutClick}
          >
            ログアウト
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
