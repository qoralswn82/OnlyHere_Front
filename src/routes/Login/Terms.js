import React from 'react';

class Terms extends React.Component {
    render(){
        return (
            <div>
                <h3>요기서만 로고</h3>

                <ol class="breadcrumb">
                    <li class="active">약관동의</li>
                    <li><i class="xi-angle-right"></i></li>
                    <li>회원정보 입력</li>
                </ol>
                <label><input type="checkbox"/>요기서만 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.<p></p></label>
                <label><input type="checkbox"/>이용약관 동의 (필수)</label>
                <div>내용</div>
                <label><input type="checkbox"/>개인정보 수집 및 이용 동의 (필수)</label>
                <div>내용</div>
                <button>취소</button>
                <button>확인</button><p></p>
                <a>이용약관 | </a>
                <a>개인정보 처리방침 | </a>
                <a>회원정보 고객센터</a>
            </div>
        )
    };
}

export default Terms;