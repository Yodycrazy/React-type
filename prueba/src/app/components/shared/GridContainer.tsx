import React from "react";
import Grid from "@mui/material/Grid2";

const GridContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container spacing={2} columns={24}>
      {children}
    </Grid>
  );
};

export default GridContainer;