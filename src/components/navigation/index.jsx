import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navigation() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        paddingLeft: "24px",

        backgroundColor: "#F3F3F3",
      }}
    >
      <Typography sx={{ mr: "20px" }}>HealthyFoods</Typography>

      <Box
        sx={{ display: "flex", width: "400px", justifyContent: "space-around" }}
      >
        <Typography>Link 1</Typography>
        <Typography>Link 2</Typography>
        <Typography>Link 3</Typography>
        <Typography>Link 4</Typography>
      </Box>

      <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
        <Typography sx={{}}>Registrar</Typography>
        <Button
          sx={{
            borderRadius: "0px",
            height: "100%",
            width: "100px",
            ml: "20px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Navigation;
