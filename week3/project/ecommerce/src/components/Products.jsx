import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Product from './Product';

const Products = () => {
  const params = useParams();
  const chosenCategory = params.category;
  const url = chosenCategory
    ? `https://fakestoreapi.com/products/category/${chosenCategory}`
    : 'https://fakestoreapi.com/products';

  const { data, error, isLoading } = useFetch(url);

  let chosenCategoryProducts = data;

  return (
    <div className="products">
      {isLoading && <h4>Loading...</h4>}

      {error && (
        <h4>
          Error! Probably this product doesn't exists, try other one please.
        </h4>
      )}

      {data &&
        chosenCategoryProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </div>
  );
};

export default Products;
