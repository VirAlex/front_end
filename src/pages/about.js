import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import AboutArticles from "../components/about/AboutArticles"


const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="A propos" subtitle="de nous" />
        <article className={styles.text}>
          <AboutArticles />
        </article>
      </section>
    </Layout>
  )
}

export default about
