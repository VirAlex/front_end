import React from "react"
import styles from "../css/banner.module.css"
import Typed from 'react-typed';
const Banner = ({ title, children }) => {
  return (
    <div className={styles.banner}>
      {/* <Typed strings={["Here you can find anything"]} typeSpeed={40} />
      <br />

      <Typed
        strings={[
          "Search for products",
          "Search for categories",
          "Search for brands",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed> */}
      <Typed
        strings={[
          "Echapée Belle Insitut de Beauté",
          "Votre réferent sur la région Challésienne",
        ]}
        className={styles.title}
        typeSpeed={60}
        backSpeed={60}
        loop
      />
      {/* <h1 className={styles.title}>{title}</h1> */}
      {children}
    </div>
  )
}

export default Banner
