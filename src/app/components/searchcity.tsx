import { Button, TextField, Box } from "@mui/material";
import React from "react";

type SearchCityProps = {
  city: string;
  onCityChange: (city: string) => void;
  onSearch: () => void;
};

export default function SearchCity({
  city,
  onCityChange,
  onSearch,
}: SearchCityProps) {
  return (
    <Box display="flex" justifyContent={"center"} gap={2} flexWrap="wrap">
      <TextField
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        sx={{ width: { xs: "100px", sm: "300px" }, maxWidth: "100%" }}
        variant="outlined"
        size="small"
      />
      <Button
        onClick={onSearch}
        variant="contained"
        color="primary"
        sx={{ height: "40px" }}
      >
        Buscar
      </Button>
    </Box>
  );
}
