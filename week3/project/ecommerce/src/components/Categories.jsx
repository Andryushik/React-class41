import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Category from './Category';

const Categories = () => {
  const url = 'https://fakestoreapi.com/products/categories';
  const { data, error, isLoading } = useFetch(url);

  return (
    <nav className="categories">
      {isLoading && <h4>Loading...</h4>}

      {error && (
        <h4>
          Error! Probably this product doesn't exists, try other one please.
        </h4>
      )}

      {data &&
        data.map((category, index) => {
          return (
            <NavLink key={index} to={`products/${category}`}>
              <Category index={index} categoryName={category} />
            </NavLink>
          );
        })}
    </nav>
  );
};

export default Categories;
