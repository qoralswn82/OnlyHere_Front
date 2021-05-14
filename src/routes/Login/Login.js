import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component{
    state = {
        
            id : null,
            pw : null
        
    }

    // getId = (e)=>{
    //     this.setState({
    //         id : e.target.value
    //     })
    // }

    // getPw = (e)=>{
    //     this.setState({
    //         pw : e.target.value
    //     })
    // }
        inputValue =(e)=>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }

    Login=()=>{
        //1. id,pw db 저장
        //2. 로그인 성공 -> 메인화면으로 이동
        //3. 실패 시 -> alert 창 알림?
    }
    render(){
        return (
            <div>
                <input type="text" name="id"  onBlur={(e)=>{this.inputValue(e)}} placeholder="아이디"/>
                <input type="password" name="pw"  onBlur={(e)=>{this.inputValue(e)}} placeholder="비밀번호"/>
                <h1>ID : {this.state.id}</h1>
                <h1>PW : {this.state.pw}</h1>
                <button onClick={this.Login()}>로그인</button>
                <Link to="/login/terms"><button>회원가입</button></Link>
                <Link to="/login/findId">
                    <a>아이디 찾기</a>
                </Link>
                <Link to="/login/findPw">
                <a>비밀번호 찾기</a>
                </Link>
            </div>
        )
    };
}
export default Login;