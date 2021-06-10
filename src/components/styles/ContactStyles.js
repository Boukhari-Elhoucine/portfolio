import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Header = styled.h2`
  color: #08fdd8;
  font-size: 2em;
  margin-bottom: 1rem;
`
export const Status = styled.div`
  border: 1px solid #08fdd8;
  padding: 0.5rem 1rem;
  color: #08fdd8;
  margin: 0 auto;
  margin-top: 0.5rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 45vh;
  width: 30vw;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 450px) {
    width: 70vw;
  }
`
export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.7rem 0.5rem;
  width: 100%;
  outline: none;
`
export const Message = styled.textarea`
  display: block;
  outline: none;
  width: 100%;
  margin-bottom: 0.7rem;
  padding: 0.7rem 0.5rem;
`
export const Button = styled.button`
  background-color: ${props => (props.disabled ? "#555" : "#08fdd8")};
  color: #111;
  padding: 0.5rem 1rem;
  border: none;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  ${props => props.disabled && "pointer-events:none"}
`
export const Error = styled.p`
  color: red;
  font-size: 0.7em;
`
