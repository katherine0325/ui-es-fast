"use client"

import { useEffect, useRef } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function MarkdownRenderer({ content }) {
  const contentRef = useRef(null)

  // Add IDs to headings for anchor links
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
      headings.forEach((heading) => {
        const id = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
        heading.id = id
      })
    }
  }, [content])

  return (
    <div
      ref={contentRef}
      className="prose prose-invert max-w-none prose-headings:border-b prose-headings:border-slate-700 prose-headings:pb-2 prose-headings:mb-4 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          // Add custom styling for other elements if needed
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold border-b border-slate-700 pb-2 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold border-b border-slate-700 pb-2 mb-4 mt-8" {...props} />
          ),
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-4" {...props} />,
          a: ({ node, ...props }) => <a className="text-cyan-400 no-underline hover:underline" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-slate-600 pl-4 italic text-slate-300" {...props} />
          ),
          img: ({ node, ...props }) => <img className="w-[60%] mx-auto my-6 shadow-md rounded" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
