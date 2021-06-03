import "./styles.css";
import Layout from "./layouts/Layout";
import { BrowserRouter, Route } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
import MyPage from "./routes/MyPage/MyPage"
import Login from "./routes/Login/Login";
import Terms from "./routes/Login/Terms";
import Join from "./routes/Login/Join";
import JoinComp from "./routes/Login/JoinComp";
import Find from "./routes/Login/Find";

export default function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      {/* path : '/login*'일 경우와 일반적인 화면 layout 파일 안에서 분기*/}
      <Layout>
        {/*test Route */}
        <Route path="/dashBoard" exact={true} component={dashBoard} />
        <Route path="/" exact={true} component={Main} />
        {/* Route 작성 */}
        <Route path="/myPage" exact={true} component={MyPage} />
        <Route path="/login" exact={true} component={Login} /> 
        <Route path="/login/terms" exact={true} component={Terms} /> 
        <Route path="/login/join" exact={true} component={Join} /> 
        <Route path="/login/joinComp" exact={true} component={JoinComp} /> 
        {/* 같은 파일 link path에 따른 분기 */}
        <Route path="/login/findId" exact={true} component={Find} /> 
        <Route path="/login/findPw" exact={true} component={Find} /> 
      </Layout>
    </BrowserRouter>
    // </div>
  );
}
