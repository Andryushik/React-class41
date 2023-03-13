import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useFavorites } from './FavoritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

const ProductPage = () => {
  const params = useParams();
  const id = params.id;
  const url = `https://fakestoreapi.com/products/${id}`;

  const { data, error, isLoading } = useFetch(url);
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      {isLoading && <h4>Loading...</h4>}

      {error && (
        <h4>
          Error! Probably this product doesn't exists, try other one please.
        </h4>
      )}

      {data && (
        <>
          <h1>{data.title}</h1>
          <div className="product-page">
            <div
              className="product-image--favorite-container"
              onClick={() => toggleFavorite(data.id)}
            >
              <img
                src={favorites.includes(data.id) ? heartSolid : heartRegular}
                alt="fav-icon"
              />
            </div>

            <div className="product-info">
              <div>
                <p>{data.description}</p>
              </div>
              <img
                className="product--image-big"
                src={data.image}
                alt={data.title}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
