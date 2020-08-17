import axios from "axios";

export default {
  getProducts: async (limit, page) => {
    let data = await axios
      .get(`http://localhost:3001/product?limit=${limit}&page=${page}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return data.products;
  },
};
