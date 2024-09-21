import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ChromeIcon,
} from "./NotSupportedElements";

const NotSupported = () => {
  return (
    <>
      <Divider />
      <Description>
        It looks like the browiser you are using not currently supporting
        installation of PWAs(Progressive Web Applications).
      </Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <ChromeIcon />
          Please try to open the App via a Chromium based browiser such as
          Chrome or Edge.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default NotSupported;
