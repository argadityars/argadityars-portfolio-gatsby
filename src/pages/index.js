import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "../components/container"

const ContactSection = () => {
  return (
    <section>
      <Container>
        <header>
          <h2>Contact</h2>
          <p>
            Feel free to send me an email for a collaboration, or tweet me to
            say hello!
          </p>
        </header>
      </Container>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Argaditya RS - Front End Developer" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <ContactSection />
  </Layout>
)

export default IndexPage
