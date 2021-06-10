import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import About from "../components/About"
function about() {
  return (
    <Layout>
      <SEO title="about" />
      <About />
    </Layout>
  )
}

export default about
