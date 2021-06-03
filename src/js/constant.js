const MessageData = {
    // message 정의 규칙
    // html파일명 {
    //     메세지명: "메세지내용",
    // },
    // 필수값 체크 : has***
    // 입력값 체크 : chk***
    // 데이터없음 : notFound***
    // 예외 체크 : exception***
    // 서버오류 : serverException
	// 등록완료 : enroll**
	// 수정완료 : edit**
	// 저장완료 : save**
	// 삭제 완료 : deleted**
	// 권한 체크 : auth**
	// 인증/확인 완료 : done**
	// ** 오류 : error**
	//저장 체크 : reChkSave**
    server: {
        exception: "처리중 오류가 발생했습니다.",
    },


};

let OptionData = {
    ALL: {cdNo: null, cdNm: "전체"},
    ALL_U: {cdNo: undefined, cdNm: "전체"},
    SELECT: {cdNo: null, cdNm: "선택"},
    SELECT_U: {cdNo: undefined, cdNm: "선택"}
};

const ResponseCode = {
    OK: "0000",
    BAD_REQUEST: "1400",
    INTERNAL_SERVER_ERROR: "1500",
    CRUD_ERROR: "1501",
    DELETED_NAT_BLNG_INFO: "1502",
    ETC_ERROR: "9999",
};

let Constant = {
    ResponseCode,
    MessageData,
    PAGE_SIZE: [15, 30, 50, 100],
    CrudType: {C: "C", R: "R", U: "U", D: "D"},
    YesOrNo: {Y: "Y", N: "N"},
    TOP_MANAGER_ID:"admin"
};
