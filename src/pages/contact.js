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
        Telephone
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
              <div className={styles.text}>
              <h1>{c.name}</h1>
                  <p>{c.content}</p>
                  <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                    <p>
                      <label>Email: <input type="text" name="name" /></label>
                    </p>
                    <p>
                      <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </form>
              </div>
                <article className={styles.text}>
                  <div className={styles.flex}>
                    <a href={"mailto:" + c.mail}>Nous écrire</a>
                </div>
                  <Image
                    fixed={mainImage}
                    alt={c.title}
                    className={styles.img}
                    style={{borderRadius:"50%"}}
                  />
                  <p>{c.first_name}{" "}{c.last_name}</p>
                  <p>{c.Telephone}</p>
                </article>
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}


