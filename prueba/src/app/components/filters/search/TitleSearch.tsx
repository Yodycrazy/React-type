import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface TitleSearchProps {
  title: string;
  onTitleChange: (title: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

const TitleSearch: React.FC<TitleSearchProps> = ({ title, onTitleChange, onSearch, onReset }) => {
  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems: "center", gap: "8px" }}>
      <TextField
        size="small"
        placeholder="Buscar por título..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        sx={{ backgroundColor: "white", borderRadius: 2 }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <Button variant="contained" color="primary" onClick={onSearch}>
        Buscar
      </Button>
      <Button variant="outlined" color="secondary" onClick={onReset}>
        Restablecer
      </Button>
    </div>
  );
};

export default TitleSearch;