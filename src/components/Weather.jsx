import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';


const Weather = () => {
        let urlApi = 'https://api.openweathermap.org/data/2.5/weather?appid=a9dd7b78ec02d33e2e06ab8d5621860d&lang=es';
        let urlCity = '&q=';
        let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=a9dd7b78ec02d33e2e06ab8d5621860d&lang=es';

        const [weather, setWeather] = useState([]);
        const [forecast, setForecast] = useState([]);
        const [loading, setLoading] = useState(false);
        const [info, setInfo] = useState(false);
        const [location, setLocation] = useState('');

        const getLocation = async(loc) => {
            setLoading(true);
            setLocation(loc);

            //Weather

            urlApi = urlApi + urlCity + loc;
            await fetch(urlApi).then((response) => {
                if(!response.ok) throw {response}
                return response.json();
            }).then((weatherData) => {
                console.log(weatherData);
                setWeather(weatherData);
            }).catch(error => {
                console.log(error);
                setLoading(false);
                setInfo(false);
            });

            //Forecast

            urlForecast = urlForecast + urlCity + loc;
            await fetch(urlForecast).then((response) => {
                if(!response.ok) throw {response}
                return response.json();
            }).then((forecastData) => {
                console.log(forecastData);
                setForecast(forecastData);
                setLoading(false);
                setInfo(true);
            }).catch(error => {
                console.log(error);
                setLoading(false);
                setInfo(false);
            });
        }
        return (
            <React.Fragment>
                <Form
                    newLocation = {getLocation}
                />
                <Card
                    showInfo = {info}
                    loadingData = {loading}
                    weather = {weather}
                    forecast = {forecast}
                />
            </React.Fragment>
        );
    }

export default Weather