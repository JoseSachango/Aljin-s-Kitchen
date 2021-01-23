import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from '../Form';
import List from '../List';
import Card from '../Card';
import Saved from '../Saved';


    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        },
        paper: {
        minHeight: '80vh',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
        container: {
        margin: `0 ${theme.spacing(2)}px`
        }
    }));
    
    export default function App() {
        const [list, setList] = useState([]);
        const inputRef = useRef();
        const classes = useStyles();
    
        const onSubmit = (e) => {
        e.preventDefault()
        setList([...list, inputRef.current.value])
        }


    return (

    <div className={classes.root}>
        <Grid className={classes.container} container spacing={3}>
            <Grid item xs={12} sm={2}>
                <Paper className={classes.paper}>
                    <Form />
                    <List />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Paper className={classes.paper}>
                    <Card />
                </Paper>
                
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                <Saved/>
                </Paper>
            </Grid>
        </Grid>
    </div>
    )
}

    