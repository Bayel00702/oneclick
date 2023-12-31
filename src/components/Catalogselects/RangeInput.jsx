import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const RangeInput = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

export default RangeInput;