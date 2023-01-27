import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
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
            navigate("/");
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formvalue ));
        console.log(formvalue);

        let result = await fetch("https://e-commerce-c3eb.onrender.com/register", {
            method: "post",
            body: JSON.stringify(formvalue),

            headers: {
                "content-type": "application/json",
            },
        });

        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        // directlly navigate to home page
        navigate("/");
    };

    return (
        <div>
            <h1 style={{ color: "black", textAlign: "center", marginTop: "30px" }}>
                Register
            </h1>
            <div className="form">
                <form className="form-box" onSubmit={handleSubmit} action="">
                    <input
                        className="input-form-box"
                        value={formvalue.name}
                        onChange={handleChange}
                        required={true}
                        type="text"
                        name="name"
                        id="Name"
                        placeholder="Enter Name"
                    />
                    <input
                        className="input-form-box"
                        value={formvalue.email}
                        onChange={handleChange}
                        required={true}
                        type="email"
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
                    <button className="signup-btn">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
