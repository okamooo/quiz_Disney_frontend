import HamburgerMenu from './HamburgerMenu';
import HomeHeader from './HomeHeader';
import styles from './CommonHeader.module.css';

interface CommonHeaderProps {
  userId: string;
  userName: string;
  onLogout: () => void;
}

const CommonHeader = ({ userId, userName, onLogout }: CommonHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <HomeHeader userId={userId} userName={userName} />
      </div>
      <div className={styles.menuArea}>
        <HamburgerMenu
          userId={userId}
          userName={userName}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
};

export default CommonHeader;
