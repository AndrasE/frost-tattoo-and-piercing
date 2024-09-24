import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(null);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const isValidForm = () => {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length < 3 || !nameRegex.test(name)) {
      setIsSent("error");
      setError(
        "Name must be at least 3 characters long and only contain letters and spaces."
      );
      return false;
    }
    if (!emailRegex.test(email)) {
      setIsSent("error");
      setError("Invalid email address. Please enter a valid email address.");
      return false;
    }
    if (message.length < 3) {
      setIsSent("error");
      setError("Message must be at least 20 characters long.");
      return false;
    }
    return true;
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

    if (isValidForm()) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setIsSent("success");
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 2600);
        })
        .catch((error) => {
          setIsSent("error"); // Handle the error case
          console.error("Error sending email:", error);
          setTimeout(() => {
            setError("");
          }, 2700);
        });
    }
  };

  useEffect(() => {
    if (isSent !== null) {
      const timeoutId = setTimeout(() => {
        // Assuming you have a function to set isSent to null
        setIsSent(null);
      }, 3500);
      return () => clearTimeout(timeoutId);
    }
  }, [isSent]);

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
      {isSent && <FeedBackModal isSent={isSent} name={name} error={error} />}
    </FormContainer>
  );
};

export default BookingImg;
