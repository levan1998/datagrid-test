import React, {useEffect, useState} from 'react'
import { DataGridPro } from '@mui/x-data-grid-pro';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@mui/styles';
import {  TextField, IconButton } from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import rows from './rows.json'
import { useHistory } from 'react-router';


const Category = () => {
    const classes = useStyles();
    const route = useHistory();
    const [filteredRows,setFilteredRows] = useState([]);
    const [search,setSearch] = useState('');
    const [curRow,setCurRow] = useState({});
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    const handleClear = () =>{
      setSearch('');
    }
    const currentlySelected =(params)=> {
      const value = params.colDef.field;
      const api = params.api;
  
      if (!(value === "edit" || value === "delete")) {
        return;
      }
      setCurRow(params.row)
      route.push({pathname: '/edit-category', state: {details: params.row}})
    }
  
  
    const columns = [ 
        {
          field: 'title',
          headerName: 'Название',
          editable: false,
          flex:1,
        },
        {
          field: 'description',
          headerName: 'Описание',
          editable: false,
          flex:1,
        },
        {
          field: 'order',
          headerName: 'Порядок отображения',
          type: 'number',
          editable: false,
          flex:1,
        },
        {
          field: 'active',
          headerName: 'Активен',
          description: 'This column has a value getter and is not sortable.',
          type: 'boolean',
          editable: false,
          flex: 1,
        }, 
        {
            field: 'edit',
            headerName: 'Edit',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            editable: false,
            flex:1,
            renderCell: (params) => {
                return (
                  <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                  Edit
                </Button>    
                )
            }
          },
          {
            field: 'delete',
            headerName: 'Delete',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            editable: false,
            flex:1,
            renderCell: (params) => {
                return (
                  <Button  variant="contained"
                  color="secondary" startIcon={<DeleteIcon />}>
                  Delete
                </Button>    
                )
            }
          },
      ];

useEffect(()=>{
    const res = rows.filter((row)=>{
        return row.active === true;
    })
    setFilteredRows(res);
   
},[])
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                       <TextField
                fullWidth
                id="standard-bare"
                variant="filled"
                defaultValue={search}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton>
                    <Close onClick={handleClear}/>
                  </IconButton>
                  ),
                }}
              />
        <DataGridPro
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          pagination={true}
          checkboxSelectionVisibleOnly={true}
          onCellClick={currentlySelected}
        />
      </div>
    )
}

export default Category

const useStyles = makeStyles({
    actions: {
        cursor: 'pointer',

    },
})