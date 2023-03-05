import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Category from './Category';

const Categories = () => {
  const url = 'https://fakestoreapi.com/products/categories';
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) return <h4>Loading...</h4>;
  if (error) return <h4>Error!</h4>;

  return (
    <nav className="categories">
      {data.map((category, index) => {
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
