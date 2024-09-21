import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ShareIcon,
  AddIcon,
} from "./SafariMobileElements";

const SafariMobile = () => {
  return (
    <>
      <Divider />
      <Description>
        This site has app functionality. Add it to your Home Screen for
        extensive experience and easy access.
      </Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <ShareIcon />
          Press the 'Share' button on the menu bar below.
        </InstallStep>
        <InstallStep>
          <AddIcon />
          Press 'Add to Home Screen'.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default SafariMobile;
