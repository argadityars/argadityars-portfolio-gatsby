import React from "react"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <section className={styles.copyright}>
        © {new Date().getFullYear()} Designed and coded by{" "}
        <a href="https://linkedin.com/me/argadityars">@argadityars</a>.
      </section>
    </footer>
  )
}

export default Footer
