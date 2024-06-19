export const setProducts = (state, products) => {
  state.products = products
}

export const addItemToCart = (state, product) => {
  state.itemsInCart.push(product)
}

export const deleteItemFromCart = (state, itemId) => {
  state.itemsInCart = state.itemsInCart.filter( (item) => item.id !== itemId )
}
