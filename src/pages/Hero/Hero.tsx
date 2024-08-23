import styled from "@emotion/styled";
import DownloadIcon from "@mui/icons-material/Download";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import Avatar from "../../assets/images/avatar.png";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import StyledButton from "../../components/StyledButton";

const Hero = () => {
  const theme = useTheme();

  const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      padding: "100px",
    }, // mobile
    [theme.breakpoints.up("md")]: {
      padding: "0px",
    }, // desktop
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
  }));

  return (
    <div>
      <StyledHero theme={theme}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                Mateus Acauhi
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
                pb={2}
              >
                Desenvolvedor Full-Stack
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    component="a"
                    href="mailto:acauhi.mateus@gmail.com"
                  >
                    <ForwardToInboxIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton component="a" href="/cv.pdf" download>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    component="a"
                    href="https://github.com/Acauhi99"
                    download
                  >
                    <GitHubIcon />
                    <Typography>Repositorios</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </div>
  );
};

export default Hero;
