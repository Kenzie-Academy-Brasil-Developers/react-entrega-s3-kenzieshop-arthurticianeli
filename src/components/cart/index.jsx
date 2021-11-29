import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import ProductCardCart from "../productCardCart";
import { Typography, Button, Box } from "@mui/material";

function Cart({ handleDrawerClose }) {
  const { cart } = useSelector((state) => state);

  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, [cart]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          padding: "2px",
          minWidth: "30px",
          width: "5px",
          position: "absolute",
          left: "20px",
          top: "20px",
        }}
        onClick={handleDrawerClose}
      >
        X
      </Button>
      <Typography variant="h4">Carrinho</Typography>
      {cartEmpty ? (
        <Box sx={{ mt: "20px" }}>Carrinho Vazio</Box>
      ) : (
        <>
          {cart.map((e) => {
            return (
              <ProductCardCart
                key={e.id}
                name={e.name}
                price={e.price}
                img={e.img}
              />
            );
          })}
          <Typography variant="h6">
            Total - R${cart.reduce((a, b) => a + b.price, 0)},00
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Cart;
