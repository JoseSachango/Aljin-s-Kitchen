import React from 'react';
import {
    List,
    ListItem,
    Avatar,
    ListItemAvatar,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    ListItemText
} from '@material-ui/core'

import {

    Delete as DeleteIcon
} from '@material-ui/icons';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const ListComponent = () => {
    return (
        <div>
            <div>
                <br/>
            <Typography gutterBottom variant="h5" component="h2">
                Pantry Items
            </Typography>
                <List dense={true}>
                    {generate(
                        <ListItem>
                            <ListItemText
                                primary="Single-line item"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>,

                    )}
                </List>
            </div>

        </div>

    )
}

export default ListComponent;