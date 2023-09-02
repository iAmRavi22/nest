import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Contact from "./components/Contact";
import About from "./components/About";
import Director from "./components/Director";
import Tl from "./components/Tl";
import Hr from "./components/Hr";
import Page404 from "./components/Page404";
import Users from "./components/Users";
import User1 from "./components/User1";
import User2 from "./components/User2";
import User3 from "./components/User3";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Outlet /> */}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* PARENT */}
        <Route path="/" element={<AppLayout />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact/" element={<Contact />}>
            <Route index element={<Tl />}></Route>
            <Route path="director" element={<Director />}></Route>
            <Route path="tl" element={<Tl />}></Route>
            <Route path="hr" element={<Hr />}></Route>
          </Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/users/" element={<Users />}>
            <Route path="user1" element={<User1></User1>}></Route>
            <Route path="user2" element={<User2></User2>}></Route>
            <Route path="user3" element={<User3></User3>}></Route>
          </Route>
        </Route>

        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
