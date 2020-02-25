import React, { Component } from "react"
import { navigate } from "gatsby"
import "../css/form.module.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {}
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = this.ContactForm.current

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }
  render() {
    return (
      <>
      <header>Nous Contacter</header>
      <form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        ref={this.ContactForm}
        id="formStyle"
        className="topBefore"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <div className="flex">
            <input id="name" type="text" name="name" onChange={this.handleChange} placeholder="NOM"/>
            <input id="email" type="email" name="email" onChange={this.handleChange} placeholder="E-MAIL"/>
          </div>
            <textarea id="message" name="message" onChange={this.handleChange} />
        <p>
          <input id="submit" type="submit" value="Envoyer!" />
          <input id="submit" type="reset" value="Effacer" />
        </p>
      </form>
      </>
    )
  }
}
export default Form
