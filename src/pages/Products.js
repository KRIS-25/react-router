import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {products.map(({ id, name }) => {
          return (
            <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>Read More</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
