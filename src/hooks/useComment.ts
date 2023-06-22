import { useEffect, useRef, useState } from 'react'
import { useTheme } from './useTheme'

export function useComment(commentNodeId: string) {
  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const commentTheme = theme === 'light' ? 'github-light' : 'github-dark'

  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.setAttribute('repo', 'Seobe95/Seobe.dev')
    scriptElement.setAttribute('issue-term', 'pathname')
    scriptElement.setAttribute('label', 'Comment')
    scriptElement.setAttribute('theme', commentTheme)
    scriptElement.setAttribute('crossorigin', 'anonymous')
    scriptElement.async = true

    const comments = document.getElementById(commentNodeId)
    if (comments && comments.children.length < 1) {
      ref.current?.appendChild(scriptElement)
    } 
  }, [commentNodeId, theme])

  return { ref }
}
