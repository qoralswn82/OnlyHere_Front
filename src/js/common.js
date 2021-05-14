
/**
 * input 태그 value 가져오기 
 *  - state 명과 input 태그 name 명 동일
 */
inputValue =(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

