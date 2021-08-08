import { Checkbox, FormControlLabel, FormGroup, Grid } from '@material-ui/core';
import React,{setState} from 'react';
import { Link } from 'react-router-dom';


class Terms extends React.Component {
    state={
        all : false,
        userTerms : false,
        indInfoTerms : false
    }

    chckTerms = (e)=>{
        var {value} = e.target;
        if(value === "all"){
            if(!this.state.all){
                this.setState({
                    all : true,
                    userTerms : true,
                    indInfoTerms : true
                })
            }
            else{
                this.setState({
                    all : false,
                    userTerms : false,
                    indInfoTerms : false
                })
            }
        }
        else if(value === "userTerms"){
            if(!this.state.userTerms){
                this.setState({
                    userTerms : true,
                })
                if(this.state.indInfoTerms===true){
                    this.setState({
                        all : true
                    })
                }
            }
            else{
                this.setState({
                    userTerms : false,
                })
                if(this.state.indInfoTerms===false){
                    this.setState({
                        all : false
                    })
                }
            }
        }
        else{
            if(!this.state.indInfoTerms){
                this.setState({
                    indInfoTerms : true
                })
                if(this.state.userTerms===true){
                    this.setState({
                        all : true
                    })
                }
            }
            else{
                this.setState({
                    indInfoTerms : false
                })
                if(this.state.userTerms===false){
                    this.setState({
                        all : false
                    })
                }
            }
        }
    }

    validationJoin=_=>{
        console.log(this.props);
        if(!this.state.all){
            alert("이용약관을 모두 동의해 주세요.");
            console.log("들어올텐데?")
            return false;
        }
        if(!this.state.userTerms){
            alert("이용약관을 동의해 주세요.");
            return false;
        }
        if(!this.state.indInfoTerms){
            alert("개인정보 수집 및 이용약관을 동의해 주세요.");
            return false;
        }
       return true;
    }

    confirmTerms=()=>{
        const {history} = this.props;
        if(!(this.validationJoin())){
            return;
        }
        history.push("/login/join");
    }

    
    render(){
        return (
           

            // <Container>
            //     <Row>
            //         <Col></Col>
            //         <Col>
            //         <Container>
            //             <Row>
            //             <Image src="/img/yogiseoman.png" rounded />
            //             </Row>
            //             <Row>
            //             <ol class="breadcrumb">
            //         <li class="active">약관동의</li>
            //         <li><i class="xi-angle-right"></i></li>
            //         <li>회원정보 입력</li>
            //     </ol>
            //             </Row>
            //             <Row>

            //             <label><input type="checkbox" name="all" value="all" onClick={(e)=>this.chckTerms(e)} checked={this.state.all}/>요기서만 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.<p></p></label>
            //     <label><input type="checkbox" name="userTerms" value="userTerms" onClick={(e)=>this.chckTerms(e)} checked={this.state.userTerms}/>이용약관 동의 (필수)</label>
            //     <div>내용</div>
            //     <label><input type="checkbox" name="indInfoTerms" value="indInfoTerms" onClick={(e)=>this.chckTerms(e)} checked={this.state.indInfoTerms}/>개인정보 수집 및 이용 동의 (필수)</label>
            //     <div>내용</div>
            //     <Link to ="/login"><Button>취소</Button></Link>
            //     <Button onClick={this.confirmTerms} >확인</Button><p></p>
            //     <a>이용약관 | </a>
            //     <a>개인정보 처리방침 | </a>
            //     <a>회원정보 고객센터</a>
            //             </Row>
            //         </Container>
            //         </Col>
            //         <Col></Col>
            //     </Row>
            // </Container>
            <div>

<Grid
 item xs={12}>
                <Grid container justifyContent="center" spacing={2}>

                <FormGroup row>
      <FormControlLabel
        // control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      </FormGroup>

                </Grid>
</Grid>
            </div>
        )
    };
}

export default Terms;