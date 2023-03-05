const Category = ({ categoryName, index }) => {
  return (
    <div key={index} className="categories--item">
      {categoryName}
    </div>
  );
};

export default Category;
