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

  if (isLoading) return <h4>Loading...</h4>;
  if (error) return <h4>Error!</h4>;

  let chosenCategoryProducts = data;

  return (
    <div className="products">
      {chosenCategoryProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
