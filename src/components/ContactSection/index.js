import React from "react";
import {
  Container,
  Row,
  Column1,
  TextWrapperCol1,
  Heading,
  Content,
  Column2,
  TextWrapperCol2,
  FacebookIcon,
  FacebookLink,
  LinkWrapper,
  LinkText,
  EmailLink,
  EmailIcon,
  PhoneIcon,
  PhoneLink,
  LocationLink,
  LocationIcon,
} from "./ContactElements";

import env from "react-dotenv";

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Row>
          <Column1>
            <TextWrapperCol1>
              <Heading>Contact</Heading>
              <Content>
                Feel free to hit me up below. You also can check out my calendar
                to find suitable times for both of us.
              </Content>
            </TextWrapperCol1>
          </Column1>
          <Column2>
            <TextWrapperCol2>
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
                <PhoneLink href={process.env.REACT_APP_TEL_URL} target="_blank">
                  <PhoneIcon />
                  <LinkText>{process.env.REACT_APP_TEL}</LinkText>
                </PhoneLink>
              </LinkWrapper>
              <LinkWrapper>
                <LocationLink
                  href={process.env.REACT_APP_LOCATION_URL}
                  target="_blank">
                  <LocationIcon />
                  <LinkText>{process.env.REACT_APP_LOCATION}</LinkText>
                </LocationLink>
              </LinkWrapper>
            </TextWrapperCol2>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
