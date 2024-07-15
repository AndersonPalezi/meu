import { Box, Typography, Avatar, styled } from '@mui/material';
import Sobremin from "./assets/Sobremin.jpeg";

const AboutContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    color: "white",
}));

const AboutAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
}));

const AboutDescription = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: 'center',
    maxWidth: '600px',
}));

const About = () => {
    return (
        <AboutContainer>
            <Typography variant="h2" component="h2" gutterBottom>
                Sobre Mim
            </Typography>
            <AboutAvatar
                alt="Sua Foto"
                src={Sobremin} // Substitua pela URL da sua imagem
            />
            <AboutDescription variant="body1">
                Olá! Meu nome é Anderson Palezi e estou iniciando minha jornada no mundo da programação. Tenho paixão por aprender novas tecnologias e estou constantemente explorando maneiras de aplicar meus conhecimentos em projetos práticos. Acredito que a programação pode mudar o mundo e estou animado para ver onde essa jornada me levará.
            </AboutDescription>
        </AboutContainer>
    );
}

export default About;
