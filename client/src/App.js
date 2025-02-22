import React, { useContext } from "react";
import TopBar from "./components/topbar/TopBar";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />        {/* if there is a user write page,otherwise register page */}
        <Route path="/settings" element={user ? <Setting /> : <Register/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;