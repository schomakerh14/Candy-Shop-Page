let productService = {
  allProducts: [
    {
      "productId": 1,
      "productSku": "STL-023",
      "name": "Strawberry Lollipop",
      "description": "Strawberry flavored lollipop",
      "price": 1.00,
      "imageName": "img/pinklollipop.png"
    },
    {
      "productId": 2,
      "productSku": "CHD-001",
      "name": "Cherry Hard Candy",
      "description": "Cherry flavored hard candy",
      "price": 0.50,
      "imageName": "img/redcandy.jpeg"
    },
    {
      "productId": 3,
      "productSku": "GSL-256",
      "name": "Grape Swirl Lollipop",
      "description": "Grape flavored swirl lollipop",
      "price": 1.00,
      "imageName": "img/purpleswirllollipop.jpeg"
    },
    {
      "productId": 4,
      "productSku": "BRC-978",
      "name": "Blue Raspberry Hard Candy",
      "description": "Blue raspberry flavored hard candy",
      "price": 0.50,
      "imageName": "img/bluecandy.jpeg"
    },
    {
      "productId": 5,
      "productSku": "CTC-235",
      "name": "Cotton Candy",
      "description": "Cotton candy",
      "price": 2.00,
      "imageName": "img/cottoncandy.jpeg"
    },
    {
      "productId": 6,
      "productSku": "CKP-928",
      "name": "Cake Pop",
      "description": "Cake pop with sprinkles",
      "price": 3.00,
      "imageName": "img/cakepop.jpeg"
    },
    {
      "productId": 7,
      "productSku": "RSL-612",
      "name": "Raspberry Swirl Lollipop",
      "description": "Raspberry flavored swirl lollipop",
      "price": 1.00,
      "imageName": "img/pinkswirllollipop.jpeg"
    }
  ],

  getProducts() {
    return this.allProducts;
  },

  getProductById(id){
    return this.allProducts[id-1];
  },

  searchProducts(searchTerm) {
    return this.allProducts.filter((product) => product.name.toUpperCase().includes(searchTerm.toUpperCase()));
  }

};
