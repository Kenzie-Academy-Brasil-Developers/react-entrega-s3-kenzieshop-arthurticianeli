import { Button, Typography, Box } from "@mui/material";
import { addProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

function ProductCard({ name, price, img, id }) {
  const product = {
    name: name,
    price: price,
    id: id,
  };

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProductThunk(product));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        width: "fit-content",
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "100px",
          maxHeight: "100px",
          overflow: "hidden",
          padding: "10px",
        }}
      />
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">R${price},00</Typography>
      <Button variant="outlined" onClick={handleAdd}>
        Adicionar
      </Button>
    </Box>
  );
}

export default ProductCard;
