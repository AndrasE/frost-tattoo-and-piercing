import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ChromeIcon,
} from "./NotSupportedElements";

const NotSupported = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <ChromeIcon />
          {i18n.try}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default NotSupported;
