import React from 'react'
import styles from "../../css/single-soin.module.css"
import Image from 'gatsby-image'
import logo from "../../images/echap_logo.jpg"

export default function Soin({title, contenu, image, prix}) {
  const mainImage = image.childImageSharp.fluid
  return (
    <article className={styles.soin}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} alt={title} className={styles.img}/>
        <a href="" className={styles.link} target="_blank" rel="noopener noreferrer">Voir le soins</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{prix} €</p>
        </div>
        <img src={logo} alt="" style={{width:60, borderRadius:"8px"}}/>
      </div>
    </article>
  )
}
