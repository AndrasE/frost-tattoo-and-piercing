import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  SettingsIcon,
  AddIcon,
} from "./FirefoxOperaMobileElements";

const FirefoxOperaMobile = () => {
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
          <SettingsIcon />
          Press the 'Setting' button on the top bar above.
        </InstallStep>
        <InstallStep>
          <AddIcon />
          Press 'Add to Home Screen'.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default FirefoxOperaMobile;
