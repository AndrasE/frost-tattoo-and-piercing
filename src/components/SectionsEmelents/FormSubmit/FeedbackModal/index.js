import React, { useEffect } from "react";
import { SuccessModal } from "./FeedbackModalElement";
import { SuccessModalText } from "./FeedbackModalElement";
import { LottieAnimation } from "./FeedbackModalElement";
import SentAnimation from "../../../../images/bookingImgAnimation/email.json";
import ErrorAnimation from "../../../../images/bookingImgAnimation/error.json";
import { motion, useAnimation } from "framer-motion";

const FeedBackModal = ({ isSent, name, error, i18n }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
    const timeoutId = setTimeout(() => {
      controls.start("reverse");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [controls]);

  return (
    <motion.div
      style={{ position: "absolute", width: "100%", height: "100%" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      variants={{
        animate: { opacity: 1, scale: 1 },
        reverse: { opacity: 0, scale: 0.5 },
      }}
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
      <SuccessModal>
        <SuccessModalText>
          {isSent === "success"
            ? `${i18n.successmsgpart1}${name}${i18n.successmsgpart2}`
            : `${error}`}
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
          {isSent === "success" ? `${i18n.successent}` : `${i18n.errorsent}`}
        </SuccessModalText>
      </SuccessModal>
    </motion.div>
  );
};
export default FeedBackModal;
