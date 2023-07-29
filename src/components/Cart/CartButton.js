import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { cartAction } from '../../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.cart.totalCartItems)

  const cartHandler = () => {
    dispatch(cartAction.showCart())
  }

  return (
    <button className={classes.button} onClick={()=>cartHandler()}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
