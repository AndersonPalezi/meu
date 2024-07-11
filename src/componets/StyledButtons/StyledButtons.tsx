import { styled } from "@mui/material";
import React, { ReactNode, ReactElement } from "react";

interface StyledButtonsProps {
    children: ReactNode;
    startIcon?: ReactElement;
}

const StyledButtons: React.FC<StyledButtonsProps> = ({ children, startIcon }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: "5px 15px",
        width: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "8px",  // Adiciona margem esquerda
        marginRight: "8px", // Adiciona margem direita
        gap:"10px",
        boxShadow: "10px 2px 14px 0px rgba(0,0,0,0.85)", // Sombreamento
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: "#000000",
        }
    }));

    return (
        <StyledButton>
            {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
            {children}
        </StyledButton>
    );
}

export default StyledButtons;
