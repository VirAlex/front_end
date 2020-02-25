import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styles from "../css/success.module.css"

export default () => (
  <Layout>
    <div className={styles.container}>
      <h2>You dropped me a new line</h2>
      <h4> Congrats,i&#39;ll be sure to check it out when i can and add a reply</h4>
      <Link to="/" className={styles.link}>Back</Link>
    </div>
  </Layout>
)
