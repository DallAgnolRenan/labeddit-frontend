import React from "react"
import {useNavigate} from "react-router-dom"
import {goToSignup} from "../../router/coordinator"
import Logo from "../../components/Logo/Logo"
import styles from "./LoginPage.module.scss"

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <Logo />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
        <input type="email" placeholder="E-mail" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <button className={styles.continueButton}>Continuar</button>
        <button
          className={styles.signupButton}
          onClick={() => goToSignup(navigate)}>
          Crie uma conta!
        </button>
      </div>
    </div>
  )
}

export default LoginPage
