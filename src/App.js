// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Login, Test} from './pages';

function App() {
  return (
    <BrowserRouter>
    {/* path : '/login*'일 경우와 일반적인 화면 layout 파일 안에서 분기*/}
      <Layout>
        {/*test Route */}
        {/* <div style={{
          backgroundColor : "red",
          height: "100%"
        }}>테스트 입니다.</div> */}
        <Switch>
          <Route path="/login/hello"  component={Test} /> {/*부트스트랩 적용완료*/}
          <Route path="/login"  component={Login} /> {/*부트스트랩 적용완료*/}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
