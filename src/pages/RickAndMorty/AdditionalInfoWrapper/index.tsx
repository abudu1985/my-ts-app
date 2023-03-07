import React from "react";

import Location from "./Location";
import Episode from "./Episode";
import * as constants from "./../constants";
import { AdditionalInfoContext } from "../context/AdditionalInfoContext";

const AdditionalInfoWrapper = () => {
  const { id, type } = React.useContext(AdditionalInfoContext);

  const Components = {
    [constants.SET_ADDITIONAL_INFO_LOCATION]: <Location id={id} />,
    [constants.SET_ADDITIONAL_INFO_EPISODE]: <Episode id={id} />,
  };

  return <div>{(Components as any)[type]}</div>;
};

export default AdditionalInfoWrapper;
