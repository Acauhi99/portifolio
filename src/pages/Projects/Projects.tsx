import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";
import FinanceView from "../../assets/images/finance-view.png";
import NPMPackage from "../../assets/images/npm-package.png";
import TeamBuilder from "../../assets/images/team-builder.png";
import TrackPath from "../../assets/images/track-path.png";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
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
    title: "NPM Package Explorer",
    description:
      "Aplicacao pura de Front-end que procura e exibi detalhes de pacotes NPM pelo nome. Contruido com React, TypeScript, TailwindCSS, React Router. Deployado na Vercel.",
    image: NPMPackage,
    link: "https://npm-package-search-iota.vercel.app/",
  },
  {
    title: "Team Builder",
    description:
      "Primeiro projeto de estudo puramente Front-end, com JavaScript, fazendo requesicao para PokeAPI e exibindo os pokemons em cards. Deployado no GithubPages.",
    image: TeamBuilder,
    link: "https://acauhi99.github.io/poke-builder/",
  },
];

const Projects = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const StyledProjects = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  }));

  const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  });

  return (
    <StyledProjects theme={theme} id="projects">
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom>
          Meus Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard onClick={() => handleClickOpen(project)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="180"
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
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent sx={{ fontSize: "1.2rem" }}>
          <CardMedia
            component="img"
            alt={selectedProject?.title}
            height="180"
            image={selectedProject?.image}
            title={selectedProject?.title}
          />
          <DialogContentText>{selectedProject?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button
            color="primary"
            href={selectedProject?.link || "#"}
            target="_blank"
          >
            Ver Projeto
          </Button>
        </DialogActions>
      </Dialog>
    </StyledProjects>
  );
};

export default Projects;
