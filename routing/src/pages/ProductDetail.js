import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id: productId } = useParams();

  return (
    <>
      <h1>Product details!</h1>
      <p>{productId}</p>
      <Link to="..">Close</Link>
    </>
  );
}
