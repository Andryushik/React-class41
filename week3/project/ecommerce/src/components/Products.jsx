import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useFavorites } from './FavoritesContext';
import Product from './Product';

const Products = () => {
  const params = useParams();
  let location = useLocation();
  const chosenCategory = params.category;

  const url = chosenCategory
    ? `https://fakestoreapi.com/products/category/${chosenCategory}`
    : 'https://fakestoreapi.com/products';

  const { data, error, isLoading } = useFetch(url);
  const { favorites } = useFavorites();

  let filteredProducts;

  if (data) {
    if (location.pathname === '/favorites') {
      filteredProducts = data.filter((product) =>
        favorites.includes(product.id),
      );
    } else {
      filteredProducts = data;
    }
  }

  return (
    <div className="products">
      {isLoading && <h4>Loading...</h4>}

      {error && (
        <h4>
          Error! Probably this product doesn't exists, try other one please.
        </h4>
      )}

      {data &&
        filteredProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </div>
  );
};

export default Products;
