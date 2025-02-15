import { mockProductInterface } from "../mock_data/mockProduct";

export default function Nav({product}: {product: mockProductInterface}) {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a href="" className="btn btn-ghost text-xl">
        {product.name}
      </a>
    </div>
  );
}
