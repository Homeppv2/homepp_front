import React from 'react';
import SensorLogTable from './SensorLogTable.jsx';

const LogsPage = () => {
    return (
        <div>
            <h1>Таблица логов значений датчика</h1>
            <SensorLogTable />
        </div>
    );
};

export default LogsPage;
