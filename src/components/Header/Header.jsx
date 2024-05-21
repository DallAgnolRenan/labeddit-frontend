// src/components/Header/Header.js
// import React from "react"
import {useNavigate} from "react-router-dom"
import styles from "./Header.module.scss"

const Header = ({isLoggedIn}) => {
  const navigate = useNavigate()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Lógica de logout aqui
      console.log("Logout")
      navigate("/login")
    } else {
      navigate("/login")
    }
  }

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="LabEddit Logo" className={styles.logo} />
      <button className={styles.authLink} onClick={handleAuthClick}>
        {isLoggedIn ? "Logout" : "Entrar"}
      </button>
    </header>
  )
}

export default Header
