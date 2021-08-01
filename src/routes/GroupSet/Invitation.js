import React from "react";
import "./Invitation.css";
import { Link } from "react-router-dom";

class Invite extends React.Component {
  render() {
    return (
      <section>
        <div className="gd">
          <div className="i_person">
            <ul className="ipList">
              <li className="ipListItem">
                <div className="ip_image"></div>
                <div className="ip_name"></div>
                <div className="ip_accept">
                  <button className="accept">수락</button>
                  <button className="reject">거절</button>
                </div>
              </li>
              <li className="ipListItem">
                <div className="ip_image"></div>
                <div className="ip_name"></div>
                <div className="ip_accept">
                  <button className="accept">수락</button>
                  <button className="reject">거절</button>
                </div>
              </li>
              <li className="ipListItem">
                <div className="ip_image"></div>
                <div className="ip_name"></div>
                <div className="ip_accept">
                  <button className="accept">수락</button>
                  <button className="reject">거절</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Invite;
