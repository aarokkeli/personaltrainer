import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import Customerlist from './Customerlist';
import Traininglist from './Traininglist';
import TrainingCalendar from './TrainingCalendar';

export default function Navigation() {

    const [value, setValue] = useState('customers')

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <h2>Personal Trainer</h2>
            <Tabs value={value} onChange={handleChange}>
                <Tab value='trainings' label='Trainings' />
                <Tab value='customers' label='Customers' />
                <Tab value='calendar' label='Calendar' />
            </Tabs>
            {value === 'trainings' && <Traininglist />}
            {value === 'customers' && <Customerlist />}
            {value === 'calendar' && <TrainingCalendar />}
        </div>
    );
}