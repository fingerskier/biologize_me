import { useState } from 'react'
import Quiz from './Quiz'
import SectionContent from './SectionContent'

function TopicDetail({ topic, onBack, onQuizComplete }) {
  const [activeTab, setActiveTab] = useState(0)
  const isQuizTab = activeTab === topic.sections.length

  return (
    <div className="topic-detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back to Topics
      </button>

      <div className="topic-header">
        <h2>
          <span>{topic.icon}</span>
          {topic.title}
        </h2>
        <p>{topic.description}</p>
      </div>

      <nav className="tab-nav">
        {topic.sections.map((section, i) => (
          <button
            key={i}
            className={activeTab === i ? 'active' : ''}
            onClick={() => setActiveTab(i)}
          >
            {section.title}
          </button>
        ))}
        <button
          className={isQuizTab ? 'active' : ''}
          onClick={() => setActiveTab(topic.sections.length)}
        >
          Quiz
        </button>
      </nav>

      {!isQuizTab && (
        <SectionContent section={topic.sections[activeTab]} />
      )}

      {isQuizTab && (
        <Quiz
          questions={topic.quiz}
          topicId={topic.id}
          onComplete={onQuizComplete}
        />
      )}
    </div>
  )
}

export default TopicDetail
