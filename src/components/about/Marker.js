import React from "react"
import styles from "../../css/about.module.css"
import {FaMapMarkerAlt} from "react-icons/fa"

const Marker = (props) => {
  const { color, name, id } = props
  return (
    <div><FaMapMarkerAlt style={{fontSize:"40px"}}/></div>
  )
}

export default Marker
