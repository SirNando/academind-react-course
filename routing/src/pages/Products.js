import { Link, Outlet } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "product-1",
    title: "Product 1",
  },
  {
    id: "product-2",
    title: "Product 2",
  },
  {
    id: "product-3",
    title: "Product 3",
  },
];

export default function Products() {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
