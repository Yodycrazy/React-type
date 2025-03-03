import React from "react";
import Header from "../../components/header/Header";

const HeaderModule = () => {
  const handleLoginClick = () => {
    console.log("Redirect to login page");
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <Header
      bannerImageUrl="/banner.jpg"
      bannerAltText="Banner de la tienda"
      onLoginClick={handleLoginClick}
      onSearch={handleSearch}
    />
  );
};

export default HeaderModule;