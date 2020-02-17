import React from "react"
import Layout from "../components/layout"
import Soins from "../components/Soins/Soins"
const soins = () => {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          marginTop: "4rem",
        }}
      >
        la page des soins
      </h1>
      <Soins />
    </Layout>
  )
}

export default soins
