import { Typography, Box } from '@mui/material';
import {
    Link
  } from "react-router-dom";

const styleAnomaly = {
    Mild: { backgroundColor: '#00ff00' },
    Moderate: { backgroundColor: '#f5bc42' },
    Severe: { backgroundColor: '#ff0000' },
}

const DeviceEventCard = ({ deviceEvent, onClick, active }) => {
    return (
        <a href={"/deviceEvent?id="+deviceEvent.id}>
            <Box
                sx={{
                    padding: '0.5rem',
                    border: `solid ${active ? '#4287f5' : '#DDDDDD'} 2px`,
                    borderRadius: '5px',
                    width: '250px',
                    margin: '0.5rem 1rem',
                    '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
                onClick={onClick}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography>
                        {deviceEvent.sensor}
                    </Typography>
                    <Typography sx={{
                        borderRadius: '15px',
                        width: '90px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        ...styleAnomaly[deviceEvent.anomaly]
                    }}>
                        {deviceEvent.anomaly}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        mt: '10px',
                        fontWeight: 600
                    }}
                >
                    Unknown Anomaly
                </Typography>
                <Typography
                    sx={{
                        mb: '10px'
                    }}
                >
                    Detected at {deviceEvent.timestamp}
                </Typography>
                <Typography
                    sx={{
                        color: '#4287f5'
                    }}
                >
                    {deviceEvent.machine}
                </Typography>
            </Box>
        </a>
    )
}

export default DeviceEventCard;