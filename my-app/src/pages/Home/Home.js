import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  usefetchProducts,
  fetchProductByLimit,
} from "../../redux/reducers/productsSlice";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "./Card";
// import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

function Home() {
  const [change, setChange] = useState("unlimit");

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === "idle" && change === "unlimit") {
      dispatch(usefetchProducts());
    } 
     if( change === "limit"){
      dispatch(fetchProductByLimit(5));
    }
  }, [dispatch, loading, change]);

  useEffect(() => {
    if (change === "unlimit") {
      dispatch(usefetchProducts());
    } 
  }, [change]);

  console.log(products);

  function handleClick (){
    console.log("change")
    if (change === "unlimit") {
      setChange("limit");
      console.log("limit")
    } else if(change==="limit"){
      console.log("unlimit")
      setChange("unlimit");
    }
  };

  return (
    <>
      <Container>
        <div >Home</div>

        <button onClick={()=>handleClick()}>change</button>
        <hr/>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {products?.entities.map((item) => (
              <Grid item key={item.id} xs={12} md={3} sm={6}>
                <Card product={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Home;
