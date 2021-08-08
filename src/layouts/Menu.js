import React from "react";
import { Link } from "react-router-dom";
import {Paper,MenuList,MenuItem,Typography,ListItemIcon} from "@material-ui/core";
import {Dashboard, Group, Notifications, AttachFile} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

//import "./Layout.css";
const useStyles = makeStyles({
  root: {
    width: 230,
  },
});
const Menu = ({ type }) =>{
  const classes = useStyles();
  return type === "ind" ? (
 <Paper className={classes.root}>
 <MenuList>
   <MenuItem>
     <ListItemIcon>
       <Dashboard fontSize="small" />
     </ListItemIcon>
     <Typography variant="inherit" noWrap><Link to="/dashBoard">대시보드</Link></Typography>
   </MenuItem>
   <MenuItem>
     <ListItemIcon>
      <Group fontSize="small" />
     </ListItemIcon>
     <Typography variant="inherit" noWrap> 그룹</Typography>
   </MenuItem>
 </MenuList>
</Paper> 
  ) : (
<Paper className={classes.root}>
 <MenuList>
   <MenuItem>
     <ListItemIcon>
       <Dashboard fontSize="small" />
     </ListItemIcon>
     <Typography variant="inherit" noWrap><Link to="/dashBoard">대시보드</Link></Typography>
   </MenuItem>
   <MenuItem>
     <ListItemIcon>
      <Notifications fontSize="small" />
     </ListItemIcon>
     <Typography variant="inherit" noWrap> <Link>알림판</Link></Typography>
   </MenuItem>
   <MenuItem>
     <ListItemIcon>
      <AttachFile fontSize="small" />
     </ListItemIcon>
     <Typography variant="inherit" noWrap><Link>파일</Link></Typography>
   </MenuItem>
 </MenuList>
</Paper> 
  );
}
export default Menu;
