import React from "react";
import Button from "@mui/material/Button";

interface LoginLinkProps {
  onLoginClick: () => void;
}

const LoginLink: React.FC<LoginLinkProps> = ({ onLoginClick }) => {
  return (
    <Button style={{ display: "flex", alignItems: "center", gap: "8px" }} 
    color="primary" onClick={onLoginClick}>
      Login
    </Button>
  );
};

export default LoginLink;