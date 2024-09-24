import React from "react";
import { SuccessModal } from "./FeedbackModalElement";
import { SuccessModalText } from "./FeedbackModalElement";
import { LottieAnimation } from "./FeedbackModalElement";
import SentAnimation from "../../../../images/FormAnimations/email.json";
import ErrorAnimation from "../../../../images/FormAnimations/error.json";
import { motion } from "framer-motion";

const FeedBackModal = ({ isSent, name }) => {
  return (
    <motion.div
      style={{ position: "absolute", width: "100%", height: "100%" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
      <SuccessModal>
        <SuccessModalText>
          {isSent === "success"
            ? `Thank you for your message ${name}, I will get back to you shortly!`
            : "There was an error sending your message. Please try again."}
        </SuccessModalText>

        {/* Conditionally render Lottie animation using ternary operator due to a bug have to repeat it */}
        {isSent === "success" ? (
          <LottieAnimation
            autoPlay={true}
            loop={false}
            animationData={SentAnimation}
          />
        ) : (
          <LottieAnimation
            autoPlay={true}
            loop={false}
            animationData={ErrorAnimation}
          />
        )}

        <SuccessModalText>
          {isSent === "success"
            ? "This has been successfully sent!"
            : "Failed to send."}
        </SuccessModalText>
      </SuccessModal>
    </motion.div>
  );
};

export default FeedBackModal;
