import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './layouts/GlobalLayout';
import MainLayout from './layouts/MainLayout';
import ProductPage from './components/ProductPage';
import Products from './components/Products';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import { FavoritesProvider } from './components/FavoritesContext';
import './App.css';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className="App">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<GlobalLayout />}>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Products />} />
                <Route path="products/:category" element={<Products />} />
              </Route>
              <Route path="favorites" element={<Favorites />} />
              <Route path="product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
