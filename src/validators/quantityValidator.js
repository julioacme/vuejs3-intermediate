export default (quantity) => {
  if (!quantity) {
    return 'This field is required'
  }
  return quantity === 0 ? 'You must enter a quantity' : ''
};
