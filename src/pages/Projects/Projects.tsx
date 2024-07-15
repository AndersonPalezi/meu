import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, IconButton, Collapse, CardActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import { styled as styledMui } from '@mui/system';
import { Theme, useTheme } from '@mui/material/styles';
import PetShopBina from "./assets/PetShop.png";
import Cltcontos from "./assets/Cltcontos.png"

const projects = [
    {
        title: "Pet Shop",
        description: "Html, Css",
        detailedDescription: "🚀 Pet Shop da Bina\nEstou empolgado em apresentar o Pet Shop da Bina, uma aplicação web que transforma a experiência de cadastro e login de usuários. Este projeto foi desenvolvido com foco na simplicidade e na estética, oferecendo uma interface intuitiva para a gestão de informações.\n\n**Tecnologias Utilizadas:**\n- **HTML:** Estruturação semântica e acessível das páginas de cadastro e login.\n- **CSS:** Estilização moderna com Flexbox e Grid, proporcionando layouts responsivos. Inclui animações e gradientes que enriquecem a experiência visual.\n- **Google Fonts:** Utilização da fonte  para uma tipografia clean e legível.\n- **Font Awesome:** Ícones sociais que melhoram a interface nas opções de login, tornando a navegação mais atraente.\n\n**Estrutura do Projeto:**\nO projeto é organizado de forma a facilitar a manutenção e a expansão futura. Cada parte do código é cuidadosamente estruturada para garantir eficiência e clareza.",
        image: PetShopBina,
        github: "https://github.com/AndersonPalezi/Projeto-Pet-Shop",
    },
    {
        title: "CLTS Contos de Terror e Suspense",
        description: "Html, Css, JavaScript",
        detailedDescription: "🚀 CLTS Contos de Terror e Suspense\nO site CLTS Contos de Terror e Suspense foi criado com o objetivo de promover e divulgar o Concurso Literário de Terror e Suspense (CLTS). O concurso incentiva a produção literária de contos de terror e suspense, principalmente de novos autores que ainda não possuem visibilidade no campo literário. O site apresenta informações sobre o concurso, especialidades, projetos realizados, e oferece um formulário de contato para que os visitantes possam se comunicar diretamente com os organizadores.\n\n**Tecnologias Utilizadas:**\n- **HTML5:** Estruturação do conteúdo web.\n- **CSS3:** Estilização e layout responsivo.\n- **JavaScript:** Funcionalidades interativas no site.\n- **Bootstrap Icons:** Conjunto de ícones para melhor apresentação visual.\n- **Google Fonts:** Tipografia estilizada com a fonte \"Roboto Slab\".\n- **FormSubmit:** Integração de formulário para envio de mensagens por e-mail.\n\n**Estrutura do Projeto:**\nO projeto é organizado de forma a facilitar a manutenção e a expansão futura. Cada parte do código é cuidadosamente estruturada para garantir eficiência e clareza.",
        image: Cltcontos,
        github: "https://github.com/AndersonPalezi/1-freelancer/tree/main",
    },
    {
        title: "Projeto 3",
        description: "Descrição breve do projeto 3.",
        detailedDescription: "Este projeto foi desenvolvido com React, Vite e Material UI, focando em uma experiência de usuário otimizada.",
        image: "Cltcontos",
        github: "https://github.com/seu_usuario/projeto3",
    },
];

const ProjectsContainer = styledMui(Box)(({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    color: "white",
}));

const ExpandIconButton = styledMui(IconButton)(() => ({
    '&:hover': {
        color: '#bfd255',
    },
}));

const GitHubButton = styledMui(IconButton)(() => ({
    '&:hover': {
        color: '#bfd255', // Cor ao passar o mouse (cor do GitHub)
    },
}));

const Projects = () => {
    const theme = useTheme();
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    const handleExpandClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <ProjectsContainer theme={theme}>
            <Typography variant="h2" component="h2" gutterBottom align="center">
                Meus Projetos
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="170"
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
                            <CardActions disableSpacing>
                                <GitHubButton
                                    onClick={() => window.open(project.github, '_blank')}
                                    aria-label="view on GitHub"
                                >
                                    <GitHubIcon />
                                </GitHubButton>
                                <ExpandIconButton
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expandedIndex === index}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandIconButton>
                            </CardActions>
                            <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {project.detailedDescription.split('\n').map((line, idx) => (
                                        <Typography paragraph key={idx}>
                                            {line}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </ProjectsContainer>
    );
}

export default Projects;
