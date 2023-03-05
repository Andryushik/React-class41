import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductPage = () => {
  const params = useParams();
  const id = params.id;
  const url = `https://fakestoreapi.com/products/${id}`;

  const { data, error, isLoading } = useFetch(url);

  if (isLoading) return <h4>Loading...</h4>;
  if (error)
    return (
      <h4>
        Error! Probably this product doesn't exists, try other one please.
      </h4>
    );
  const { title, description, image } = data;

  return (
    <div className="product-page">
      <h1>{title}</h1>
      <div className="product-info">
        <div>
          <p>{description}</p>
        </div>
        <img className="product--image-big" src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProductPage;
