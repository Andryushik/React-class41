import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <h1>Not Found</h1>
      <button onClick={goBack}>Go Back</button>
    </>
  );
};

export default NotFound;
