import React, { useState } from "react";
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
import FeedBackModal from "./FeedbackModal";

const BookingImg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(null);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setIsSent("success"); // Email was sent successfully
      })
      .catch((error) => {
        setIsSent("error"); // Handle the error case
        console.error("Error sending email:", error);
      });
  };

  return (
    <FormContainer>
      <HeaderText>Send us a quick message!</HeaderText>
      <Form>
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
          placeholder="message"
        />
        <BtnWrapper>
          <Btn
            onClick={(e) => handleSubmit(e)}
            onMouseEnter={onHover}
            onMouseLeave={onHover}>
            Send {hover ? <ArrowRightDouble /> : <ArrowRight />}
          </Btn>
        </BtnWrapper>
      </Form>
      {/* feedback modal overlay component on send */}
      {isSent && <FeedBackModal isSent={isSent} name={name} />}
    </FormContainer>
  );
};

export default BookingImg;
