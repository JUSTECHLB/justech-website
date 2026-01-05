import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

function getAllPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), "content/blog")
  if (!fs.existsSync(postsDir)) {
    return []
  }
  
  const files = fs.readdirSync(postsDir)

  return files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "")
      const content = fs.readFileSync(path.join(postsDir, file), "utf8")
      const { data } = matter(content)
      return { slug, ...data } as BlogPost
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = getAllPosts()
  const selectedCategory = searchParams.category as string || "All"
  const categories = ["All", ...new Set(posts.map(post => post.category))]
  const filteredPosts = selectedCategory === "All" ? posts : posts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-dark pb-20 relative overflow-hidden">

      <main className="max-w-7xl mx-auto px-6 pt-4 pb-12 relative z-10">
        <h1 className="mb-12 text-center">
            <span className="text-5xl sm:text-6xl md:text-7xl tracking-tight text-white">JUSTECH</span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-blue-400"> Blog</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category}
              href={category === "All" ? "/blog" : `/blog?category=${category}`}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#3B9EFF] text-white  shadow-blue-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#121218]/70 backdrop-blur-sm border border-white/10 hover:border-[#3B9EFF]/50 rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(59,158,255,0.15)] transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-white/40 mb-3">
                  <span className="text-[#3B9EFF] font-semibold tracking-wide uppercase text-xs">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-white group-hover:text-[#3B9EFF] transition-colors leading-snug mb-2">
                  {post.title}
                </h2>

                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <time className="text-xs text-white/40 mt-4 block">
                  {post.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}