import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { register } from "../services/register";
import "../App.css";

export const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      register(values, function (res) {
        console.log("response?.status", res?.status);
        if ([201, 200].includes(res?.status)) {
          navigate("/login");
        }
      });
    },
  });
  return (
    <div className="fullpage">
      <div className="login">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <h1> SignUp User</h1>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">Register</button>
            <button onClick={() => navigate("/login")}>Login Page</button>
          </form>
        </div>
      </div>
    </div>
  );
};
