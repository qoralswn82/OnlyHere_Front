import React from 'react';

class FindIdComp extends React.Component{
    state ={
        date : '2021.05.10'
    }
    render(){
        return(
            <div>
                <div>고객님의 정보와</div><p></p><div>일치하는 아이디 목록입니다.</div>
                <div>아이디</div><div>가입일자 : {this.date}</div>
                <button>로그인</button>
                <button>비밀번호 찾기</button>
            </div>
        ); 
    }
};

export default FindIdComp;