import React from "react";
import TextField from "@mui/material/TextField";

interface PriceFilterProps {
  price: number | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  onPriceChange: (price: number | undefined) => void;
  onMinPriceChange: (minPrice: number | undefined) => void;
  onMaxPriceChange: (maxPrice: number | undefined) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  price,
  minPrice,
  maxPrice,
  onPriceChange,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
      <TextField
        size="small"
        type="number"
        placeholder="Precio exacto"
        value={price || ""}
        onChange={(e) => onPriceChange(Number(e.target.value))}
        sx={{ backgroundColor: "white", borderRadius: 2 }}
      />
      <TextField
        size="small"
        type="number"
        placeholder="Precio mínimo"
        value={minPrice || ""}
        onChange={(e) => onMinPriceChange(Number(e.target.value))}
        sx={{ backgroundColor: "white", borderRadius: 2 }}
      />
      <TextField
        size="small"
        type="number"
        placeholder="Precio máximo"
        value={maxPrice || ""}
        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
        sx={{ backgroundColor: "white", borderRadius: 2 }}
      />
    </div>
  );
};

export default PriceFilter;