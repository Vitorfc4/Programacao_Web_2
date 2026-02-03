import PostItem from "./PostItem";

export default function PostList({ posts }) {
  return (
    <section className="blog-section">
      <div className="blog-inner">
        <div className="blog-content">
          <h2>Últimas do blog</h2>

          <div className="posts">
            {posts.map((p) => (
              <PostItem key={p.id} title={p.title} subtitle={p.subtitle} />
            ))}
          </div>

          <a className="see-all" href="#">
            Ver tudo
          </a>
        </div>
      </div>
    </section>
  );
}
