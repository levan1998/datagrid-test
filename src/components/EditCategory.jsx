import React from 'react'
import { useLocation } from 'react-router'
import {  TextField } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import {FormControlLabel,Checkbox} from '@mui/material';



const EditCategory = () => {
    const {state} = useLocation();
    const classes = useStyles();
    return (
        <div className={classes.main}>
           <TextField label='Название' autoFocus  color={'secondary'} className={classes.root} id={'title'}  variant="standard" defaultValue={state.details.title}/>
           <TextField multiline
          rows={4} label='Описание'  color={'secondary'} className={classes.root} id={'description'}  defaultValue={state.details.description}/>
           <TextField
           className={classes.root}
          id="standrad-number"
          label="Порядок отображения"
          type="number"
          defaultValue={state.details.order}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1} }}
          color={'secondary'}
            />
            <FormControlLabel control={
                <Checkbox
                    color='secondary'
                    defaultChecked={state.details.active}
                />}
                    label='Активен'/>
            </div>
            
    )
}

export default EditCategory

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '20px 0px',
        width: '520px'

    },
    root : {
        "& .MuiInputBase-root": {
        marginBottom: '15px'

    }
}
})