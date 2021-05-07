import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
function Header(params) {
  return (
    <div class="item header">
      <Link to="/">
        <div>요기서만</div>
      </Link>
      <div>마이페이지</div>
    </div>
  );
}

export default Header;
