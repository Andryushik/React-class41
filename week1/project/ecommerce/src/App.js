import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  const [category, setCategory] = useState('all');

  function chooseCategory(categoryName) {
    if (categoryName === category) {
      setCategory('all');
    } else {
      setCategory(categoryName);
    }
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories chooseCategory={chooseCategory} category={category} />
      <Products category={category} />
    </div>
  );
}

export default App;
