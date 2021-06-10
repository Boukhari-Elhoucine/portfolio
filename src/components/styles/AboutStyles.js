import styled from "styled-components"
import { motion } from "framer-motion"
export const Header = styled(motion.h2)`
  font-size: 3em;
  color: #08fdd8;
  margin-bottom: 1rem;
  text-shadow: 0 0 7px #08fdd8;
  @media (max-width: 376px) {
    font-size: 2.4em;
  }
`
export const Description = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 1em;
  font-weight: 300;
  margin-top: 0.5rem;
  @media (max-width: 376px) {
    font-size: 0.9em;
  }
`
export const H2 = styled.h2`
  color: #fff;
`
export const headerAnimation = {
  in: {
    scale: 0,
  },
  out: {
    scale: 1,
    transition: { delay: 0.2 },
  },
}
