import React from "react";
import {
  ContentContainer,
  LinksContainer,
  LinkWrapper,
  LinkText,
  FacebookIcon,
  FacebookLink,
  EmailLink,
  EmailIcon,
  PhoneIcon,
  PhoneLink,
  IFrame,
  IframeWrapper,
} from "./FormSubmitElements";

const FormSubmit = () => {
  return (
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
          <PhoneLink href={process.env.REACT_APP_TEL_URL} target="_blank">
            <PhoneIcon />
            <LinkText>{process.env.REACT_APP_TEL}</LinkText>
          </PhoneLink>
        </LinkWrapper>
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

export default FormSubmit;
