import React, { useState, useRef } from "react";
import {
  FormContainer,
  HeaderText,
  Form,
  InputBox,
  TextArea,
  BtnWrapper,
  Btn,
  ArrowRight,
  ArrowRightDouble,
} from "./BookingImgElements";
import emailjs from "@emailjs/browser";

const BookingImg = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <FormContainer>
      <HeaderText>Send us a quick message!</HeaderText>
      <Form ref={form}>
        <InputBox
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <InputBox
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <TextArea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"></TextArea>
        <BtnWrapper>
          <Btn
            onClick={(e) => handleSubmit(e)}
            onMouseEnter={onHover}
            onMouseLeave={onHover}>
            Send {hover ? <ArrowRightDouble /> : <ArrowRight />}
          </Btn>
        </BtnWrapper>
      </Form>
    </FormContainer>
  );
};

export default BookingImg;
