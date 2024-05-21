// src/router/Routes.jsx
// import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage"
import SignupPage from "../pages/Signup/SignupPage"
import FeedPage from "../pages/Feed/FeedPage"
import PostPage from "../pages/Post/PostPage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
