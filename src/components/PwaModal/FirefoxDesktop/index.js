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

const FirefoxDesktop = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <ExtensionIcon />
          {i18n.extension}
        </InstallStep>
        <InstallStep>
          <SearchIcon />
          {i18n.search}
        </InstallStep>
        <InstallStep>
          <InstallIcon />
          {i18n.install}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default FirefoxDesktop;
