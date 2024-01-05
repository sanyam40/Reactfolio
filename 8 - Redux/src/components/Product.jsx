import { useDispatch } from "react-redux";
import { add } from "../redux/Slices/CartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p>{product.price}</p>
      </div>
      <button onClick={() => dispatch(add(product))}>Add To Cart</button>
    </div>
  );
};

export default Product;
