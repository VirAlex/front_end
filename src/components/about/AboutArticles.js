import React from 'react'
import Map from "../../components/about/Map"
import { graphql, useStaticQuery } from "gatsby"



const query = graphql`
  query AboutQuery {
    allStrapiAbout {
      nodes {
        CodepostalVille
        HoraireDimanche
        HoraireJeudi
        HoraireLundi
        HoraireMardi
        HoraireMercredi
        HoraireSamedi
        HoraireVendredi
        NumeroRue
        id
        title
        content
      }
    }
  }
`

export default function AboutArticles(){
  const data = useStaticQuery(query)
  let articles = data.allStrapiAbout.nodes
  return(
    <div>
    {
      articles.map(article =>{
        return <Map key={article.id} {...article} />
      })
    }

    </div>
  )
}
