import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import DeviceEventList from "../containers/deviceEvent/DeviceEventList";
import DeviceEventDetail from "../containers/deviceEvent/DeviceEventDetail";
import DeviceEventSelector from "../containers/deviceEvent/DeviceEventSelector";
import Header from '../components/commons/Header';

const DeviceEventPage = () => {

    const [deviceEventSelected, setDeviceEventSelected] = useState({});
    const [idDeviceEvent, setIdDeviceEvent] = useState(null);

    useEffect(() => {
        initPage();
    }, []);

    const initPage = () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        if(params.id) setIdDeviceEvent(params.id);
    }
    return (
        <Box
            sx={{
                minHeight: '100vh',
                maxWidth: '100vw',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Header />
            <Box
                sx={{
                    background: '#FFFFFF',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    margin: '1.5rem 1rem 1rem 1rem'
                }}
            >
                <DeviceEventSelector />
                <Box
                    sx={{
                        background: '#FFFFFF',
                        display: 'flex',
                        flex: 1,
                    }}
                >
                    <DeviceEventList idDeviceEventSelected={idDeviceEvent} />
                    <DeviceEventDetail idDeviceEvent={idDeviceEvent} />
                </Box>
            </Box>


        </Box>
    )
}

export default DeviceEventPage;