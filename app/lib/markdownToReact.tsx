import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export function MarkdownToReact({ markdown } : { markdown: string }) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>; 
}
