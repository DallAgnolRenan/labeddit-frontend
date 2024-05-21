// src/pages/Signup/SignupPage.js
// import React from "react"
import Header from "../../components/Header/Header"
import styles from "./SignupPage.module.scss"

const SignupPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.signupContainer}>
        <div className={styles.signupBox}>
          <img src="/logo.png" alt="LabEddit Logo" className={styles.logo} />
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
          <p>O projeto de rede social da Labenu</p>
          <input type="text" placeholder="Apelido" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" className={styles.checkbox} />
            <label>
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
          </div>
          <button className={styles.continueButton}>Cadastrar</button>
          <p>
            Ao continuar, você concorda com o nosso{" "}
            <a href="#" className={styles.link}>
              Contrato de usuário
            </a>{" "}
            e nossa{" "}
            <a href="#" className={styles.link}>
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
