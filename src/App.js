import "./styles.css";
import Layout from "./layouts/Layout";
import { BrowserRouter, Route } from "react-router-dom";
import dashBoard from "./routes/Dashboard";
import Main from "./routes/Main";
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
