import React from "react";
import { InstallStep, OpenIcon } from "./ChromiumsInstalledAlreadyElements";

const ChromiumsInstalledAlready = () => {
  return (
    <InstallStep>
      <OpenIcon />
      This app has been installed already. Please click the icon in the
      addressbar to open.
    </InstallStep>
  );
};

export default ChromiumsInstalledAlready;
