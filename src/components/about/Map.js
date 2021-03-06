import React, { Component } from 'react';
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import '../../css/about.module.css'
import styles from "../../css/about.module.css"

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 45.53364562988281,
      lng: 5.992379188537598,
    },
    zoom: 14,
  }
  render() {
    const detail = this.props;
    const key = process.env.GATSBY_GOOGLE_API_KEY


    return (
      // Important! Always set the container height explicitly
      <div style={{ display: "flex", justifyContent: "arround" }}>
        <div className={styles.map} style={{ height: "100vh", width: "70%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={45.53364562988281} lng={5.992379188537598} />
          </GoogleMapReact>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            width: "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="horaires">
            <h2>Echapée Belle</h2>
            <p>{detail.NumeroRue}</p>
            <p>{detail.CodepostalVille}</p>
            <hr />
            <p>Horaires</p>
            <br />
            <p>{detail.HoraireLundi}</p>
            <p>{detail.HoraireMardi} </p>
            <p style={{ color: "red" }}> {detail.HoraireMercredi} </p>
            <p> {detail.HoraireJeudi} </p>
            <p>{detail.HoraireVendredi} </p>
            <p>{detail.HoraireSamedi}</p>
            <p style={{ color: "red" }}> {detail.HoraireDimanche} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Map;
