import "./styles.css";
import Layout from "./layouts/Layout";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
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
      </Layout>
    </BrowserRouter>
    // </div>
  );
}
