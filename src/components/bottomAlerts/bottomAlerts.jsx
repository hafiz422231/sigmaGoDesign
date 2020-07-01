import React from 'react'
import './bottomAlerts.css';
import { Alerts } from '../AppData/bottomAlerts';

const BottomAlerts = () => {
    return (
        <div className="bottom-text">
            {
                Alerts.map(alert => (
                    <div key={alert.id} id="loop">
                        {alert.alert}
                    </div>
                ))
            }
        </div>
    )
}

export default BottomAlerts;
