import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
      <section>
        <div className="container1">
          <div className="btn_gpCreate">
            <Link to="/ind_main/grp/grp_create">
              <button> 그룹 만들기</button>
            </Link>
          </div>
          <div className="find">
            <form name="" action="">
              <input
                type="text"
                name="find_gp"
                id="find_gp"
                placeholder="그룹이름을 검색하세요."
              />
              <input type="submit" value="검색" />
            </form>
          </div>
        </div>

        <div className="container2">
          <div className="selection">
            <span>내 목록</span>
          </div>
          <div className="mygroup">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <ul className="grpList">
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">더하기 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹 만들기</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>

              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="grpListItem">
                <div className="gCover">
                  <a href="#" className="grpCreate">
                    <div className="cover">
                      <span className="icon -create">그룹 대표 이미지</span>
                    </div>
                    <div className="grpName">
                      <span className="uriText">그룹명</span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
