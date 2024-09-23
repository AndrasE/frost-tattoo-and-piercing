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

    emailjs
      .sendForm("", "", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <FormContainer>
      <HeaderText>Send us a quick message!</HeaderText>
      <Form ref={form}>
        <InputBox
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="name"
        />
        <InputBox
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
        />
        <TextArea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="email"
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
