import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import DeviceEventAudioPlayer from '../../components/deviceEvent/DeviceEventAudioPlayer';
import DeviceEventForm from '../../components/deviceEvent/DeviceEventForm';

import { getSingleDeviceEventDetail, upsertDeviceEventAction } from '../../api/DeviceEventAPI'

const DeviceEventDetail = ({ idDeviceEvent }) => {

    const [deviceEvent, setDeviceEvent] = useState()

    useEffect(() => {
        loadDeviceDetail();
    }, [idDeviceEvent]);

    const loadDeviceDetail = () => {
        if (!idDeviceEvent) return;
        getSingleDeviceEventDetail(idDeviceEvent).then(result => { setDeviceEvent(result.data) });
    };

    const handleSave = (actionData) => {
        const data = {
            idDeviceEvent: idDeviceEvent,
            ...actionData
        }
        upsertDeviceEventAction(data);
    }


    if (!deviceEvent) return (
        <Box sx={{ boxShadow: 1, flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h5'>No Data Selected</Typography>
        </Box>
    );
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                padding: '1rem',
                flexDirection: 'column',
                boxShadow: 1,
                marginLeft: '5px',
            }}
        >

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    padding: '0 1rem 1rem 1rem',
                    flexDirection: 'column'
                }}>
                <Typography variant="h6">
                    Alert ID {idDeviceEvent}
                </Typography>
                <Typography variant="subtitle1">
                    Detected at {deviceEvent.timestamp}
                </Typography>
                <br/>
                <Divider />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    padding: '0 1rem 1rem 1rem'
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        padding: '0 1rem 1rem 1rem',
                        flexDirection: 'column'
                    }}
                >
                    <Typography sx={{mb:'0.25rem'}}>Anomaly Machine Ouput</Typography>
                    <DeviceEventAudioPlayer
                        urlSoundClip={deviceEvent.urlSoundClip}
                    />
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        padding: '0 1rem 1rem 1rem',
                        flexDirection: 'column'
                    }}
                >
                    <Typography sx={{mb:'0.25rem'}}>Normal Machine Ouput</Typography>
                    <DeviceEventAudioPlayer
                        urlSoundClip={deviceEvent.device.urlSoundClip}
                    />
                </Box>
            </Box>

            <DeviceEventForm
                deviceEvent={deviceEvent}
                onSubmit={handleSave}
            />
        </Box>
    )
}

export default DeviceEventDetail;