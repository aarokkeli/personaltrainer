import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import moment from 'moment';
import 'moment-timezone';

export default function Traininglist() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchTrainings(), []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(err => console.error(err))
    }

    const dateFormatter = (params) => {
        return moment(params.value).format('DD/MM/YYYY HH:mm');
    }

    const nameFormatter = (params) => {
        return params.data.customer.firstname + ' ' + params.data.customer.lastname;
    }

    const sizeToFit = () => {
        gridOptions.api.sizeColumnsToFit();
    }

    const columns = [
        {
            headerName: 'Date',
            field: 'date',
            sortable: true,
            filter: true,
            valueFormatter: dateFormatter,
            resizable: true
        },
        {
            headerName: 'Duration (min)',
            field: 'duration',
            sortable: true,
            filter: true,
            resizable: true
        },
        {
            headerName: 'Activity',
            field: 'activity',
            sortable: true,
            filter: true,
            resizable: true
        },
        {
            headerName: 'Customer',
            field: 'customer',
            valueGetter: nameFormatter,
            sortable: true,
            filter: true,
            resizable: true
        },
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
                    rowData={trainings}
                    gridOptions={gridOptions}
                />
            </div>
        </div>
    );
}