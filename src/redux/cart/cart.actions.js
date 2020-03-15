import CartAcionTypes from "./cart.types";
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartAcionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartAcionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartAcionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
