import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Context } from '../lib/settingContext';
import './slider.css'

const marks = [
    {
        value: -20,
        label: '-20°C',
    },
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 15,
        label: '15°C',
    },
    {
        value: 30,
        label: '30°C',
    },
    {
        value: 50,
        label: '50°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];



export const DiscreteSliderMarks = () => {
    const { setTemperature } = useContext(Context)
    const onChangeHandler = (event) => {
        setTemperature(event.target.value)
    }

    return (
        <footer>
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={15}
                    onChange={onChangeHandler}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={-20}
                    max={100}
                />
            </Box>
            <a href='https://cors-anywhere.herokuapp.com/'>to fix CORS problem</a>
        </footer>
    );
}