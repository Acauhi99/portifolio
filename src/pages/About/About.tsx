import { Container, Typography } from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  const StyledAbout = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  }));

  return (
    <StyledAbout theme={theme} id="about">
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" textAlign="center" fontSize={24}>
          Desenvolvedor Júnior e estudante de Análise e Desenvolvimento de
          Sistemas. Excelente conhecimento em lógica de programação, estrutura
          de dados, orientação a objetos, bancos de dados SQL e NoSQL,
          versionamento de código com Git.
        </Typography>
      </Container>
    </StyledAbout>
  );
};

export default About;
