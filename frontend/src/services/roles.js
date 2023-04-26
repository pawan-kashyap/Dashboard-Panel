import axios from "axios";
import { BASE_URL, API_ENDPOINTS } from "./constant";

export const addRoles = (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.post(API_ENDPOINTS.ROLE.CREATE, data, {
    headers: { token: `Bearer ${token}` },
  });
};

export const getRoles = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(API_ENDPOINTS.ROLE.GETALL, {
      headers: { token: `Bearer ${token}`},
    })
    .then((res) => {
      callback(res?.data);
    })
    .catch((err) => alert(err?.response?.data?.error?.message));
};

export const deleteRoles = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${API_ENDPOINTS.ROLE.DELETE}/${id}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
