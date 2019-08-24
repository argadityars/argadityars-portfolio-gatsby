import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"
import Card from "../components/card"

import styles from "../styles/pages/index.module.scss"

const ExpSection = () => {
  return (
    <section className={styles.expSection}>
      <Container>
        <header className="left">
          <h2>Experience</h2>
          <p>I'm having awesome collaboration with these startups/companies.</p>
        </header>

        <ul className="right">
          <li>
            <Card>MyPay</Card>
          </li>
          <li>Demon</li>
          <li>MyStore</li>
        </ul>
      </Container>
    </section>
  )
}

const TechSection = () => {
  return (
    <section className={styles.techSection}>
      <Container>
        <header className="left">
          <h2>Tech</h2>
          <p>
            As a front end dev, I speak client side programming languages and
            equip myself with some build tools.
          </p>
        </header>

        <ul className="right">
          <li>
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Parcel</li>
            </ul>
          </li>
          <li>
            <h3>Front-End</h3>
            <ul>
              <li>React Native</li>
              <li>Gatsby</li>
              <li>Sass</li>
            </ul>
          </li>
          <li>
            <h3>Design</h3>
            <ul>
              <li>Adobe XD</li>
              <li>Zeplin</li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <header>
          <h2>Contact</h2>
          <p>
            Feel free to send me an email for a collaboration, or tweet me to
            say hello!
          </p>
        </header>

        <ul>
          <li>
            <a
              href="https://twitter.com/argadityars"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/argadityars"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/argadityars"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a href="mailto://argadityarss@gmail.com">Email</a>
          </li>
        </ul>
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

    <ExpSection />
    <TechSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
