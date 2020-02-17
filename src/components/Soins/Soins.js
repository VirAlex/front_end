import React from 'react'
import Soin from './Soin'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../../css/soins.module.css'
import Title from '../Title'

const query = graphql`
  query MyQuery {
  allStrapiSoin(sort:{fields: title, order: ASC}) {
    nodes {
      id
      contenu
      title
      image {
        childImageSharp {
          fluid(maxWidth:600){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      prix
    }
  }
}

`

export default function Soins() {
  const data = useStaticQuery(query)
  console.log(data);

  let soins = data.allStrapiSoin.nodes

  return (
<section className={styles.courses}>
  <Title title="Tous" subtitle="nos soins"/>
  <div className={styles.center}>
    {soins.map(soin => {
      return <Soin key={soin.id} {...soin}/>
    })}
  </div>
</section>
  )
}
