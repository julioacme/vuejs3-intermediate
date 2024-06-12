export const productById = (state) => (id) => {
  const intID = parseInt(id, 10);
  return state.products.find((product) => product.id === intID);
}
