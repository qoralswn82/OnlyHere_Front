import React from 'react';
import { Link } from 'react-router-dom';
// import counter from 'easytimer';
// import useTimer from 'easytimer-react-hook';


class Join extends React.Component {
    state={
        dupId : false,
        preCertification : false,
        certification : false,
        count: null,
        id : null,
        pw : null,
        name : null,
        nickNm : null,
        email : null,
        telNo : null
    }

    dupId = _=>{
        this.setState({
            dupId : true
        })
    }
    
    preCertification=_=>{
        //인증번호 발송 및 이메일로 전송
        //this.state.count 카운트 하기
        // const timer = new Timer();
        // timer.start({countdown: true, startValues: {seconds: 300}});
        // this.setState({
        //     count : timer.getTimeValues().toString()
        // })

        // timer.addEventListener('secondsUpdated', function (e) {
        //     const value =  timer.getTimeValues().toString();
        //     this.setState({
        //         count : value
        //     })
        // });
        
        // timer.addEventListener('targetAchieved', function (e) {
        //     this.setState({
        //         count : timer.getTimeValues().toString()
        //     })
        // });

        //easytimer -react- hook
        // const [timer, isTargetAchieved] = useTimer({
        //     /* Hook configuration */
        //     timeValues: counter
           
        // });
    
        // timer.start({
        //     /* EasyTimer start configuration */
        //     startValues : {seconds: 300},
        //     countdown : true
        // });
        //성공 시
        this.setState({
            preCertification : true
        })
        //실패 시 -> x 
    }

    getCertification=(e)=>{
        
        //발송한 인증번호와 비교 후 
        this.setState({
            certification : true
        })
        alert("인증이 완료 되었습니다.");
    }

    validationJoin(){
        if(!this.state.dupId){
            alert("아이디 중복 체크를 해주세요.");
            return false;
        }
        if(!this.state.certification){
            alert("인증을 진행해 해주세요.");
            return false;
        }
        return true;
    }

    join=_=>{
        if(!this.validationJoin()){
            return;
        }
        //회원가입 db
        const {history} = this.props;
        history.push("/joinComp");
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
                <button onClick={this.dupId}>중복확인</button>
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
                <button onClick={this.preCertification}>인증번호 받기</button>
                { this.state.preCertification &&
                <div>                
                    <input type="text" onChange={(e)=>this.getCertification(e)} placeholder="인증번호를 입력하세요."/>
                    <label>{this.state.count}</label>
                </div>
                }
                {/** 취소 없이 상단 로고를 눌러 자동 취소 */}
                <button onClick={this.join}>가입하기</button>
            </div>
        </div>)
    };
}

export default Join;