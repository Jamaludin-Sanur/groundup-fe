import { TextField, Box, InputLabel, FormControl, Select, MenuItem, Button, Typography } from '@mui/material';

const styleLabel = {
    fontWeight: '600',
    color: '#000000'
}

const styleDropdown = {
    maxWidth: '300px'
}

const Header = () => {

    return (
        <Box
            sx={{
                boxShadow: 1,
                display: 'flex',
                flex: 1,
                minHeight: '45px',
                background: '#FFFFFF',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img src={process.env.PUBLIC_URL + '/GroundUp.png'} />

                <Typography
                    sx={{
                        borderBottom: 'solid #FFFFFF 5px',
                        px: '2rem',
                    }}
                >
                    DASHBOARD
                </Typography>

                <Typography
                    sx={{
                        borderBottom: 'solid #4287f5 5px',
                        px: '2rem',
                        lineHeight: '40px',
                    }}
                >
                    ALERT
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem'
                }}
            >
                <Typography>
                    Welcome Admin!
                </Typography>
            </Box>
        </Box>
    )
}

export default Header;