import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
const UpdateComponent = () => {
    const [Name, setName] = useState('')
    const [Price, setprice] = useState('')
    const [Category, setCategory] = useState('')
    const [Company, setCompany] = useState('')
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>
    {
        console.warn(params)
        let result =await fetch(`https://e-commerce-c3eb.onrender.com/${params.id}`)
        result=await result.json();
        console.warn(result)
        //for add the data into input field
        setName(result.Name);  
        setprice(result.Price);
        setCategory(result.Category);
        setCompany(result.Company);
    }

    const handleupdate= async (event) => {
        event.preventDefault();
      console.log(Name,Price,Category,Company);
      let result =await fetch(`https://e-commerce-c3eb.onrender.com/products/${params.id}`,{
        method:"Put",
        body: JSON.stringify({ Name, Price, Category, Company}),

        headers: {
            "content-type": "application/json",
        },
      

      });
      result = await result.json();
        // console.warn(result);
        if(result){
        navigate('/')
        }
    };
  return (
    <div>
     <h1 style={{ color: "black", textAlign: "center", marginTop: "30px" }}>
               Update Product
            </h1>
            <div className="form">
                <form className="form-box" onSubmit={handleupdate} action="">
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
                    <button className="signup-btn">Update</button>
                </form>
            </div>

    </div>
  )
}

export default UpdateComponent;
