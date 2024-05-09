import React, { useState, useEffect } from 'react';
import jsonData from './data.json';

function DataDisplay() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Чтение данных из импортированного JSON
        setData(jsonData);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data Display</h1>
            <p>ID: {data.id}</p>
            <p>Type: {data.type}</p>
            <p>Number: {data.number}</p>
            <p>Status: {data.status}</p>
            <p>Charge: {data.charge}</p>
            <p>Temperature MK: {data.temperature_MK}</p>
            <p>Data:</p>
            <ul>
                <li>Second: {data.data.second}</li>
                <li>Minute: {data.data.minute}</li>
                <li>Hour: {data.data.hour}</li>
                <li>Day: {data.data.day}</li>
                <li>Month: {data.data.month}</li>
                <li>Year: {data.data.year}</li>
            </ul>
            <p>Controller Leack: {data.controlerleack.leack}</p>
            <p>Controller Module:</p>
            <ul>
                <li>Temperature: {data.controlermodule.temperature}</li>
                <li>Humidity: {data.controlermodule.humidity}</li>
                <li>Pressure: {data.controlermodule.pressure}</li>
                <li>Gas: {data.controlermodule.gas}</li>
            </ul>
            <p>Controller Environment:</p>
            <ul>
                <li>Temperature: {data.controlerenviroment.temperature}</li>
                <li>Humidity: {data.controlerenviroment.humidity}</li>
                <li>Pressure: {data.controlerenviroment.pressure}</li>
                <li>VOC: {data.controlerenviroment.VOC}</li>
                <li>Gas1: {data.controlerenviroment.gas1}</li>
                <li>Gas2: {data.controlerenviroment.gas2}</li>
                <li>Gas3: {data.controlerenviroment.gas3}</li>
                <li>PM1: {data.controlerenviroment.pm1}</li>
                <li>PM25: {data.controlerenviroment.pm25}</li>
                <li>PM10: {data.controlerenviroment.pm10}</li>
                <li>Fire: {data.controlerenviroment.fire}</li>
                <li>Smoke: {data.controlerenviroment.smoke}</li>
            </ul>
        </div>
    );
}

export default DataDisplay;
