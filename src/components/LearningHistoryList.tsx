import { LearningHistory } from "../types/home";

interface LearningHistoryListProps {
  learningHistories: LearningHistory[];
}

const formatPlayedAt = (playedAt: string) => {
  return new Date(playedAt).toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const LearningHistoryList = ({
  learningHistories,
}: LearningHistoryListProps) => {
  return (
    <section className="home-card">
      <div className="home-section-header">
        <h2>学習履歴</h2>
        <p>これまでの学習結果を一覧で確認できます。</p>
      </div>

      <div className="history-list">
        {learningHistories.map((learningHistory) => (
          <article key={learningHistory.historyId} className="history-item">
            <div className="history-row">
              <span className="history-label">学習日時</span>
              <span>{formatPlayedAt(learningHistory.playedAt)}</span>
            </div>
            <div className="history-grid">
              <div>
                <p className="history-label">回答数</p>
                <p>{learningHistory.solvedCount}問</p>
              </div>
              <div>
                <p className="history-label">正解数</p>
                <p>{learningHistory.correctCount}問</p>
              </div>
              <div>
                <p className="history-label">不正解数</p>
                <p>{learningHistory.incorrectCount}問</p>
              </div>
              <div>
                <p className="history-label">正答率</p>
                <p>{learningHistory.accuracyRate}%</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearningHistoryList;
