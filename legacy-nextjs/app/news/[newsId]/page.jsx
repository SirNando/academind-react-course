export default function NewsDetails({ params }) {
  return (
    <>
      <h1>The details page</h1>
      <h2>{params.newsId}</h2>
    </>
  );
}
