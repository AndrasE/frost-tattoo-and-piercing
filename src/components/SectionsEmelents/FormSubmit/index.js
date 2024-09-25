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

  //checks if the form is valid. True if the form is valid, false otherwise. Settins the states / messages accordinly
  const isValidForm = () => {
    const nameRegex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]{3,}$/;
    const emailRegex =
      /^[a-zA-Z0-9._%+-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    if (message.length < 20) {
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

    // calling check if the form is valid and setting states accordingly
    if (isValidForm()) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setIsSent("success");
          // reset states, so that the form can be used again
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 3200);
        })
        .catch((error) => {
          setIsSent("error");
          // resets error state so it can be used again
          setTimeout(() => {
            setError("");
          }, 3200);
        });
    }
  };

  // reseting isSent after 3 seconds to be able to show feedback modal again if needed, display of the modal depending on isSent state
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
      {/* feedback modal overlay component will show only if isSent is not null; if not null it will be passed as prop and gets displayed in feedbackmodal component or error prop will be used as error message */}
      {isSent && <FeedBackModal isSent={isSent} name={name} error={error} />}
    </FormContainer>
  );
};

export default BookingImg;