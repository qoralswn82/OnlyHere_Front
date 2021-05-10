import "./styles.css";
import Layout from "./layouts/Layout";
import { BrowserRouter, Route } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
import MyPage from "./routes/myPage/MyPage"
import Login from "./routes/Login/Login";
import Terms from "./routes/Login/Terms";
import Join from "./routes/Login/Join";
import JoinComp from "./routes/Login/JoinComp";
import Find from "./routes/Login/Find";

export default function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Layout>
        {/*test Route */}
        <Route path="/dashBoard" exact={true} component={dashBoard} />
        <Route path="/" exact={true} component={Main} />
        {/* Route 작성 */}
        <Route path="/myPage" exact={true} component={MyPage} />
        <Route path="/login" exact={true} component={Login} /> 
        <Route path="/terms" exact={true} component={Terms} /> 
        <Route path="/join" exact={true} component={Join} /> 
        <Route path="/joinComp" exact={true} component={JoinComp} /> 
        <Route path="/findId" exact={true} component={Find} /> 
        <Route path="/findPw" exact={true} component={Find} /> 
      </Layout>
    </BrowserRouter>
    // </div>
  );
}
