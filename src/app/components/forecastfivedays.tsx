
import { Box, Card, Typography } from "@mui/material";


type ForecastFiveDaysProps = {
  forecastFiveDays: any[];
};

export default function ForecastFiveDays({
  forecastFiveDays: forecast,
}: ForecastFiveDaysProps) {
  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Previsão para os próximos 5 dias
      </Typography>
      <Box display="flex" justifyContent="center" sx={{ overflow: "auto"}} gap={2}>
        {forecast.map((item, index) => (
          <Card
            key={index}
            sx={{
              p: 2,
              flex: "1 1 100px",
              maxWidth: "200px",
              textAlign: "center",
              backgroundColor: "rgb(201, 237, 249)",
            }}
          >
            <Typography variant="subtitle2">
              {new Date(item.dt_txt).toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
              })}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              style={{ width: "50px", height: "50px" }}
            />
            <Typography variant="body2" color="textSecondary">
              {` ${Math.round(item.main.temp)}°C`}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
