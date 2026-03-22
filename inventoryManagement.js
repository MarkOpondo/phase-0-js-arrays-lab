// Write your code here
// Create a products array with string values
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

// Function to get the first item in the array
const logFirstProduct = () => {
  let firstProduct = products[0]
  console.log(firstProduct) // Console log the details of the first product
  return firstProduct
}

// Function to update an item in the array 
const updateProductName = (index, name) => {
  // products.splice(index, 1, name)
  products[index] = name
  console.log(products)
}

logFirstProduct()
updateProductName(0, "Table")


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
