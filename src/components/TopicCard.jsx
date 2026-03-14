function TopicCard({ topic, progress, onClick }) {
  return (
    <div
      className="topic-card"
      style={{ '--card-color': topic.color }}
      onClick={onClick}
    >
      <span className="icon">{topic.icon}</span>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <div className="card-footer">
        <span className="section-count">
          {topic.sections.length} lessons &middot; {topic.quiz.length} questions
        </span>
        {progress && (
          <span style={{ color: 'var(--success)' }}>
            {progress.quizScore}/{progress.quizTotal}
          </span>
        )}
      </div>
    </div>
  )
}

export default TopicCard
