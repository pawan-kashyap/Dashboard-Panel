import axios from "axios";
import { BASE_URL, API_ENDPOINTS } from "./constant";

export const register = (data, callback) => {
  axios
    .post(API_ENDPOINTS.USER.REGISTER, data)
    .then((response) => {
      callback(response);
    })
    .catch((error) => alert(error.message));
};
