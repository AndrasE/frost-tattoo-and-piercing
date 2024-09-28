import React, { useState } from "react";
import {
  FooterWrapper,
  Link,
  LinkText,
  ArrowRightDouble,
} from "./FooterElements";

const Footer = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <FooterWrapper>
      <LinkText>
        Created & maintained by
        <Link
          href="https://andrasegyed.netlify.app/"
          target="_blank"
          onClick={onHover}
          onMouseEnter={onHover}
          onMouseLeave={onHover}>
          Andras
        </Link>
        {hover ? (
          <ArrowRightDouble
            style={{ opacity: "100%", transition: "all 0.1s ease-in-out" }}
          />
        ) : (
          <ArrowRightDouble />
        )}
      </LinkText>
    </FooterWrapper>
  );
};

export default Footer;
