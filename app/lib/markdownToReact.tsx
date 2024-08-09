import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

export function MarkdownToReact({ markdown } : { markdown: string }) {
  return <Markdown
    children={markdown}
    options={{
      overrides: {
        Link: {
          component: Link
        }
      }
    }} />
}
