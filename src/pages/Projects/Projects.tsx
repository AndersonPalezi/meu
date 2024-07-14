import { Box, Typography, Card, CardContent, CardMedia, Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';


const projects = [
    {
        title: "Projeto 1",
        description: "Descrição breve do projeto 1.",
        image: "https://petshopdabina.netlify.app/",
        link: "http://127.0.0.1:5500/index.html", // Adicione o link do projeto
    },
    {
        title: "Projeto 2",
        description: "Descrição breve do projeto 2.",
        image: "link_para_imagem_do_projeto2.jpg",
        link: "/projeto2", // Adicione o link do projeto
    },
    {
        title: "Projeto 3",
        description: "Descrição breve do projeto 3.",
        image: "link_para_imagem_do_projeto3.jpg",
        link: "/projeto3", // Adicione o link do projeto
    },
    // Adicione mais projetos conforme necessário
];

const ProjectsContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    color: "white",
}));

const ProjectLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "inherit",
}));

const Projects = () => {
    return (
        <ProjectsContainer>
            <Typography variant="h2" component="h2" gutterBottom align="center">
                Meus Projetos
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectLink to={project.link}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ProjectLink>
                    </Grid>
                ))}
            </Grid>
        </ProjectsContainer>
    );
}

export default Projects;

