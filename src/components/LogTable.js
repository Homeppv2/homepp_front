import React from 'react';

const LogTable = ({ logs }) => {
    if (!logs || !Array.isArray(logs) || logs.length === 0) {
        return <p>No logs available</p>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Date & Time</th>
                <th>Sensor</th>
                <th>Value</th>
                <th>Device Number</th>
            </tr>
            </thead>
            <tbody>
            {logs.map((log, index) => (
                <tr key={index}>
                    <td>{log.dateTime}</td>
                    <td>{log.sensor}</td>
                    <td>{log.value}</td>
                    <td>{log.deviceNumber}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default LogTable;
