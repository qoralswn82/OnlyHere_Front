import React from "react";
//import "./Layout.css";
import { Link } from "react-router-dom";
import {Grid,Paper,Button,Popper,Grow, ClickAwayListener, MenuItem, MenuList, ListItemIcon} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function Header({ type }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

   // return focus to the button when we transitioned from !open -> open
   const prevOpen = React.useRef(open);
   React.useEffect(() => {
     if (prevOpen.current === true && open === false) {
       anchorRef.current.focus();
     }
 
     prevOpen.current = open;
   }, [open]);
  return (
     
      <div class={useStyles.root}>
        <Grid container spacing={3}>
        <Grid item xs={2}>
          {type === 'ind'?
          // 이미지가 안떠 이상해...
          <Link to="/"><image src="/img/logo_header_ind.jpg" /></Link>
          :
          <image src="/img/logo_header_grp.jpg" />
          }
          
</Grid>
<Grid item xs={10}>
          <div style={{float: "right"}}>
          <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <ListItemIcon>
            {/* 사용자 이미지가 없을 경우 기본 아이콘으로 대체 */}
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          사용자명
        </Button>
        {/* click 시 목록 리스트 */}
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><Link to="/myPage">마이페이지</Link></MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
        </Grid>

        </Grid>
        </div>    
    
      
  );
}

export default Header;
