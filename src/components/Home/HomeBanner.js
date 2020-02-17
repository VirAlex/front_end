import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
const HomeBanner = () => {
  const { size } = React.useContext(AppContext)
  if (size < 776) {
    return (
      <SmallBanner>
        <Banner title="Echapée Belle Insitut de Beauté"></Banner>
      </SmallBanner>
    )
  }
  return (
    <Background>
      <Banner title="Echapée Belle Insitut de Beauté"></Banner>
    </Background>
  )
}

export default HomeBanner
