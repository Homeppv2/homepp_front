import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Установите ваш API-ключ здесь
const API_KEY = '304ce3ed5730fcbe4b185cdfa064efc3';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = position.coords;
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

                if (response.status !== 200) {
                    throw new Error('Failed to fetch weather data');
                }

                setWeatherData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching weather data');
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather(); // Вызываем функцию fetchWeather сразу после монтирования компонента
        const interval = setInterval(fetchWeather, 5000); // Вызываем функцию fetchWeather каждые 5 секунд

        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, []);

    if (loading) {
        return <p>Loading weather...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const temp = weatherData && weatherData.main ? weatherData.main.temp : 'N/A';

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.5rem' }}>
            <p>{weatherData.name}</p>
            <p>{temp}&deg;C</p>
        </div>
    );
};

export default Weather;
