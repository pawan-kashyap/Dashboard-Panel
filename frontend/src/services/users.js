import axios from "axios";
import { API_ENDPOINTS} from "./constant";

export const getUsers = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(API_ENDPOINTS.USER.GETALL, { headers: { token: `Bearer ${token}` } })
    .then((res) => {
      callback(res);
    })
    .catch((error) => alert(error?.response?.data?.error?.message));
};

export const getUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.get(`${API_ENDPOINTS.USER.GET}/${id}`, {
    headers: { token: `Bearer ${token}` },
  });
};

export const updateUser = (id,data,cb) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .put(`${API_ENDPOINTS.USER.CREATE}/${id}`,data, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => cb(res?.data))
    .catch((err) => alert(err));
};

export const deleteUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${API_ENDPOINTS.USER.DELETE}/${id}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then()
    .catch((err) => alert(err));
};