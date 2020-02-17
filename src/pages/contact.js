import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  query ContactQuery {
    allStrapiContact {
      nodes {
        content
        id
        first_name
        name
        last_name
        mail
        photo {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default function Contact() {
  const data = useStaticQuery(query)
  console.log(data);

  let contact = data.allStrapiContact.nodes
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contact"></Title>
        {
          contact.map(c=>{
            const mainImage =
              c.photo.childImageSharp.fixed
            return (
              <div key={c.id} className={styles.flex}>
                <article className={styles.text}>
                  <p>
                    {c.content}
                    <a href={"mailto:" + c.mail}>Nous écrire</a>
                  </p>
                  <p>C'est nous</p>
                  <Image
                    fixed={mainImage}
                    alt={c.title}
                    className={styles.img}
                  />
                </article>
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}


