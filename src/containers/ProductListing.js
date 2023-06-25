import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";//to access the products from redux store
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
const ProductListing = () => {
    const products = useSelector((state)=>state);//we need not to pass this as props as we are using redux
    //console.log(products);

    const dispatch = useDispatch();
    //fetching product api from fakestoreapi.com
    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log("Err" , err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("products:" ,products);
    return(
        <div className='ui grid container'>
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;
