function renderMarkdown(text) {
  const lines = text.split('\n')
  const elements = []
  let currentList = []
  let listType = null
  let key = 0

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++}>
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      )
      currentList = []
      listType = null
    }
  }

  const formatInline = (str) => {
    return str
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      continue
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const content = trimmed.slice(2)
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      currentList.push(content)
      continue
    }

    const numMatch = trimmed.match(/^(\d+)\.\s+/)
    if (numMatch) {
      const content = trimmed.slice(numMatch[0].length)
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      currentList.push(content)
      continue
    }

    flushList()

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <h3 key={key++}>{trimmed.slice(2, -2)}</h3>
      )
    } else {
      elements.push(
        <p key={key++} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
      )
    }
  }

  flushList()
  return elements
}

function SectionContent({ section }) {
  return (
    <div className="section-content">
      <div className="rendered-content">
        {renderMarkdown(section.content)}
      </div>
    </div>
  )
}

export default SectionContent
