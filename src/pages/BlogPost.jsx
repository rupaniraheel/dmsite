import { useParams, Link } from 'react-router-dom'
import posts from '../data/blogPosts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <h2>Post not found</h2>
          <Link to="/blog" className="btn ghost">Back to Blog</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container blog-post">
        <span className="badge">{post.category}</span>
        <h1 className="hero-title">{post.title}</h1>
        <div className="blog-meta">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>D Matrix Solutions</span>
        </div>
        {post.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        <div style={{ marginTop: 24 }}>
          <Link to="/blog" className="btn ghost">Back to Blog</Link>
        </div>
      </div>
    </section>
  )
}
