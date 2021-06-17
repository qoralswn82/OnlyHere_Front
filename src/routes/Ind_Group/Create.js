import React from "react";
import "./Create.css";
import { Link } from "react-router-dom";

class Create extends React.Component{

    render() {

      return (
        <section>
        <form name="" action="">
        <div className="container1">
          <div className="gp_image">
          </div>
          <div className="gp_information">
            그룹명<p/><input type="text" name="gp_name" id="gp_name"/>
            그룹 소개 <p/><textarea type="text" name="gp_introduce" id="gp_introduce"></textarea>
          </div>
        </div>

        <div className="container2">
          <div className="unselected">
            <div className="title">친구 목록</div>
            <div className="box">
              <div className="search">
                <input type="text" name="gp_name" id="gp_name"/>
                <button>검색</button>
              </div>
              <div className="members">
                <div className="member">
                  <div className="m_image"></div>
                  <div className="m_name">굴개</div>
                  <input type="checkbox" name="" value=""/>
                </div>
                <div className="member">
                  <div className="m_image"></div>
                  <div className="m_name">개굴</div>
                  <input type="checkbox" name="" value=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="selected">
            <div className="title">추가된 멤버</div>
            <div className="box">
            <div className="search">
              <input type="text" name="gp_name" id="gp_name"/>
              <button>검색</button>
            </div>
            <div className="members">
              <div className="member">
                <div className="m_image"></div>
                <div className="m_name">굴개</div>
                <input type="checkbox" name="" value=""/>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="container3">
         <div className="title">그룹 공개</div>
         <div className="gp_type">
          <ul className="typeList">
            <li className="typeListItem">
              <label className="uCheck">
                <input type="radio" className="checkInput" name="gpOpenType"/>
                <span className="checkLabel">
                  <span className="shape"></span>
                  <span className="text">
                    <strong>비공개 그룹</strong>
                    <span className="msg">그룹이 공개되지 않습니다. 초대를 통해서만 가입할 수 있습니다.</span>
                  </span>
                </span>
              </label>
            </li>
            <li className="typeListItem">
              <label className="uCheck">
                <input type="radio" className="checkInput" name="gpOpenType"/>
                <span className="checkLabel">
                  <span className="shape"></span>
                  <span className="text">
                    <strong>그룹명 공개 그룹</strong>
                    <span className="msg">누구나 그룹을 검색으로 찾아 그룹 소개를 볼 수 있지만, 게시글은 멤버만 볼 수 있습니다.</span>
                  </span>
                </span>
              </label>
            </li>
            <li className="typeListItem">
              <label className="uCheck">
                <input type="radio" className="checkInput" name="gpOpenType"/>
                <span className="checkLabel">
                  <span className="shape"></span>
                  <span className="text">
                    <strong>공개 그룹</strong>
                    <span className="msg">누구나 그룹을 검색해 찾을 수 있고, 그 그룹 소개와 게시글을 볼 수 있습니다.</span>
                  </span>
                </span>
              </label>
            </li>
          </ul>
         </div>
        </div>

        <div className="container4">
          <Link to='/ind_main/grp/grp_main'>
            <button type="button" className="btn_cancel">취소</button>
          </Link>
          <button type="submit" className="btn_confirm">완료</button>
        </div>
        </form>
        </section>
      );
    }

}


export default Create;
