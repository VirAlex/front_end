import React from "react"
import Layout from "../components/layout"
// import { useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import styles from "../css/single-soin.module.css"
import { Link } from "gatsby"
import Title from "../components/Title"




const Soin = ({data}) => {
    // const data = useStaticQuery(SOIN_QUERY)
    // console.log(data)
  const mainImage = data.strapiSoin.image.childImageSharp.fixed
    // let soin = data.allStrapiSoin.nodes
  return (
    <Layout>
    <div className={styles.containerSoin}>
        <Title title={data.strapiSoin.title} subtitle={data.strapiSoin.prix + "€"} />
        <div className={styles.detail}>
          <Image fixed={mainImage} alt={data.strapiSoin.title} className={styles.img} />
        </div>
        <div className={styles.contenu}>
          <p>{data.strapiSoin.contenu}</p>
        </div>
        <div className={styles.detail}>
          <Link to="/soins" className={styles.link2}>Back</Link>
        </div>
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
