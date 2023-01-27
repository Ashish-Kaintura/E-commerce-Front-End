import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formvalue, setFormValue] = useState({});
  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormValue((values) => ({ ...values, [id]: value }));
  };
  //for navigate after signup
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      // navigate('/')
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formvalue ));
    // console.log(formvalue);

    let result = await fetch("https://e-commerce-c3eb.onrender.com/login", {
      method: "post",
      body: JSON.stringify(formvalue),

      headers: {
        "content-type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    if (result.Name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("worng value");
    }
  };

  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "30px" }}>
        Login
      </h1>
      <div className="form">
        <form className="form-box" onSubmit={handleLogin} action="">
          <input
            className="input-form-box"
            value={formvalue.email}
            onChange={handleChange}
            required={true}
            type="email
                    "
            name="email"
            id="Email"
            placeholder="Enter mail"
          />
          <input
            className="input-form-box"
            value={formvalue.password}
            onChange={handleChange}
            required={true}
            type="password"
            placeholder="Enter Password"
            name="password"
            id="Password"
          />
          <button className="signup-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
