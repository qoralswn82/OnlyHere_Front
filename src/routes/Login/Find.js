import React from 'react';

class Find extends React.Component{
    state = {
        radioState : 1
    };

    //라디오 버튼 
    chngRadio = (e)=>{
        if(e.target.value == "telNo"){
            console.log("전화번호");
            this.setState({
                radioState : 1
            })
        }
        else{
            console.log("이메일");
            this.setState({
                radioState : 2
            })
        }
        
    };
   
    render(){
        let {match} = this.props;
        return (
            <div>   
               {match.path === '/findId' ? <div>아이디</div> : <div>비밀번호</div>}<div>를 찾을 방법을 선택해 주세요.</div> 
               <label><input type="radio" name="findW" value="telNo" onClick={(e)=>this.chngRadio(e)} checked={this.state.radioState === 1 }/>전화번호로 인증</label>
               <div>회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야, 인증번호를 받을 수 있습니다.</div>
               {this.state.radioState === 1 ? 
               <div>
                   <label>이름 : <input type="text"/></label>
                   <label>전화번호 : <input type="text"/></label>
                   <button>인증번호 받기</button>
                   <label><input type="text"/></label>
               </div> :
               <div></div>}
               <label><input type="radio" name="findW" value="email" onClick={(e)=>this.chngRadio(e)} checked={this.state.radioState === 2 }/>이메일로 인증</label>
               <div>본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다.</div>
               {this.state.radioState === 2 ? 
               <div>
                   <label>이름 : <input type="text"/></label>
                   <label>이메일 : <input type="text"/></label>
                   <button>인증번호 받기</button>
                   <label><input type="text"/></label>
               </div> :
               <div></div>}
               <button>다음</button>
            </div>
        );
        
    }
}

export default Find;