import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Theme,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const StyledToolBar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
  }));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  const menuItems = (
    <>
      <MenuItem
        sx={{ fontSize: "1.2rem" }}
        onClick={() => handleMenuItemClick("hero")}
      >
        Inicio
      </MenuItem>
      <MenuItem
        sx={{ fontSize: "1.2rem" }}
        onClick={() => handleMenuItemClick("about")}
      >
        Sobre
      </MenuItem>
      <MenuItem
        sx={{ fontSize: "1.2rem" }}
        onClick={() => handleMenuItemClick("skills")}
      >
        Habilidades
      </MenuItem>
      <MenuItem
        sx={{ fontSize: "1.2rem" }}
        onClick={() => handleMenuItemClick("projects")}
      >
        Projetos
      </MenuItem>
    </>
  );

  return (
    <>
      <AppBar position="fixed">
        <StyledToolBar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems}
              </Menu>
            </>
          ) : (
            menuItems
          )}
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default NavBar;
