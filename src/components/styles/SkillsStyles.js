import styled, { keyframes } from "styled-components"
export const Lodaing = keyframes`
    0%{
        width : 0;
    }
    100%{
        width:${props => `${props.total}%`};
    }
`
export const LodaingContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 20px;
  @media (max-width: 476px) {
    width: 300px;
    margin: 0 auto;
  }
`
export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 476px) {
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
  }
`
export const Load = styled.div`
  background-color: #08fdd8;
  height: 100%;
  width: ${props => `${props.total}%`};
  animation: ${Lodaing} 2s;
`
export const Label = styled.span`
  display: inline-block;
  color: #08fdd8;
  width: 80px;
  font-size: 0.8em;
  font-weight: bold;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 100vh;
`
