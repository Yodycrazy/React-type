import React from "react";
import Banner from "./Banner";
import LoginLink from "./LoginLink";
import Grid from "@mui/material/Grid2"; 

interface HeaderProps {
  bannerImageUrl: string;
  bannerAltText: string;
  onLoginClick: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ bannerImageUrl, bannerAltText, onLoginClick, onSearch }) => {
  return (
    <Grid container direction="column" spacing={2}>

      <Grid size={{ xs: 12}}>
        <Banner imageUrl={bannerImageUrl} altText={bannerAltText}  />
      </Grid>

      <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
      <Grid>
          <LoginLink onLoginClick={onLoginClick} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;