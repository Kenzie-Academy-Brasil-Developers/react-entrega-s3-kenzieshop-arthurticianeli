import { Button, Typography, Box, Divider } from "@mui/material";

import { removeProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

function ProductCardCart({ name, price }) {
  const dispatch = useDispatch();

  const product = {
    name: name,
  };

  const handleAdd = () => {
    dispatch(removeProductThunk(product));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
          width: "300px",
        }}
      >
        <Typography variant="body1" sx={{ mr: "100px", width: "200px" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mr: "20px" }}>
          R${price},00
        </Typography>
        <Button
          variant="outlined"
          sx={{ padding: "2px", minWidth: "30px", width: "5px" }}
          onClick={handleAdd}
        >
          X
        </Button>
      </Box>
      <Divider />
    </Box>
  );
}

export default ProductCardCart;
