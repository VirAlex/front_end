import React from 'react'
import Article from './Article'
import { graphql, useStaticQuery } from "gatsby"



const query = graphql`
  query AboutQuery {
    allStrapiAbout {
      nodes {
        id
        content
        title
        photo {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default function AboutArticles(){
  const data = useStaticQuery(query)
  console.log(data.allStrapiAbout.nodes)
  let articles = data.allStrapiAbout.nodes
  return(
    <div>
    {
      articles.map(article =>{
        return <Article key={article.id} {...article} />
      })
    }

    </div>
  )
}
