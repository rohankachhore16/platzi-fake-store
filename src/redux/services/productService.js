import Axios from "axios";
import { METHODS, SERVICE_ROUTE } from "../constant/serviceConstant";
// Get Product Details
export function productService(data) {
  const {pagination} = data;
  console.log(pagination,"_______________get product service")
  return new Promise((resolve, reject) => {
    let config = {
      url: `${SERVICE_ROUTE.PRODUCT}?offset=${(pagination-1)*10}&limit=10`,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
