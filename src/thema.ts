import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#bfd255", // Exemplo: um tom de verde
        },
        secondary: {
            main: "#232323", // Branco como secundário
        },
    },
    typography: {
        fontFamily: 'Roboto', // Definindo a família de fontes para todo o tema
    }
});

theme = responsiveFontSizes(theme); // Aplicando responsiveFontSizes ao tema

export default theme;
