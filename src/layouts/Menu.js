import React from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

function Menu({ type }) {
  return type === "ind" ? (
    <div class="item menu">
      <Link to="/dashBoard">
        <p>대시보드</p>
      </Link>
      <Link>
        <p>그룹</p>
      </Link>
      <Link>
        <p>할일</p>
      </Link>
      <Link>
        <p>즐겨찾기</p>
      </Link>
    </div>
  ) : (
    <div class="item menu">
      <Link>대시보드</Link>
      <Link>알림판</Link>
      <Link>파일</Link>
      <Link>할일</Link>
      <Link>즐겨찾기</Link>
    </div>
  );
}

export default Menu;
