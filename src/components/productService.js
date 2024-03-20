// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://20.244.56.144/prodocts/companies/:companyname/categories/:catagoryname/products';

const productService = {
  getTopProducts: async (companyName, categoryName, topCount, minPrice, maxPrice) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          companyname: companyName,
          catagoryname: categoryName,
          top: topCount,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top products:', error);
      return [];
    }
  },
};

export default productService;
