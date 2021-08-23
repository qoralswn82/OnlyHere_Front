// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
    {/* path : '/login*'일 경우와 일반적인 화면 layout 파일 안에서 분기*/}
      <Layout>
        {/*test Route */}
        <div style={{
          backgroundColor : "red",
          height: "100%"
        }}>테스트 입니다.</div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
