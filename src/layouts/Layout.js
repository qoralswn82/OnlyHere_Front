import React, {Fragment} from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class Layout extends React.Component {
  state = {
    type: "ind", //
    path : (window.location.pathname).slice(0,6) 
  }
  componentDidMount(){
    console.log(window.location.pathname);
    console.log(this.props.children);
    console.log(this.props);
   
  }
  render() {
    return (
      <Fragment>
        {this.state.path === '/login' ?  
        <div>{this.props.children}</div>: 
        <div class="container">
          <Header />
          <Menu type={this.state.type} />
          <div>{this.props.children}</div>
          <Footer />
          </div>
        }
      </Fragment>
    );
  }
}

export default Layout;
