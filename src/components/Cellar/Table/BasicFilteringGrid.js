import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField'
import MOCK_DATA from './MOCK_DATA.json'

export default function BasicFilteringGrid() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'vintage', headerName: 'Vintage', width: 150 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'producer', headerName: 'Producer', width: 150 },
    { field: 'countryCode', headerName: 'Country Code', width: 150 },
  ];

  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(MOCK_DATA)

  // filter data upon search bar change
  const globalFilter = (e) => {
    setSearch(e.target.value)
    let newData = []
    for (const bottle of MOCK_DATA) {
      let flag = false
      for (const property in bottle) {
        if (search === bottle[property]) {
          flag = true
        }
      }
      if (flag === true) {
        newData.push(bottle)
      }
    }
    setFilteredData(newData)
  }

  return (
    <div style={{ height: 600, width: '100%', background: 'white' }}>
      <TextField
        label="Search"
        value={search}
        onChange={globalFilter}
      />
      <DataGrid
        rows={filteredData} columns={columns}
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