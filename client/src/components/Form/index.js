import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        alignItemsAndJustifyContent: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        
        <form className={classes.root} noValidate autoComplete="off" className={classes.alignItemsAndJustifyContent}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
    
    );
}
