import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [Name, setName] = useState('')
    const [Price, setprice] = useState('')
    const [Category, setCategory] = useState('')
    const [Company, setCompany] = useState('')
     const navigate =useNavigate();



    const handleAdd = async (event) => {
        event.preventDefault();

        // alert(JSON.stringify(formvalue ));
        // console.log(formvalue);
        const UserID = JSON.parse(localStorage.getItem("user"))._id;
        console.warn(UserID);
        let result = await fetch("https://e-commerce-c3eb.onrender.com/add-product", {
            method: "post",
            body: JSON.stringify({ Name, Price, Category, Company, UserID }),

            headers: {
                "content-type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
        if(result){
        navigate('/')
        }
    };

    return (
        <div>
            <h1 style={{ color: "black", textAlign: "center", marginTop: "30px" }}>
                Add Product
            </h1>
            <div className="form">
                <form className="form-box" onSubmit={handleAdd} action="">
                    <input
                        className="input-form-box"
                        value={Name}
                        onChange={(e) => { setName(e.target.value) }}
                        required={true}
                        type="text"
                        name="name"
                        id="Name"
                        placeholder="Enter Name"
                    />

                    <input
                        className="input-form-box"
                        value={Price}
                        onChange={(e) => { setprice(e.target.value) }}
                        required={true}
                        type="text"
                        name="price"
                        id="Price"
                        placeholder="Enter Price"
                    />
                    <input
                        className="input-form-box"
                        value={Category}
                        onChange={(e) => { setCategory(e.target.value) }}
                        required={true}
                        type="text"
                        name="category"
                        id="Category"
                        placeholder="Enter Category"
                    />
                    <input
                        className="input-form-box"
                        value={Company}
                        onChange={(e) => { setCompany(e.target.value) }}
                        required={true}
                        type="text"
                        name="company"
                        id="Company"
                        placeholder="Enter Company"
                    />
                    <button className="signup-btn">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
