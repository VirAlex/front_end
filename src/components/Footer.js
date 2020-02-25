import React from "react"
import logo from "../images/echap_logo.jpg"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
import { FaPhoneSquare,
  FaAddressCard} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Echapée Belle Logo" style={{width:90, borderRadius:"8px"}}></img>
        <div className={styles.flex}>
          <h1 className={styles.title}>Echappée Belle</h1>
          <p style={{ marginLeft: "0.2em" }}><FaAddressCard style={{ marginRight: "1em" }} />725 Route Nationale 6 73190 Saint-Jeoire-Prieuré</p>
          <p style={{ marginLeft: "0.2em" }}><FaPhoneSquare style={{ marginRight: "1em" }} />0620258896</p>
        </div>
        <h2 className={styles.title}>Votre Référent sur la Région CHallésienne</h2>
      </div>
      {/* <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} target="_blank" href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div> */}
      <div className={styles.info}>
        © {new Date().getFullYear()} <a href="https://portoflioalexandreviretti.herokuapp.com/" className={styles.link} target="_blank">
          Viretti Alexandre
        </a> All rights reserved. Built
        with
        <a href="https://www.gatsbyjs.org/" className={styles.link}>
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
