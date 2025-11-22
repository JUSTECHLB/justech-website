import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPost {
  title: string
  date: string
  image: string
  category: string
  readTime: string
  content: string
  excerpt: string
  featured?: boolean
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/blog")
  const files = fs.readdirSync(postsDir)
  return files.map((file) => ({ slug: file.replace(/\.md$/, "") }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.md`)
  const file = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(file)

  const post = { ...data, content } as BlogPost

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0D0D12] to-[#0A0A0A] pt-24 pb-20 relative overflow-hidden">
     <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

      <div className="mb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
    
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            {post.title}
          </h1>


          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex justify-center flex-wrap items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              <time className="font-medium">{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              <span className="font-medium">{post.readTime}</span>
            </div>
            {post.featured && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="font-medium text-blue-400">Featured</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {post.image && (
        <div className="max-w-5xl mx-auto px-6 py-12 fade-up relative z-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 group">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <p className="text-white/80 text-sm text-center">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 pb-32 space-y-10 fade-up relative z-10">
        <article className="prose-custom-enhanced">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-blue-400 mb-6 mt-12 first:mt-0 border-l-4 border-blue-400 pl-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-white mb-4 mt-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-300 bg-blue-500/5 py-4 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="space-y-3 my-6">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-blue-300">
                  {children}
                </strong>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  )
}