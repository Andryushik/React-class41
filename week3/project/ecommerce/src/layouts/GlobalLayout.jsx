import { Outlet, Link } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <>
      <div className="menu-links">
        <Link to="/">Products</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
