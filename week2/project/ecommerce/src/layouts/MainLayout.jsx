import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

const MainLayout = () => {
  return (
    <>
      <h1>Products</h1>
      <Categories />
      <Outlet />
    </>
  );
};

export default MainLayout;
