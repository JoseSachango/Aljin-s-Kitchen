    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemIcon from '@material-ui/core/ListItemIcon';
    import ListItemText from '@material-ui/core/ListItemText';
    import Divider from '@material-ui/core/Divider';
    import InboxIcon from '@material-ui/icons/Inbox';
    import DraftsIcon from '@material-ui/icons/Drafts';
    import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    }));

    function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
    }

    export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                Saved recipes
            </Typography>
        <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
            <ListItemText primary="Saved recipe1" />
            </ListItem>
            <ListItemLink href="#simple-list">
            <ListItemText primary="Saved recipe2" />
            </ListItemLink>
        </List>
        </div>
    );
    }
