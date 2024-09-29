import React from "react";
import {
  ContentContainer,
  LinksContainer,
  Link,
  LinkText,
  FacebookIcon,
  EmailIcon,
  PhoneIcon,
  IFrame,
  IframeWrapper,
} from "./ContactDetailsElements";

const ContactDetails = () => {
  return (
    <ContentContainer>
      <LinksContainer>
        <Link href={process.env.REACT_APP_FACEBOOK_URL} target="_blank">
          <FacebookIcon />
          <LinkText>facebook/frosttattoocegled</LinkText>
        </Link>
        <Link href={process.env.REACT_APP_MAILTO_URL}>
          <EmailIcon />
          <LinkText>{process.env.REACT_APP_EMAIL_URL}</LinkText>
        </Link>
        <Link href={process.env.REACT_APP_TEL_URL} target="_blank">
          <PhoneIcon />
          <LinkText>{process.env.REACT_APP_TEL}</LinkText>
        </Link>
      </LinksContainer>
      <IframeWrapper>
        <IFrame
          title="Responsive Google Map"
          src={process.env.REACT_APP_GOOGLEMAP}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </IframeWrapper>
    </ContentContainer>
  );
};

export default ContactDetails;
