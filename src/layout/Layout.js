import {useState} from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import {Grid,Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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

const Layout = (props)=>{
    const classes = useStyles();
    const [path,setPath] = useState((window.location.pathname).slice(0, 6));
    const [type,setType] = useState('grp');

    return (
        <div class={useStyles.root}>
          {path === '/login' ?
            props.children :
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <Header type={type}/>
                </Grid>
               
                  <Grid item xs={2}><Menu type={type} /></Grid>
                  <Grid item xs={10}>{props.children}</Grid>
               
                <Grid>
                <Footer />
                </Grid>
              </Grid>
          }
        </div>
      );
}

export default Layout ;