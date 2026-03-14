function ProgressPage({ topics, progress }) {
  const totalTopics = topics.length
  const completedTopics = Object.keys(progress).length

  return (
    <div className="progress-page">
      <h2>Your Progress</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
        {completedTopics} of {totalTopics} topic quizzes attempted
      </p>

      <div className="progress-grid">
        {topics.map((topic) => {
          const p = progress[topic.id]
          const pct = p ? Math.round((p.quizScore / p.quizTotal) * 100) : 0
          const barColor = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : pct > 0 ? 'var(--error)' : 'var(--border)'

          return (
            <div key={topic.id} className="progress-card">
              <h4>
                <span>{topic.icon}</span> {topic.title}
              </h4>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${pct}%`, background: barColor }}
                />
              </div>
              <div className="progress-stats">
                <span>
                  {p ? `${p.quizScore}/${p.quizTotal} correct` : 'Not attempted'}
                </span>
                <span>
                  {p ? `${pct}%` : '—'}
                </span>
              </div>
              {p && (
                <div className="progress-stats" style={{ marginTop: 4 }}>
                  <span>Attempts: {p.attempts}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressPage
