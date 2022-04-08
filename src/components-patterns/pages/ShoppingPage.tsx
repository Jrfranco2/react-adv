import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
