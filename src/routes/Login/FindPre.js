import React from 'react';

class FindPre extends React.Component{
    state ={
        
    }
    render(){
        return(
            <div>
                <div>비밀번호를 찾고자 하는</div><div><p>아이디를 입력해 주세요.</p></div>
                <input type="text" placeholder="아이디를 입력하세요"/>
                <button>다음</button>
            </div>
        ); 
    }
};

export default FindPre;