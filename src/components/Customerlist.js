import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { CenterFocusStrong } from '@mui/icons-material';

export default function Customerlist() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchCustomers(), []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.error(err))
    }

    const sizeToFit = () => {
        gridOptions.api.sizeColumnsToFit();
    }

    const columns = [
        {
            headerName: 'First name',
            field: 'firstname',
            sortable: true,
            filter: true
        },
        {
            headerName: 'Last name',
            field: 'lastname',
            sortable: true,
            filter: true,
        },
        {
            headerName: 'Email',
            field: 'email',
            sortable: true,
            filter: true
        },
        {
            headerName: 'Phone',
            field: 'phone',
            sortable: true,
            filter: true
        },
        {
            headerName: 'Address',
            field: 'streetaddress',
            sortable: true,
            filter: true
        },
        {
            headerName: 'Postcode',
            field: 'postcode',
            sortable: true,
            filter: true
        },
        {
            headerName: 'City',
            field: 'city',
            sortable: true,
            filter: true
        }
    ]

    const gridOptions = {
        columnDefs: columns,
        animateRows: true,
        onGridReady: _ => sizeToFit()
    }

    return (
        <div>
            <div
                className='ag-theme-material'
                style={{
                    height: '900px',
                    width: 'auto',
                    margin: 'auto'
                }}
            >
                <AgGridReact
                    rowData={customers}
                    gridOptions={gridOptions}
                />
            </div>
        </div>
    );
}