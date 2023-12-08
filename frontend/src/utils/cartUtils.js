export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  // save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
