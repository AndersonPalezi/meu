import { Container, styled, Typography,Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import { Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import StyledButtons from "../../../../componets/StyledButtons/StyledButtons"
import { AnimatedBackground } from "../../../../componets/AnimatedBackground/Animatedbackground";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "200px",
            minwidth: "100vw",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0px",
            minwidth: "100vw",
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
                                <StyledButtons startIcon={<DownloadIcon />}>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButtons>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButtons startIcon={<MailIcon />}>
                                    <Typography>
                                        Contato
                                    </Typography>
                                </StyledButtons>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero;


