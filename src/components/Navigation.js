import React, { useState } from 'react';
import { Tabs, Tab} from '@mui/material';
import Customerlist from './Customerlist';
import Traininglist from './Traininglist';

export default function Navigation() {

    const [value, setValue] = useState('customers')

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <h2>Personal Trainer</h2>
            <Tabs value={value} onChange={handleChange}>
                <Tab value='trainings' label='Calendar' />
                <Tab value='customers' label='Customers' />
            </Tabs>
            {value === 'trainings' && <Traininglist />}
            {value === 'customers' && <Customerlist />}
        </div>
    );
}