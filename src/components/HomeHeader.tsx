import styles from './HomeHeader.module.css';

interface HomeHeaderProps {
  userId: string;
  userName: string;
}

const HomeHeader = ({ userId, userName }: HomeHeaderProps) => {
  return (
    <div className={styles.content}>
      <p className={styles.userId}>ユーザーID: {userId}</p>
      <h1 className={styles.title}>Aloha! {userName} is ohana! 🌺</h1>
    </div>
  );
};

export default HomeHeader;
