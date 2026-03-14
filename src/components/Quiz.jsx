import { useState } from 'react'

function Quiz({ questions, topicId, onComplete }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const question = questions[currentQ]

  const handleSelect = (index) => {
    if (selected !== null) return
    setSelected(index)
    setAnswers((prev) => [...prev, index === question.answer])
  }

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ((prev) => prev + 1)
      setSelected(null)
    } else {
      const score = [...answers].filter(Boolean).length
      onComplete(topicId, score, questions.length)
      setShowResults(true)
    }
  }

  const handleRetry = () => {
    setCurrentQ(0)
    setSelected(null)
    setAnswers([])
    setShowResults(false)
  }

  if (showResults) {
    const score = answers.filter(Boolean).length
    const pct = Math.round((score / questions.length) * 100)
    const scoreClass = pct >= 80 ? 'excellent' : pct >= 50 ? 'good' : 'needs-work'

    return (
      <div className="quiz-results">
        <h3>Quiz Complete!</h3>
        <div className={`score ${scoreClass}`}>{pct}%</div>
        <p>
          You got {score} out of {questions.length} questions correct.
          {pct >= 80
            ? ' Excellent work!'
            : pct >= 50
              ? ' Good effort — review the material and try again.'
              : ' Keep studying — you\'ll get there!'}
        </p>
        <button onClick={handleRetry}>Try Again</button>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>Knowledge Check</h3>
        <span className="quiz-progress">
          Question {currentQ + 1} of {questions.length}
        </span>
      </div>

      <div className="quiz-question">
        <h4>{question.question}</h4>
        <div className="quiz-options">
          {question.options.map((option, i) => {
            let className = 'quiz-option'
            if (selected !== null) {
              if (i === question.answer) className += ' correct'
              else if (i === selected) className += ' incorrect'
            }
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
              >
                {option}
              </button>
            )
          })}
        </div>
        {selected !== null && (
          <div className="quiz-explanation">
            {question.explanation}
          </div>
        )}
      </div>

      <div className="quiz-nav">
        <div />
        <button onClick={handleNext} disabled={selected === null}>
          {currentQ + 1 < questions.length ? 'Next Question' : 'See Results'}
        </button>
      </div>
    </div>
  )
}

export default Quiz
