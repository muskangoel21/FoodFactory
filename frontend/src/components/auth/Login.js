import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    tel: "",
    password: "",
    isFound: false
  });

  const { tel, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/loginForm", {
        tel: formData.tel,
        password: formData.password
      })
      .then(res => {
        if (res.data === "found") {
          setFormData({ ...formData, isFound: true });
        }
        if (res.data === "notfound") {
          alert("Please Check Your Provided Mobile Number or Password");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  if (formData.isFound === true)
    return <Redirect to={{ pathname: "/about" }} />;
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Login in Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Mobile Number"
              name="tel"
              value={tel}
              onChange={e => onChange(e)}
              minLength="10"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};
export default Login;
