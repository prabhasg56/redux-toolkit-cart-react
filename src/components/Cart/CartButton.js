import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.cart.totalCartItems)

  const cartHandler = () => {
    dispatch(uiAction.showCart())
  }

  return (
    <button className={classes.button} onClick={()=>cartHandler()}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
