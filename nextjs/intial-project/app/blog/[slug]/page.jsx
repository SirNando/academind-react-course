export default function BlogPost({ params }) {
  return (
    <main>
      <h1>Blog posts</h1>
      <p>This post has the ID {params.slug}</p>
    </main>
  );
}
