import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ComponentsTesting from "./pages/componentsTesting/ComponentsTesting";
import Homepage from "./pages/Homepage";
import NewPost from "./pages/newPost/NewPost.jsx";
import NewCommunity from "./pages/newCommunity/NewCommunity.jsx";
import ForgotPasswordPage from "./pages/LoginRegister/ForgotPasswordPage";
import LoginPage from "./pages/LoginRegister/LoginPage";
import RegisterPage from "./pages/LoginRegister/RegisterPage";
import NavBar from "./components/NavBar/NavBar";
import CommunitiesPage from "./pages/Communities/CommunitiesPage";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          exact
          path="/ComponentsTesting"
          element={<ComponentsTesting />}
        />
        <Route exact path="/NewPost" element={<NewPost />} />
        <Route exact path="/NewCommunity" element={<NewCommunity />} />
        <Route exact path="/Communities" element={<CommunitiesPage />} />
        <Route exact path="/Posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
