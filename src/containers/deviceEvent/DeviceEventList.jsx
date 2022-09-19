import DeviceEventCard from '../../components/deviceEvent/DeviceEventCard';
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getAllDeviceEvent } from '../../api/DeviceEventAPI'

const DeviceEventList = ({ idDeviceEventSelected }) => {

    const [deviceEventArray, setDeviceEventArray] = useState([]);

    useEffect(() => {
        loadAllDeviceEvent();
    }, []);

    const loadAllDeviceEvent = () => {
        getAllDeviceEvent().then(result => { setDeviceEventArray(result.data) });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '500px',
            }}
        >
            <Box sx={{
                boxShadow: 1,
                mb: '0.5rem',
                padding: '1rem'
            }}>
                Back
            </Box>
            <Box
                sx={{
                    boxShadow: 1,
                    mb: '0.5rem',
                    padding: '1rem'
                }}
            >
                {deviceEventArray.length} Alerts
                <Box
                    sx={{
                        backgroundColor: '#4287f5',
                        borderRadius: '15px',
                        padding: '4px 15px',
                        color: '#FFFFFF',
                        display: 'inline',
                        ml: '1rem'
                    }}
                >
                    2 New
                </Box>
            </Box>

            {deviceEventArray.map((deviceEvent) => {
                return (
                    <DeviceEventCard
                        key={deviceEvent.id}
                        deviceEvent={deviceEvent}
                        active={deviceEvent.id === idDeviceEventSelected}
                    />
                )
            })}
        </Box>
    )
}

export default DeviceEventList;