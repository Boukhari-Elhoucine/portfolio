import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Container,
  Form,
  Header,
  Input,
  Message,
  Button,
  Error,
  Status,
} from "../components/styles/ContactStyles"
function ContactMe() {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [active, setActive] = useState(false)
  const [message, setMessage] = useState("")
  console.log(active)
  const Send = async data => {
    setActive(true)
    const response = await fetch("https://portfolio-cont.herokuapp.com/", {
      method: "post",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    setMessage(result.msg)
    setActive(false)
  }
  return (
    <Container>
      <Header>Contact me</Header>
      <Form onSubmit={handleSubmit(Send)}>
        <Input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <Error>{errors.email.type}</Error>}
        <Input
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        {errors.subject && <Error>{errors.subject.type}</Error>}
        <Message
          placeholder="your message"
          rows="5"
          {...register("message", { required: true })}
        />
        <Button disabled={active} type="submit">
          send
        </Button>
        {message && (
          <Status>
            <p>{message}</p>
          </Status>
        )}
      </Form>
    </Container>
  )
}

export default ContactMe
