import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class Layout extends React.Component {
  state = {
    type: "ind" //
  };
  render() {
    return (
      <div class="container">
        <Header />
        <Menu type={this.state.type} />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
