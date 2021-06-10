import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle, Container } from "./styles/GlobalStyles"
import Header from "./header"
import { motion } from "framer-motion"
const Layout = ({ children }) => {
  const animation = {
    in: {
      opacity: 0,
    },
    out: {
      opacity: 1,
    },
  }
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <motion.main
        initial="in"
        animate="out"
        exit="in"
        variants={animation}
        style={{ width: "100%" }}
      >
        {children}
      </motion.main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
