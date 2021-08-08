import { Link } from "react-router-dom";
import {Button, FormControl, Grid,IconButton,Input,InputAdornment,InputLabel,Paper, TextField, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import {useInput} from '../../components/useInput'

import { useState } from "react";

const login = (id,pw)=>{
    // 로그인 정보 체크
    // 성공 1 
    const result = 1;
    
    if(result === 1){
       
    }
};
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
 
const Login = ()=>{
  
    const id = useInput("");
    console.log("id value : ",id.value);
    const pw = useInput("");
    console.log("pw value : ",pw.value);
    const classes = useStyles();


    const [values, setValues] = useState({
       // amount: '',
        password: '',
      //  weight: '',
      //  weightRange: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        // <Grid fluid>
        //     <Grid>
        //         <Grid></Grid>
        //         <Grid>
        //         <Grid>
        //             <Grid>
        //                {/* <Image src="/img/yogiseoman.png" rounded /> */}
        //             </Grid>
        //             <Row>
        //             <InputGroup size="lg">
        //                 <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="ID" {...id}/>
        //             </InputGroup>
        //             <InputGroup size="lg">
        //                 <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="PW" {...pw}/>                                            
        //             </InputGroup>
        //             </Row>
        //             <Row><Button variant="outline-warning" onClick={login(id,pw)}>로그인</Button></Row>
        //             <Row>
        //                 <Col><Link to="/login/terms">회원가입</Link></Col>
        //                 <Col><Link to="/login/findId">아이디 찾기</Link></Col>
        //                 <Col><Link to="/login/findPw">비밀번호 찾기</Link></Col>
        //             </Row>
        //         </Grid>
        //         </Grid>
        //         <Col></Col>
        //     </Grid>
        // </Grid>
      

        <div>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                {/* {[0, 1, 2].map((value) => (
                    value === 1 ? ( */}
                        {/* <Grid key={value} item> */}
                        <Grid item>
                            <image src="/img/logo_square_ind.jpg" />   
                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="ID" placeholder="ID" {...id} />
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <FormControl >
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    placeholder="PW" {...pw}
                                />
                                </FormControl>
                            </div>
                                <Button variant="outlined" color="secondary" onClick={login(id,pw)}>로그인</Button>
                                <Grid justifyContent="center">
                                    <Typography><Link to="/login/terms">회원가입</Link>
                                   <Link to="/login/findId">아이디 찾기</Link>
                                   <Link to="/login/findPw">비밀번호 찾기</Link></Typography>
                                </Grid>
                            </Grid>
                    {/* ):(
                        <Grid key={value} item></Grid>  
                    )
                ))} */}
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;