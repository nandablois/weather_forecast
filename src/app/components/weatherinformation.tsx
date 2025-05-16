
import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import { WiThermometer, WiDaySunny, WiNightAltCloudy } from "react-icons/wi";
import { WeatherDetailItem } from "./weatherdetailitem";

type WeatherInformationProps = {
  weather: any;
};

export default function WeatherInformation({
  weather,
}: WeatherInformationProps) {
  return (
    <Container maxWidth="sm" >
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 8 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          {weather.name}, {weather.sys.country}
        </Typography>

        <Box display="flex" justifyContent="space-between"  mb={2}>
          <WeatherDetailItem
            icon={<WiThermometer size={24} />}
            label={`Temperatura ${Math.round(weather.main.temp)}°C`}
          />
          <WeatherDetailItem
            icon={<WiDaySunny size={24} />}
            label={`Temp. Máxima ${Math.round(weather.main.temp_max)}°C`}
          />

          <WeatherDetailItem
            icon={<WiNightAltCloudy size={24} />}
            label={`Temp. Mínima ${Math.round(weather.main.temp_min)}°C`}
          />
        </Box>
      </Paper>
    </Container>
  );
}
