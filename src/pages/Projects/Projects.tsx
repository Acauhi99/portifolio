import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";
import FinanceView from "../../assets/images/finance-view.png";
import TrackPath from "../../assets/images/track-path.png";

const projects = [
  {
    title: "Finance View",
    description:
      "Dahsboard de vizualização de acoes, amostragem historica do preco de ativos brasileiros e norte-americanos. Contruido com React, TypeScript, Material-UI, FastAPI, SQLite e Pydantic. Deployado na AWS Runner.",
    image: FinanceView,
    link: "https://financeview.vercel.app/",
  },
  {
    title: "Track Path",
    description:
      "Encurtador, rastreador e analisador de URLs, tanto para uso pessoal quanto para plataformas de afiliados. Contruido com VueJs, TypeScript, FastAPI, Postgres, Redis, Docker. Deployado na AWS Runner.",
    image: TrackPath,
    link: "https://dashboard.trackpath.com.br/",
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
    image: "/path/to/image3.jpg",
    link: "https://linkprojeto3.com",
  },
  {
    title: "Projeto 4",
    description: "Descrição do Projeto 4",
    image: "/path/to/image4.jpg",
    link: "https://linkprojeto4.com",
  },
];

const Projects = () => {
  const theme = useTheme();

  const StyledProjects = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  }));

  return (
    <StyledProjects theme={theme} id="projects">
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom>
          Meus Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="140"
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.link}
                    target="_blank"
                  >
                    Ver Projeto
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
