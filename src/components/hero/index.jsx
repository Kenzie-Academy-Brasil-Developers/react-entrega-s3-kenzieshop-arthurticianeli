import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

function Hero() {
  return (
    <Box sx={{ display: "flex", width: "90vw", margin: "50px auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "5vw",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ mb: "20px" }}>
          Registre-se para comprar suas verduras e vegetais direto da fazenda
        </Typography>
        <Button variant="outlined">Registrar</Button>
      </Box>
      <Box>
        <img
          src="https://gaagrosolucoes.com.br/wp-content/uploads/2020/12/Imagem-blog-GA-ferias.jpg"
          alt=""
          style={{ borderRadius: "50px", width: "30vw" }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
