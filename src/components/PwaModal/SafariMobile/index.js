import React from "react";
import { AddIcon, InstallStep, ShareIcon } from "./SafariMobileElements";

const SafariMobile = () => {
  return (
    <>
      <InstallStep>
        <ShareIcon />
        Press the 'Share' button on the menu bar below
      </InstallStep>
      <InstallStep>
        <AddIcon />
        Press 'Add to Home Screen'
      </InstallStep>
    </>
  );
};

export default SafariMobile;
