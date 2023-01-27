import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const ProductList = () => {
    

    const [products, setProducts] = useState([]);
    useEffect(() => {

        getProducts();
    }, []);


    const getProducts = async () => {
        let result = await fetch("https://e-commerce-c3eb.onrender.com/products");
        result = await result.json();
        setProducts(result);


    };
    // console.warn(products);

    const deleteproduct = async (id) => {
        console.warn(id)
        let result = await fetch(`https://e-commerce-c3eb.onrender.com/products/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchhandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`https://e-commerce-c3eb.onrender.com/search/${key}`);
            result = await result.json()
            if (result) {
                setProducts(result);
            }

        }else{
            getProducts();
        }

}
    
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <h1 style={{ color: "blue", textAlign: "center", marginTop: "50px" }}>Product Component</h1>
            </div>
            <input onChange={searchhandle} style={{ textAlign: "center", marginTop: "50px", width: "30%", height: "25px", padding: "5px 10px", border: "solid 1px skyblue" }}
                type="text" placeholder='Search Product' />
            <ul className='Productlist'>
                <li className='product-list-item'>S,no</li>
                <li className='product-list-item'>Name</li>
                <li className='product-list-item'>Price</li>
                <li className='product-list-item'>Category</li>
                <li className='product-list-item'>Company</li>
                <li className='product-list-item'>Oprations</li>
            </ul>

            {
               products.length>0 ?products.map((item, index) =>
                    <ul className='Productlist' key={item._id}>
                        <li className='product-list-item'>{index + 1}</li>
                        <li className='product-list-item'>{item.Name}</li>
                        <li className='product-list-item'>{item.Price}</li>
                        <li className='product-list-item'>{item.Category}</li>
                        <li className='product-list-item'>{item.Company}</li>
                        <li className='product-list-item'><button style={{ cursor: "pointer", backgroundColor: "white", borderColor: "black", padding: "0 5px" }}
                            onClick={() => deleteproduct(item._id)} >Delete</button>
                            <Link style={{ color: "black", marginLeft: "10px", listStyle: "none", textDecoration: "none", cursor: "pointer", }}
                             to={"/update/" + item._id}>- <strong>
                                Update</strong></Link>
                        </li>

                    </ul>
                      
                )  :<h1 style={{ color:"brown" , marginTop:"40px"}}>no result found</h1>
            }

        </div>
    )
}

export default ProductList;
