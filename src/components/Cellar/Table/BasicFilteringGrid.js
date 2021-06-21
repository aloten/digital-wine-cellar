import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import MOCK_DATA from './MOCK_DATA.json'

export default function BasicFilteringGrid() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'vintage', headerName: 'Vintage', width: 150 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'producer', headerName: 'Producer', width: 150 },
    { field: 'countryCode', headerName: 'Country Code', width: 150 },
  ];

  return (
    <div style={{ height: 600, width: '100%', background: 'white' }}>
      <DataGrid
        rows={MOCK_DATA} columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
          ],
        }}
      />
    </div>
  );
}