import { useFavorites } from './FavoritesContext';
import Products from './Products';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <h1>Favorites</h1>
      {!favorites.length ? (
        <div>You haven't chosen any favorites yet!</div>
      ) : (
        <Products />
      )}
    </>
  );
};

export default Favorites;
