import "./styles.css";
import Layout from "./layouts/Layout";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
export default function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Layout>
        <Route path="/dashBoard" exact={true} component={dashBoard} />
        <Route path="/" exact={true} component={Main} />
      </Layout>
    </BrowserRouter>
    // </div>
  );
}
