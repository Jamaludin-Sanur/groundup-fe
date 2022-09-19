import { TextField, Box, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material';

const DeviceEventSelector = () => {

    return (
        <Box
            sx={{
                boxShadow: 1,
                display: 'flex',
                flex: 1,
                mb: '5px',
                padding: '0.5rem'
            }}
        >
            <FormControl size='small' sx={{width:'250px'}}>
                <Select value='CNC Machine'>
                    <MenuItem value={'CNC Machine'}>CNC Machine</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )


}

export default DeviceEventSelector;