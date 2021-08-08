import { Checkbox, FormControlLabel, FormGroup, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

// import counter from 'easytimer';
// import useTimer from 'easytimer-react-hook';
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

class Join extends React.Component {
    state={
        dupId : false,
        preCertification : false,
        certification : false,
        count: null,
        
            id : null,
            pw : null,
            pwChck: null,
            name : null,
            nickNm : null,
            email : null,
            telNo : null,
       
        
            dupIdMsg : null,
            pwMsg : null,
            pwChckMsg : null,
            emailMsg : null,
            telNoMsg : null,
            certificationMsg : null
        
        
    }
    

    //아이디 중복 체크
    dupId = _=>{
        // db 아이디 중복 체크 (response | 중복 : 0 사용가능 : 1 )
        const res = 1;
        if(res === 0){
            alert('아이디가 중복되었습니다. 사용 불가능한 아이디 입니다.');
        }
        else if(res === 1){
            this.setState({
                dupId : true
            })
        }
        else{
            alert('아이디 중복 체크를 할 수 없습니다. 관리자에게 문의 하세요.');
        }
        
    }
    
    //인증번호 발송
    preCertification=_=>{
        //인증번호 발송 및 이메일로 전송
        //인증번호 테이블 어떻게 할지.....?
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

    //인증번호 확인
    getCertification=(e)=>{
        
        //발송한 인증번호와 비교 후 (res o : 1 x : 0)
        const res = 0;
        if(res === 1){ 
            this.setState({
                certification : true,
                certificationMsg : "인증이 완료되었습니다."
            })
        }
        else if(res === 0){
            this.setState({
                certificationMsg : "인증번호가 일치하지 않습니다."
            })
        }
    }

    //회원가입 validation check
    validationJoin(){
        var regExp;
        var chck = true;
        if(!this.state.dupId){
            this.setState({
                dupIdMsg : "아이디 중복 체크를 해주세요."
            })
            chck =  false;
        }
        //아이디 정규화식
        regExp = '몰라';
        if(!regExp.test(this.state.id)){
            this.setState({
                dupIdMsg : "아이디 정규화식 어쩌구 저쩌구에 알맞지 않음"
            })
            chck =  false;
        }
        //비밀번호 정규화식
        regExp = '몰라';
        if(!regExp.test(this.state.pw)){
            this.setState({
                pwMsg : "비밀번호 정규화식 어쩌구 저쩌구에 알맞지 않음"
            })
            chck =  false;
        }
        //비밀번호 확인
        if(!(this.state.pw === this.state.pwChck)){
            this.setState({
                pwChckMsg : "비밀번호가 동일하지 않습니다."
            })
            chck =  false;
        }
        //이메일 정규화식
        regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(!regExp.test(this.state.email)){
            this.setState({
                emailMsg : "이메일 주소를 다시 확인해주세요"
            })
            chck =  false;
        }
        //전화번호 정규화식
        regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
        if(!regExp.test(this.state.telNo)){
            this.setState({
                telNoMsg : "전화번호를 다시 확인해주세요"
            })
            chck =  false;
        }
        
        if(!this.state.certification){
            this.setState({
                certificationMsg : "아이디 중복 체크를 해주세요."
            })
            chck =  false;
        }
    }

    //회원가입
    join=_=>{
        if(!this.validationJoin()){
            return;
        }
        //회원가입 db
        const {history} = this.props;
        history.push("/login/joinComp");
    }

    inputValue =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    idChck=(e)=>{
        this.inputValue(e);
        

    }
    render(){
        
        return(        
//         <Container>
//                 <Row>
//                     <Col></Col>
//                     <Col>
//                     <Container>
//                         <Row>
//                         <Image src="/img/yogiseoman.png" rounded />
//                         </Row>
//                         <Row>
//                         <ol class="breadcrumb">
//                     <li >약관동의</li>
//                     <li><i class="xi-angle-right"></i></li>
//                     <li class="active">회원정보 입력</li>
//                 </ol>
//                         </Row>
//                         <Row>
//  {/** clone : naver 회원가입 시 validation 체크 시 모두 onBlur 사용 */} 
//  <label>아이디</label>
//                 <input type="text" name="id" onBlur={(e)=>this.idChck(e)}/>
//                 <Button onClick={this.dupId}>중복확인</Button>
//                 <label>{this.state.dupIdMsg}</label>
//                 <label>비밀번호</label>
//                 <input type="password"/>
//                 <label>{this.state.pwMsg}</label>
//                 <label>비밀번호 확인</label>
//                 <input type="password"/>
//                 <label>{this.state.pwChckMsg}</label>
//                 <label>이름</label>
//                 <input type="text"/>
//                 <label>닉네임?</label>
//                 <input type="text"/>
//                 <label>이메일</label>
//                 <input type="email"/>
//                 <label>{this.state.emailMsg}</label>
//                 <label>전화번호</label>
//                 <input type="text"/>
//                 <label>{this.state.telNoMsg}</label>
//                 <Button onClick={this.preCertification}>인증번호 받기</Button>
//                 { this.state.preCertification &&
//                 <div>   
//                     {/** clone : naver 회원가입 시 인증번호 */}             
//                     <input type="text" onBlur={(e)=>this.getCertification(e)} placeholder="인증번호를 입력하세요."/>
//                     <label>{this.state.count}</label>
//                     <label>{this.state.certificationMsg}</label>
//                 </div>
//                 }
//                 {/** 취소 없이 상단 로고를 눌러 자동 취소 */}
//                 <Button onClick={this.join}>가입하기</Button>
//                         </Row>
//                     </Container>
//                     </Col>
//                     <Col></Col>
//                 </Row>
//             </Container>
        <div>

        </div>
        
        )
    };
}

export default Join;