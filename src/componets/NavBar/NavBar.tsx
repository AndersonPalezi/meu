import { useState } from "react";
import {
    AppBar,
    Toolbar,
    MenuItem,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from 'react-scroll';


const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: isMobile ? "space-between" : "space-evenly",
        boxShadow: "10px 2px 14px 0px rgba(0,0,0,0.85)",
        backgroundColor: "#282828",
        color: "#fff",
    }));

    const DrawerListItemButton = styled(ListItemButton)(() => ({
        backgroundColor: '#282828', // Cor de fundo do menu mobile
        color: '#fff', // Cor do texto do menu mobile
        "&:hover": {
            backgroundColor: "#383838",
            color: "#bfd255",
        },
        "&:active": {
            backgroundColor: "#383838",
            color: "#87a800",
        },
    }));

    const StyledMenuItem = styled(MenuItem)(() => ({
        "&:hover": {
            color: "#bfd255", // Cor ao passar o mouse
        },
    }));

    const drawerItems = (
        <List>
            <DrawerListItemButton>
                <ScrollLink to="about" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="About" />
                </ScrollLink>
            </DrawerListItemButton>
            <DrawerListItemButton>
                <ScrollLink to="skills" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="Skills" />
                </ScrollLink>
            </DrawerListItemButton>
            <DrawerListItemButton>
                <ScrollLink to="projects" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="Projects" />
                </ScrollLink>
            </DrawerListItemButton>
            <DrawerListItemButton>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="Contato" />
                </ScrollLink>
            </DrawerListItemButton>
        </List>
    );

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                                sx={{ '& .MuiDrawer-paper': { backgroundColor: '#282828' } }} // Cor de fundo do Drawer
                            >
                                {drawerItems}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <StyledMenuItem>
                                <ScrollLink to="about" smooth={true} duration={500}>
                                    About
                                </ScrollLink>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ScrollLink to="skills" smooth={true} duration={500}>
                                    Skills
                                </ScrollLink>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ScrollLink to="projects" smooth={true} duration={500}>
                                    Projects
                                </ScrollLink>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    Contato
                                </ScrollLink>
                            </StyledMenuItem>
                        </>
                    )}
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
