import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ShareIcon,
  AddIcon,
} from "./SafariMobileElements";

const SafariMobile = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <ShareIcon />
          {i18n.share}
        </InstallStep>
        <InstallStep>
          <AddIcon />
          {i18n.add}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default SafariMobile;
