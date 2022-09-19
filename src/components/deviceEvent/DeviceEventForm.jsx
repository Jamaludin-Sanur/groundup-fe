import { TextField, Box, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';

const styleLabel = {
    fontWeight: '600',
    color: '#000000'
}

const styleDropdown = {
    maxWidth: '300px'
}

const DeviceEventForm = ({ deviceEvent, onSubmit }) => {

    const [formData, setFormData] = useState(deviceEvent?.action || {});

    const onChangeReason = (evt) => {
        formData.suspectedReason = evt.target.value;
        setFormData(formData)
    }

    const onChangeAction = (evt) => {
        formData.actionRequired = evt.target.value;
        setFormData(formData)
    }

    const onChangeComment = (evt) => {
        formData.comment = evt.target.value;
        setFormData(formData)
    }

    if(!deviceEvent) return null;
    return (
        <Box
            sx={{
                padding: '0 2rem'
            }}
        >
            <InputLabel sx={styleLabel}>Equipment</InputLabel>
            <InputLabel>{deviceEvent.machine}</InputLabel>
            <br />

            <InputLabel sx={styleLabel}>Suspected Reason</InputLabel>
            <FormControl size='small' sx={styleDropdown} fullWidth>
                <Select
                    defaultValue={formData.suspectedReason || ''}
                    onChange={onChangeReason}
                    displayEmpty
                >
                    <MenuItem value={"Unknown Anomaly"}>Unknown Anomaly</MenuItem>
                    <MenuItem value={"Overheat"}>Overheat</MenuItem>
                </Select>
            </FormControl>
            <br />
            <br />

            <InputLabel sx={styleLabel}>Action Required</InputLabel>
            <FormControl size='small' sx={styleDropdown} fullWidth>
                <Select
                    defaultValue={formData.actionRequired || ''}
                    onChange={onChangeAction}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={"None"}>None</MenuItem>
                    <MenuItem value={"Need Maintenance"}>Need Maintenance</MenuItem>
                </Select>
            </FormControl>
            <br />
            <br />

            <InputLabel sx={styleLabel}>Comment</InputLabel>
            <TextField
                fullWidth
                multiline
                rows={5}
                defaultValue={formData.comment}
                onChange={onChangeComment}
            />
            <br />
            <br />

            <Button variant="contained" sx={{width:'90px'}} onClick={()=>onSubmit(formData)}>Save</Button>
        </Box>
    )
}

export default DeviceEventForm;