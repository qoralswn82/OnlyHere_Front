import "./styles.css";
import Layout from "./layouts/Layout";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
import IG_Main from "./routes/Ind_Group/Main";
import IG_Create from "./routes/Ind_Group/Create";

export default function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Layout>
        {/*test Route */}
        <Route path="/dashBoard" exact={true} component={dashBoard} />
        <Route path="/" exact={true} component={Main} />
        <Route path="/ind_main/grp/grp_main" exact={true} component={IG_Main} />
        <Route path="/ind_main/grp/grp_create" exact={true} component={IG_Create} />
        {/* Route 작성 */}
      </Layout>
    </BrowserRouter>
    // </div>
  );
}
