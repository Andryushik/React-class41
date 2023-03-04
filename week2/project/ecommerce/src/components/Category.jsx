const Category = ({ className, chooseCategory, categoryName }) => {
  return (
    <div className={className} onClick={() => chooseCategory(categoryName)}>
      {categoryName}
    </div>
  );
};

export default Category;
