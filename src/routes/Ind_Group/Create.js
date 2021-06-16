import React from "react";
import "./Create.css";

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
            그룹 소개 <p/><input type="text" name="gp_introduce" id="gp_introduce"/>
          </div>
        </div>

        <div className="container2">
          <div className="unselected">
            <div className="box">
            </div>
          </div>
          <div className="selected">
            <div className="box">
            </div>
          </div>

        </div>
        </form>
        </section>
      );
    }

}


export default Create;
