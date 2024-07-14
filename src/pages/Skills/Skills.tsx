import { Box, Typography, Grid, ListItem, ListItemText, styled } from '@mui/material';
import cssImg from "./assets/css3.svg";
import htmlImg from "./assets/html5.svg";
import jsImg from "./assets/javascript.svg";
import reactImg from "./assets/react.svg";  
import typescriptImg from "./assets/typescript.svg";
import viteImg from "./assets/Vite.svg";

const SkillsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    color: "#fff"
}));

const SkillItem = styled(ListItem)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16px',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
}));

const Skills = () => {
    return (
        <SkillsContainer>
            <Typography variant="h2" component="h2" gutterBottom>
                Minhas Habilidades
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={htmlImg} alt="HTML" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="HTML" />
                    </SkillItem>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={cssImg} alt="CSS" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="CSS" />
                    </SkillItem>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={jsImg} alt="JavaScript" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="JavaScript" />
                    </SkillItem>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={typescriptImg} alt="TypeScript" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="TypeScript" />
                    </SkillItem>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={reactImg} alt="React" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="React" />
                    </SkillItem>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <SkillItem>
                        <img src={viteImg} alt="Vite" style={{ width: 32, height: 32, marginBottom: 8 }} />
                        <ListItemText primary="Vite" />
                    </SkillItem>
                </Grid>
            </Grid>
        </SkillsContainer>
    );
}

export default Skills;

