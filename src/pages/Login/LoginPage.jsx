import styles from "./LoginPage.module.scss"

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src="/logo.png" alt="LabEddit Logo" className={styles.logo} />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
        <input type="email" placeholder="E-mail" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <button className={styles.continueButton}>Continuar</button>
        <button className={styles.signupButton}>Crie uma conta!</button>
      </div>
    </div>
  )
}

export default LoginPage
