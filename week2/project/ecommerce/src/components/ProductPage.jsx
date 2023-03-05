import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductPage = () => {
  const params = useParams();
  const id = params.id;
  const url = `https://fakestoreapi.com/products/${id}`;

  const { data, error, isLoading } = useFetch(url);

  return (
    <div className="product-page">
      {isLoading && <h4>Loading...</h4>}

      {error && (
        <h4>
          Error! Probably this product doesn't exists, try other one please.
        </h4>
      )}

      {data && (
        <>
          <h1>{data.title}</h1>
          <div className="product-info">
            <div>
              <p>{data.description}</p>
            </div>
            <img
              className="product--image-big"
              src={data.image}
              alt={data.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
