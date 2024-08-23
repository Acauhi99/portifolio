import CopyrightIcon from "@mui/icons-material/Copyright";
import { Container, Grid, Typography } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

const FooterBar = () => {
  const StyledFooter = styled("footer")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    position: "relative",
    bottom: 0,
    width: "100%",
  }));

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Typography
              variant="h6"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CopyrightIcon sx={{ marginRight: 1 }} />
              <a
                href="https://www.linkedin.com/in/acauhi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1.5rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Mateus Acauhi
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default FooterBar;
