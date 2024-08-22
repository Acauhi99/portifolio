import { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface StyledButtonProps {
  children: React.ReactNode;
  component?: React.ElementType;
  href?: string;
  download?: boolean;
}

const commonStyles = ({ theme }: { theme: Theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
});

const StyledButtonComponent = styled("button")(commonStyles);
const StyledLinkComponent = styled("a")(commonStyles);

const StyledButton = ({
  children,
  component = "button",
  href,
  download,
}: StyledButtonProps) => {
  if (href) {
    return (
      <StyledLinkComponent as={component} href={href} download={download}>
        {children}
      </StyledLinkComponent>
    );
  }

  return (
    <StyledButtonComponent as={component}>{children}</StyledButtonComponent>
  );
};

export default StyledButton;
