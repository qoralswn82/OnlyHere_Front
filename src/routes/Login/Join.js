import React from 'react';

class Join extends React.Component {
    state={
        dupId : false
    }
    render(){
        return(<div>
            <div>
                <h3>요기서만 로고</h3>
                <ol class="breadcrumb">
                    <li >약관동의</li>
                    <li><i class="xi-angle-right"></i></li>
                    <li class="active">회원정보 입력</li>
                </ol>
            </div>
            <div>
                <label>아이디</label>
                <input type="text"/>
                <button>중복확인</button>
                {this.state.dupId ? <label>아이디 중복</label> : <label></label>}
                <label>비밀번호</label>
                <input type="password"/>
                <label>비밀번호 확인</label>
                <input type="password"/>
                <label>이름</label>
                <input type="text"/>
                <label>닉네임?</label>
                <input type="text"/>
                <label>이메일</label>
                <input type="email"/>
                <label>전화번호</label>
                <input type="text"/>
                <input type="text" placeholder="인증번호를 입력하세요."/>
                <button>취소</button>
                <button>확인</button>
            </div>
        </div>)
    };
}

export default Join;