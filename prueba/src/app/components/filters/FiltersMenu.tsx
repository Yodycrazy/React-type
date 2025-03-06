import React from "react";
import { FiltersProps } from "../../interfaces/Filters.interface";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";

const FiltersMenu: React.FC<FiltersProps> = ({ categories, onSearch, onReset }) => {
  return (
    <Box  sx={{ padding: 2 , justifyContent:"center", alignContent: "center" }}> 
      <SearchBar categories={categories} onSearch={onSearch} onReset={onReset} />
    </Box>
  );
};

export default FiltersMenu;