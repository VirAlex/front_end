import React from "react"
import {
  FaFacebookSquare,
  FaGoogle
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://www.facebook.com/%C3%89chapp%C3%A9e-belle-584773275370651/",
    image: <FaFacebookSquare className="facebook-icon" />,
  },
  {
    id: Math.random(),
    url: "https://www.google.com/maps/dir//echappee+belle+saint+jeoire+gmaps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x478bae8eb09ea65b:0x95227e715a46e6da?sa=X&ved=2ahUKEwiD5ca0jdHnAhVIUhoKHU1YDVkQ9RcwEXoECAwQEA",
    image: <FaGoogle className="google-icon" />,
  },
]
