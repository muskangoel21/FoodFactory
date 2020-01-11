import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
    isnew: false,
    isFound: false
  });
  const { name, email, tel, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) alert("!= password match");
    else {
      axios
        .post("http://localhost:5000/registerForm", {
          name: formData.name,
          email: formData.email,
          tel: formData.tel,
          password: formData.password
        })
        .then(res => {
          if (res.data === "found") {
            alert("user already exists");
            setFormData({ ...formData, isFound: true });
          }
          if (res.data === "Submitted") {
            setFormData({ ...formData, isnew: true });
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  if (formData.isnew === true) return <Redirect to={{ pathname: "/about" }} />;
  if (formData.isFound === true)
    return <Redirect to={{ pathname: "/login" }} />;
  else {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Mobile Number"
                name="tel"
                value={tel}
                onChange={e => onChange(e)}
                minLength="10"
                maxLength="10"
              />
            </div>
            {/* <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small> */}

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
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </section>
      </Fragment>
    );
  }
};
export default Register;
