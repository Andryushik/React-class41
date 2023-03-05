import { Link } from 'react-router-dom';

const Product = ({ id, title, image }) => {
  return (
    <div className="products--item">
      <Link to={`/product/${id}`}>
        <div className="product">
          <img className="product--image" src={image} alt={title} />
          <span className="product--title">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
