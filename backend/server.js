require("dotenv").config()
const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000
const contactAdress = process.env.EMAIL
app.get("/", (req, res) => {
  res.send("server started")
})
app.post("/", (req, res) => {
  const { email, subject, message } = req.body
  const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_AUTH,
      pass: process.env.PASSWORD,
    },
  })
  const options = {
    from: email,
    to: contactAdress,
    subject: subject || "no subject",
    html: `<h3>Info</h3>
      <p>email: ${email}</p>
      <h3>Message</h3>
      <p>${message}</p>
    `,
  }
  mailer.sendMail(options, (error, info) => {
    if (error) {
      console.log(error)
      res.status(401).json({ msg: "failed" })
    } else {
      console.log(info.response)
      res.status(200).json({ msg: "send successfully" })
    }
  })
})

app.listen(PORT, () => {})
