import allCategories from '../fake-data/all-categories';
import Category from './Category';

const Categories = ({ chooseCategory, category }) => {
  return (
    <div className="categories">
      {allCategories.map((categoryItem, index) => {
        return (
          <Category
            key={index}
            className={`categories--item ${
              categoryItem === category ? 'categories--item-selected' : ''
            }`}
            chooseCategory={chooseCategory}
            categoryName={categoryItem}
          />
        );
      })}
    </div>
  );
};

export default Categories;
