import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";

import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleToggleCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
