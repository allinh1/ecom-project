import styles from "./AddToCart.module.scss";

const AddToCartButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartButton