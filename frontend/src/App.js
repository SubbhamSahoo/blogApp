import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/home";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import UserProfile from "./pages/Profile/Profile";
import Blogpost from "./pages/BlogPost/BlogPost";

const useAuth = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("social"));
  const { userInfo } = useSelector((state) => state.userLogin);

  if (userInfo || user) {
    console.log(userInfo, user);
    return userInfo;
  }
};

const Protected = () => {
  const isAuth = useAuth();

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<Protected />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blogpost/:id" element={<Blogpost />}/>
          {/* <Route path="/messenger" element={<Messenger />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
