import axios from "axios";
import { API_ENDPOINTS } from "./constant";

export const addProduct = (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.post(API_ENDPOINTS.PRODUCT.CREATE , data, {
    headers: { token: `Bearer ${token}` },
  });
};

export const getProducts = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(API_ENDPOINTS.PRODUCT.GETALL, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      callback(res?.data);
    })
    .catch((err) => alert(err?.response?.data?.error?.message));
};

export const deleteProduct = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${API_ENDPOINTS.PRODUCT.DELETE}/${id}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
