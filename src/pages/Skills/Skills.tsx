import { Box, Container, Divider, Typography } from "@mui/material";
import { styled, Theme, useTheme } from "@mui/material/styles";

const Skills = () => {
  const theme = useTheme();

  const StyledSkills = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(4, 0),
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "100px",
    margin: "10px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  }));

  return (
    <StyledSkills theme={theme} id="skills">
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>
            Habilidades
          </Typography>
          <Typography variant="body1" fontSize={24} paragraph>
            Principais tecnologias de dominio Back-end e Front-end que utilizo
            no desenvolvimento de aplicações web.
          </Typography>
        </Box>
        <Divider
          variant="middle"
          orientation="horizontal"
          sx={{ width: "100%", marginBottom: "20px", borderBottomWidth: "2px" }}
        />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/TypeScript.png" alt="TypeScript" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/JavaScript.png" alt="JavaScript" />
          </a>
          <a
            href="https://docs.python.org/3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Python.png" alt="Python" />
          </a>
          <a
            href="https://docs.nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Nest.js.png" alt="NestJs" />
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Next.js.png" alt="NextJs" />
          </a>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/React.png" alt="React" />
          </a>
          <a
            href="https://mui.com/getting-started/usage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Material UI.png" alt="MUI" />
          </a>
          <a
            href="https://fastapi.tiangolo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/FastAPI.png" alt="FastAPI" />
          </a>
          <a
            href="https://docs.djangoproject.com/en/stable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Django.png" alt="Django" />
          </a>
          <a
            href="https://dev.mysql.com/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/MySQL.png" alt="MySQL" />
          </a>
          <a
            href="https://www.postgresql.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/PostgresSQL.png" alt="Postgres" />
          </a>
          <a
            href="https://www.sqlite.org/docs.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/SQLite.png" alt="SQLite" />
          </a>
          <a
            href="https://docs.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/MongoDB.png" alt="MongoDB" />
          </a>
          <a
            href="https://redis.io/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src="/Redis.png" alt="Redis" />
          </a>
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
