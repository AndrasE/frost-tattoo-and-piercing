import React, { useEffect, useState } from "react";
import {
  FormContainer,
  HeaderText,
  Form,
  InputBox,
  TextArea,
  BtnContainer,
  SendBtnImg,
  SendBtnLabel,
  BtnWrapper,
} from "./BookingElements";
import BtnImg from "../../../images/bookingImgAnimation/sendImg.png";
import BtnHoverImg from "../../../images/bookingImgAnimation/sendImgHover.png";
import emailjs from "@emailjs/browser";
import FeedBackModal from "./FeedbackModal";

const BookingImg = ({ i18n }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(null);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  //checks if the form is valid. True if the form is valid, false otherwise. Settins the states / messages accordinly
  const isValidForm = () => {
    const nameRegex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]{3,}$/;
    const emailRegex =
      /^[a-zA-Z0-9._%+-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length < 3 || !nameRegex.test(name)) {
      setIsSent("error");
      setError(`${i18n.nameerror}`);
      return false;
    }
    if (!emailRegex.test(email)) {
      setIsSent("error");
      setError(`${i18n.emailerror}`);
      return false;
    }
    if (message.length < 20) {
      setIsSent("error");
      setError(`${i18n.messageerror}`);
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
          console.log(response);
          setIsSent("success");
          // reset states, so that the form can be used again
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setIsSent("error");
          // resets error state so it can be used again
          setTimeout(() => {
            setError("");
          }, 3000);
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
      <HeaderText>{i18n.formheader}</HeaderText>
      <Form name="contact">
        <InputBox
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={i18n.nameplaceholder}
          name="name"
          autoComplete="name"
        />
        <InputBox
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={i18n.emailplaceholder}
          name="email"
          autoComplete="email"
        />
        <TextArea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={i18n.messageplaceholder}
          name="message"
          autoComplete="off"
        />
        <BtnContainer>
          <BtnWrapper
            onClick={(e) => handleSubmit(e)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <SendBtnLabel>{i18n.sendbtn}</SendBtnLabel>
            <SendBtnImg src={hover ? BtnHoverImg : BtnImg} alt="send button" />
          </BtnWrapper>
        </BtnContainer>
      </Form>
      {/* feedback modal overlay component will show only if isSent is not null; if not null it will be passed as prop and gets displayed in feedbackmodal component or error prop will be used as error message */}
      {isSent && (
        <FeedBackModal
          isSent={isSent}
          name={name}
          error={error}
          i18n={i18n.feedbackmodal18}
        />
      )}
    </FormContainer>
  );
};

export default BookingImg;
