import { useState, useEffect } from 'react'
import topics from './data/topics'
import TopicCard from './components/TopicCard'
import TopicDetail from './components/TopicDetail'
import ProgressPage from './components/ProgressPage'
import './App.css'

function App() {
  const [view, setView] = useState('home')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('biologize-progress')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('biologize-progress', JSON.stringify(progress))
  }, [progress])

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setView('topic')
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setView('home')
    setSelectedTopic(null)
  }

  const handleQuizComplete = (topicId, score, total) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: {
        quizScore: score,
        quizTotal: total,
        completedAt: new Date().toISOString(),
        attempts: (prev[topicId]?.attempts || 0) + 1,
      },
    }))
  }

  return (
    <>
      <header className="app-header">
        <h1 onClick={() => { setView('home'); setSelectedTopic(null) }}>
          <span>🧬</span> Biologize Me
        </h1>
        <nav className="header-nav">
          <button
            className={view === 'home' ? 'active' : ''}
            onClick={() => { setView('home'); setSelectedTopic(null) }}
          >
            Topics
          </button>
          <button
            className={view === 'progress' ? 'active' : ''}
            onClick={() => setView('progress')}
          >
            Progress
          </button>
        </nav>
      </header>

      <main className="main-content">
        {view === 'home' && (
          <>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>
                Advanced Biology
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Master university-level biology with in-depth lessons and challenging quizzes.
              </p>
            </div>
            <div className="topic-grid">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  progress={progress[topic.id]}
                  onClick={() => handleTopicSelect(topic)}
                />
              ))}
            </div>
          </>
        )}

        {view === 'topic' && selectedTopic && (
          <TopicDetail
            topic={selectedTopic}
            onBack={handleBack}
            onQuizComplete={handleQuizComplete}
          />
        )}

        {view === 'progress' && (
          <ProgressPage topics={topics} progress={progress} />
        )}
      </main>

      <footer className="app-footer">
        Biologize Me — Advanced Biology Learning
      </footer>
    </>
  )
}

export default App
