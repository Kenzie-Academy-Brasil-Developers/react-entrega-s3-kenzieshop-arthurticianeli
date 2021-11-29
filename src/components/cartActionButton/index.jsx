import { Fab, Drawer } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import Cart from "../cart";

function CartActionButton() {
  const drawerWidth = 400;

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Fab
        color="primary"
        sx={{
          margin: 0,
          top: 70,
          right: 20,
          bottom: "auto",
          left: "auto",
          position: "fixed",
          ...(open && { display: "none" }),
        }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <ShoppingBagOutlinedIcon />
      </Fab>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Cart handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
}

export default CartActionButton;
