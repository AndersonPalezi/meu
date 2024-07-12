import { Container, styled, Typography,Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import { Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import StyledButtons from "../../../../componets/StyledButtons/StyledButtons"
import { AnimatedBackground } from "../../../../componets/AnimatedBackground/Animatedbackground";
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';// alem de importar os tres icones tambem e nescessario importar iconButton




const Hero = () => {
    const navigate = useNavigate();
  
    const handleContactClick = () => {
        window.location.href = 'mailto:andersonpalezidev@gmail.com';
    };

    const handleDownloadClick = () => {
        navigate('/curriculum');
    };
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
            minwidth: "100vw",// colocando um min para cobrir a tela menor ou igual mobile

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0px",
            minwidth: "100vw",//colocando o minimo maior ouigual mobile 
        }
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "100%",
        borderRadius: "50%",
        backgroundColor: " white",//fundo da imagen
        border: "1px solid #bfd255",
        boxShadow: "10px 2px 14px 0px rgba(0,0,0,0.85)", // Sombreamento
        [theme.breakpoints.up('xs')]: { // <= mobile
            width: "80%",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            width: "100%",
        }
    }));
    const iconStyle = {
        color: "white",
        fontSize: "2rem",
        margin: "0 8px",
        '&:hover': {
            color: ' #bfd255' // Change color on hover
        }
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={-8}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} alt="Avatar" />
                            </Box>
                            </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="white" variant="h1" textAlign="center" pb={2}>Anderson Palezi</Typography>
                        <Typography color="white" variant="h2" textAlign="center"pb={4}>Desenvolvedor front-end</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center"pt={3}>
                                <StyledButtons onClick={handleDownloadClick} startIcon={<DownloadIcon />}>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButtons>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButtons onClick={handleContactClick} startIcon={<MailIcon />}>
                                    <Typography>
                                        Contato
                                    </Typography>
                                </StyledButtons>
                            </Grid>
                        </Grid>
                        <Box display="flex" justifyContent="center" pt={4}>
                            <IconButton
                                href="https://www.linkedin.com/in/seu-perfil" // Substitua pelo link do seu perfil LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                                style={iconStyle}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                href="https://www.instagram.com/seu-perfil" // Substitua pelo link do seu perfil Instagram
                                target="_blank"
                                rel="noopener noreferrer"
                                style={iconStyle}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                href="https://github.com/seu-perfil" // Substitua pelo link do seu perfil GitHub
                                target="_blank"
                                rel="noopener noreferrer"
                                style={iconStyle}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero;


