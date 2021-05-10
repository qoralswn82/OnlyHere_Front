import React from 'react';
import { Link } from "react-router-dom";
class Login extends React.Component{
    render(){
        return (
            <div>
                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호"/>
                <button>로그인</button>
                <button>회원가입</button>
                <Link to="/findId">
                    <a>아이디 찾기</a>
                </Link>
                <Link to="/findPw">
                <a>비밀번호 찾기</a>
                </Link>
            </div>
        )
    };
}
export default Login;