import React, { ReactNode, ReactElement } from "react";
import { styled } from "@mui/material";

interface StyledButtonsProps {
    children: ReactNode;
    startIcon?: ReactElement;
    onClick: () => void;
}

const StyledButtons: React.FC<StyledButtonsProps> = ({ children, startIcon, onClick }) => {
    const StyledButton = styled("button")(() => ({
        backgroundColor: "transparent",
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: "5px 15px",
        width: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "8px",
        marginRight: "8px",
        gap: "10px",
        boxShadow: "10px 2px 14px 0px rgba(0,0,0,0.85)",
        "&:hover": {
            backgroundColor: "#bfd255",
            color: "#000000",
        }
    }));

    return (
        <StyledButton onClick={onClick}>
            {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
            {children}
        </StyledButton>
    );
}

export default StyledButtons;
