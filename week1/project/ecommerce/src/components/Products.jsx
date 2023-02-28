import Product from './Product';
import allProducts from '../fake-data/all-products';

const Products = ({ category }) => {
  let filteredProducts = allProducts;
  if (category !== 'all') {
    filteredProducts = allProducts.filter((product) => {
      return `FAKE: ${product.category}` === category;
    });
  }

  return (
    <div className="products">
      {filteredProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
