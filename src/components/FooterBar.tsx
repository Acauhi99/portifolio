import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";

const FooterBar = () => {
  const theme = useTheme();

  const StyledFooter = styled("footer")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    position: "relative",
    bottom: 0,
    width: "100%",
  }));

  const menuItems = ["Home", "About", "Skills", "Projects"];

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CopyrightIcon sx={{ marginRight: 1 }} />
              Mateus Acauhi
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  variant="body1"
                  sx={{ margin: theme.spacing(1) }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default FooterBar;
