import { Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

const Product = ({ id, title, image }) => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="products--item">
      <div className="product">
        <div
          className="product-image--favorite-container"
          onClick={() => toggleFavorite(id)}
        >
          <img
            src={favorites.includes(id) ? heartSolid : heartRegular}
            alt="fav-icon"
          />
        </div>
        <Link to={`/product/${id}`}>
          <img className="product--image" src={image} alt={title} />
          <div className="product--title">{title}</div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
