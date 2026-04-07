import React from 'react';

interface HomeHeaderProps {
  userId: string;
  userName: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  userId,
  userName,
}) => {
  return (
    <section className="home-card">
      <p className="home-user-id">ユーザーID: {userId}</p>
      <h1 className="home-title">Aloha! {userName} is ohana!</h1>
      <p className="home-subtitle">To infinity...and beyond!</p>
    </section>
  );
};

export default HomeHeader;