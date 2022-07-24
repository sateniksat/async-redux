import React,{useEffect} from 'react';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchProductById} from "../../redux/reducers/productSlice";
import {  useNavigate } from "react-router-dom";
 
function Product() {
  const product=useSelector(state=>state.product);
  const loading=useSelector(state=>state.product.loading);
  const dispatch=useDispatch();

  
  const params=useParams();
  const productNumber = params.productId;

  const navigate=useNavigate();


  useEffect(()=>{
    if(loading ==="idle"){
      dispatch(fetchProductById(productNumber));
    }

  },[dispatch,loading,productNumber]);

  useEffect(()=>{
    if(loading==="succeeded" && product.entities===""){
      navigate("/notfound")
    }
  },[navigate,loading,product.entities])

  return (
    <div>Product</div>
  )
}

export default Product