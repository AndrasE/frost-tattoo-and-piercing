import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ExtensionIcon,
  SearchIcon,
  InstallIcon,
} from "./FirefoxDesktopElements";

const FirefoxDesktop = () => {
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
          <ExtensionIcon />
          Press the 'Extension' icon on the menu bar above.
        </InstallStep>
        <InstallStep>
          <SearchIcon />
          Search and install Progressive Web Apps for Firefox extension.
        </InstallStep>
        <InstallStep>
          <InstallIcon />
          Press the 'Intall' icon in the address bar.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default FirefoxDesktop;
