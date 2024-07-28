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
  Link,
  LinkWrapper,
  LinkText,
} from "./ContactElements";

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
              <Link
                href="https://www.facebook.com/frosttattoocegled"
                target="_blank">
                <LinkWrapper>
                  <FacebookIcon />
                  <LinkText>facebook/frosttattoocegled</LinkText>
                </LinkWrapper>
              </Link>
            </TextWrapperCol2>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
