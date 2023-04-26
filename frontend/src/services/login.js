import axios from "axios";
import { BASE_URL , API_ENDPOINTS} from "./constant";

export const login = (data, callback) => {
  axios
    .post(API_ENDPOINTS.USER.LOGIN, data)
    .then((response) => {
      localStorage.setItem("User", JSON.stringify(response?.data));
      localStorage.setItem("token", JSON.stringify(response?.data?.accessToken));
      callback(response);
    })
    .catch((error) => alert(error?.response?.data?.error?.message));
};
