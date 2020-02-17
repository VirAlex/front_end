import React from "react"
import Layout from "../components/layout"
// import { useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import styles from "../css/single-soin.module.css"
import { Link } from "gatsby"
import style from "../css/navbar.module.css"




const Soin = ({data}) => {
    // const data = useStaticQuery(SOIN_QUERY)
    console.log(data)
  const mainImage = data.strapiSoin.image.childImageSharp.fixed
    // let soin = data.allStrapiSoin.nodes
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          marginTop: "4rem",
        }}
      >
        la page du {data.strapiSoin.title}
      </h1>

      <div className={styles.detail}>

        <Image fixed={mainImage} alt={data.strapiSoin.title} className={styles.img} />
      </div>
      <div className={styles.detail}>
      <Link to="/soins" className={style.navLink} style={{marginTop: "20px", marginBottom: "20px"}}>Back</Link>
      </div>
    </Layout>
  )
}

export default Soin

export const query = graphql`
  query Soin ($id: String){
    strapiSoin(id: {eq: $id}){
      title
      contenu,
      prix,
      image {
          childImageSharp {
            fixed(width:400){
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
    }
  }
`
