import Axios from "axios";
import { METHODS, SERVICE_ROUTE } from "../constant/serviceConstant";

export function LoginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.LOGIN,
      method: METHODS.POST,
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
