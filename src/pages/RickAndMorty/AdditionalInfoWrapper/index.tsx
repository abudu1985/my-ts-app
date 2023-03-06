import React from "react";

import Location from "./Location";
import Episode from "./Episode";
import * as constants from "./../constants";
import { AdditionalInfoContext } from "../context/AdditionalInfoContext";

const AdditionalInfoWrapper = () => {
  const { dispatch, ...rest } = React.useContext(AdditionalInfoContext);
  console.log("qwe  ~ rest:", rest);

  const key = rest.type;

  const Components = {
    [constants.SET_ADDITIONAL_INFO_LOCATION]: <Location id={rest.id} />,
    [constants.SET_ADDITIONAL_INFO_EPISODE]: <Episode id={rest.id} />,
  };

  return <div>{(Components as any)[key]}</div>;
};

export default AdditionalInfoWrapper;
