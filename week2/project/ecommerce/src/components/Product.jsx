import { Link } from 'react-router-dom';

const Product = ({ id, title, image }) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="product">
          <img className="product--image" src={image} alt={title} />
          <span className="product--title">{title}</span>
        </div>
      </Link>
    </>
  );
};

export default Product;
