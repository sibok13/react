import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

function Chats(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.chatsList.map((elm) => (
        <ListItem
          key={elm.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <a href={`${elm.id}`}><ListItemText primary={`${elm.name}`} /></a>
        </ListItem>
      ))}
    </List>
  );
}

export default Chats;