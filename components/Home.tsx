import Nav from "./Nav";
import { product } from "../mock_data/mockProduct";

export default function Home() {
  return (
    <>
      <Nav product={product} />


      {/* Body conent - image + product description */}
      <div className="container mx-auto p-5">
        <div className="columns-xs">
          <div className="card">
            <img src={product.imageLink} alt="" />

            {/* Product title, description, etc. */}
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>

              <p className="text-lg font-bold">${product.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
