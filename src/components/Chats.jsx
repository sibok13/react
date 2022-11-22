import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

function Chats(props) {
  //console.log(props)
  const chatsList = props.chatList;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {Object.keys(chatsList).map((id) =>
        <ListItem
          key={id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <Link to={`/chats/${chatsList[id].id}`}><ListItemText primary={`${chatsList[id].name}`} /></Link>
        </ListItem>
      )}
    </List>
  );
}

export default Chats;