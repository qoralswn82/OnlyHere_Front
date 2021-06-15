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
            <input type="text" name="gp_name" id="gp_name"/>
            <input type="text" name="gp_introduce" id="gp_introduce"/>
          </div>
        </div>

        <div className="container2">

        </div>
        </form>
        </section>
      );
    }

}


export default Create;
