import React, { useRef } from "react";
import {
  SectionWrapper,
  Container,
  Row,
  Column1,
  TextWrapperCol1,
  Heading,
  Content,
  Column2,
  ContentContainer,
  FacebookIcon,
  FacebookLink,
  LinksContainer,
  LinkWrapper,
  LinkText,
  EmailLink,
  EmailIcon,
  PhoneIcon,
  PhoneLink,
  IFrame,
  IframeWrapper,
} from "./ContactElements";
import { motion, useScroll } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <SectionWrapper id="contact">
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}>
        <Container>
          <Row>
            <Column1>
              <TextWrapperCol1>
                <Heading>Contact</Heading>
                <Content>
                  Feel free to hit me up below. You also can check out my
                  calendar to find suitable times for both of us.
                </Content>
              </TextWrapperCol1>
            </Column1>
            <Column2>
              <ContentContainer>
                <LinksContainer>
                  <LinkWrapper>
                    <FacebookLink
                      href={process.env.REACT_APP_FACEBOOK_URL}
                      target="_blank">
                      <FacebookIcon />
                      <LinkText>facebook/frosttattoocegled</LinkText>
                    </FacebookLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <EmailLink href={process.env.REACT_APP_MAILTO_URL}>
                      <EmailIcon />
                      <LinkText>{process.env.REACT_APP_EMAIL_URL}</LinkText>
                    </EmailLink>
                  </LinkWrapper>
                  <LinkWrapper>
                    <PhoneLink
                      href={process.env.REACT_APP_TEL_URL}
                      target="_blank">
                      <PhoneIcon />
                      <LinkText>{process.env.REACT_APP_TEL}</LinkText>
                    </PhoneLink>
                  </LinkWrapper>
                </LinksContainer>
                <IframeWrapper>
                  <IFrame
                    title="Responsive Google Map"
                    src="https://shorturl.at/wcqjD"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </IframeWrapper>
              </ContentContainer>
            </Column2>
          </Row>
        </Container>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
