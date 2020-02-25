import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import Form from "../components/Form"
import styles from "../css/contact.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import {
  IoMdMail
} from "react-icons/io"

import {
  FaPhoneSquare
} from "react-icons/fa"

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
  // console.log(data);

  let contact = data.allStrapiContact.nodes
  return (
    <Layout>
      <section className={styles.contact}>
        {
          contact.map(c=>{
            const mainImage =
              c.photo.childImageSharp.fixed
            return (
              <div key={c.id} className={styles.flex}>
              <div className={styles.text}>
                  <h2>{c.name}</h2>
              </div>
                <Form/>
                <article className={styles.text}>

                  <Image
                    fixed={mainImage}
                    alt={c.title}
                    className={styles.img}
                    style={{borderRadius:"50%"}}
                  />
                  <p>{c.first_name}{" "}{c.last_name}</p>
                  <div class={styles.center}>
                    <FaPhoneSquare className={styles.icon} style={{marginBottom:"20px", marginRight:"10px"}}/><p>{c.Telephone}</p>
                  </div>
                  <a href={"mailto:" + c.mail}><IoMdMail/></a>

                </article>
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}


