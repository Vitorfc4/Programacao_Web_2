export default function PostItem({ title, subtitle }) {
  return (
    <article className="post">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}
