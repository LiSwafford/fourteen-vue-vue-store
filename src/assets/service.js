import axios from "axios";

export default {
  getProducts() {
    return axios
      .get("https://practiceapi.devmountain.com/products")
      .then(res => {
        this.products = res.data;
        return res.data;
      });
  },
  getProduct(id) {
    return new Promise(res => res(this.products.find(c => c.id == id)));
  }
};
