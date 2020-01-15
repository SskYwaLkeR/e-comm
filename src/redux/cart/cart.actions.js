import CartAcionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartAcionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartAcionTypes.ADD_ITEM,
  payload: item
});
