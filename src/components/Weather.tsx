import React from "react";
import styled from "styled-components";
import { WeatherData } from "../types/weather";
import { getUserLocationAndWeather } from "../utils/weather";

const WeatherWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.4rem 0rem;
`;

const WeatherIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
`;

const Temperature = styled.h3`
  color: #ffffff;
  display: inline;
`;

const Location = styled.p`
  color: #ffffff;
  display: inline;
`;

const WeatherDescription = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
`;

const WeatherTitle = styled.h3`
  color: #ffffff;
  margin-top: 0.3rem;
`;

const WarningMessage = styled.div`
  color: #ff0000;
  font-size: 1rem;
`;

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(
    null
  );

  const handleRefresh = async () => {
    const answer = await getUserLocationAndWeather(
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    );
    if (answer) {
      setWeatherData(answer);
    }
  };

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <WeatherWidget>
      <WeatherIconWrap style={weatherData ? { marginBottom: "2.2rem" } : {}}>
        <img
          src={`https://openweathermap.org/img/wn/${
            weatherData?.weather?.[0]?.icon || "10d"
          }@2x.png`}
          alt="Weather Icon"
        />
      </WeatherIconWrap>

      <WeatherDescription>
        {weatherData?.weather?.[0]?.main || "Sunny"}
      </WeatherDescription>
      {!weatherData && (
        <WarningMessage>
          Please allow location access <br />
          to update the weather data.
        </WarningMessage>
      )}
      <WeatherTitle>
        Current Weather{" ("}
        <Location>{weatherData?.name || "Montreal"}</Location>
        {")"}
      </WeatherTitle>
      <Temperature>
        {Math.ceil(weatherData?.main?.temp || 0)}
        <sup>o</sup> {"  "}
        Feels like: {Math.ceil(weatherData?.main?.feels_like || 0)}
        <sup>o</sup>
      </Temperature>
    </WeatherWidget>
  );
};

export default Weather;
