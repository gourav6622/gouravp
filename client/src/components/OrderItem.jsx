import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";

export default function OrderItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.order);
  return (

    <Box display="flex" justifyContent="space-between" p={3} border= "1px sold #ddd" borderRadius="8px"  boxShadow={2} gap={3}>
      <Box height="200px" width="200px" flexShrink={0}>
        <img
          src={product.image}
          alt={product.title}
          height="100%"
          width="100%"
          style={{objectFit:"cover", borderRadius:"8px"}}
        />
      </Box>
      <Box
      flex={1}
   
        display="flex"
        flexDirection="column"
        gap={1}
        

        
      >
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        <Typography variant="h6">₹ {product.price.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {cartItems.some((item) => item.id === product.id) ? (
          <Button variant="contained" onClick={() => navigate("/cart")}>
            Go To Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => dispatch(addItemsToCart(product))}
          >
            Add To Cart
          </Button>
        )}
      </Box>
    </Box>
    
  );
}
