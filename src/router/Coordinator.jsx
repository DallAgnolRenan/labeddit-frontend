// src/router/Coordinator.jsx
// import {useNavigate} from "react-router-dom"

export const goToLogin = (navigate) => {
  navigate("/")
}

export const goToSignup = (navigate) => {
  navigate("/signup")
}

export const goToFeed = (navigate) => {
  navigate("/feed")
}

export const goToPost = (navigate, id) => {
  navigate(`/post/${id}`)
}
