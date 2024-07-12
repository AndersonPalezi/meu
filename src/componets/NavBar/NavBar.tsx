import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        boxShadow: "10px 2px 14px 0px rgba(0,0,0,0.85)", // Sombreamento
        backgroundColor: "#282828",
        color: "#fff",
    }));

    const StyledMenuItem = styled(MenuItem)(() => ({
        "&:hover": {
            color: " #bfd255", // Usando cor do tema secundário ao passar o mouse
        },
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <StyledMenuItem className="about">About</StyledMenuItem>
                    <StyledMenuItem className="skill">Skills</StyledMenuItem>
                    <StyledMenuItem className="projects">Projects</StyledMenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
