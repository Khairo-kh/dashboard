import { WeatherData } from "../types/weather";

async function getWeatherData(latitude: number, longitude: number, apiKey: string): Promise<WeatherData | null> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch weather data');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

export async function getUserLocationAndWeather(apiKey: string): Promise<WeatherData | null> {
    try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const weatherData = await getWeatherData(latitude, longitude, apiKey);
        if (weatherData) {
            
            return weatherData;
            
        } else {
            console.error('Failed to fetch weather data.');
            return null;
        }
    } catch (error) {
        console.error('Error getting user location:', error);
        return null;
    }
}

async function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

