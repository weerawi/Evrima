import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const { slug } = useParams();
  // Fetch the product details using the slug from the API or your data source

  return (
    <div>
      {/* Product details content */}
    </div>
  );
};

export default CardDetails;