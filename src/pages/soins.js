import React from "react"
import Layout from "../components/layout"
import Soins from "../components/Soins/Soins"
const soins = () => {
  return (
    <Layout>
      <h2
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          marginTop: "4rem",
        }}
      >

      </h2>
      <Soins />
    </Layout>
  )
}

export default soins
