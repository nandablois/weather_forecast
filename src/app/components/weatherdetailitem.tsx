import React from "react";
import { Box, Typography } from "@mui/material";

type WeatherDetailItemProps = {
  icon: React.ReactElement;
  label: string;
};

export function WeatherDetailItem({ icon, label }: WeatherDetailItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        width: {
          xs: "100%",
          sm: "calc(50% - 8px)",
        },
      }}
    >
      {icon}
      <Typography>{label}</Typography>
    </Box>
  );
}
