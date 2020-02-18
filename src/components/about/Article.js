import React from 'react'
import styles from "../../css/single-soin.module.css"
import Image from "gatsby-image"
import Map from "../../components/about/Map";

export default function Article({title, content, id, photo}){

  const mainImage = photo.childImageSharp.fluid
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Map />
    </div>
  )
}
