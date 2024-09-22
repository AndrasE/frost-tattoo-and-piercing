import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  ShareIcon,
  AddDocSvg,
} from "./SafariDesktopElements";

const SafariDesktop = ({ i18n }) => {
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
          <AddDocSvg viewBox="0 0 23.389 17.979">
            <g fill="currentColor">
              <path d="M1.045 3.291v1.377h20.937V3.291Zm2.021 14.688h16.895c2.05 0 3.066-1.006 3.066-3.018V3.027C23.027 1.016 22.012 0 19.961 0H3.066C1.026 0 0 1.016 0 3.027v11.934c0 2.012 1.025 3.018 3.066 3.018Zm.02-1.573c-.977 0-1.514-.517-1.514-1.533V3.115c0-1.015.537-1.543 1.514-1.543H19.94c.967 0 1.514.528 1.514 1.543v11.758c0 1.016-.547 1.533-1.514 1.533Z" />
              <path d="M4.2 14.014c0 .508.35.85.868.85h12.92c.518 0 .87-.343.87-.85v-1.465c0-.508-.352-.85-.87-.85H5.068c-.517 0-.869.342-.869.85Z" />
            </g>
          </AddDocSvg>
          {i18n.add}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default SafariDesktop;
