import React, { useState } from "react";
import {
  Andras,
  ArrowRightDouble,
  FooterWrapper,
  Link,
  LinkWrapper,
} from "./FooterElements";

const Footer = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <FooterWrapper>
      <LinkWrapper>
        <Link
          href="https://andrasegyed.netlify.app/"
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover}>
          <Andras>Created & maintained by Andras</Andras>
        </Link>
        {hover ? (
          <ArrowRightDouble
            style={{ opacity: "100%", transition: " all 0.4s ease-in-out" }}
          />
        ) : (
          <ArrowRightDouble />
        )}
      </LinkWrapper>
    </FooterWrapper>
  );
};

export default Footer;
