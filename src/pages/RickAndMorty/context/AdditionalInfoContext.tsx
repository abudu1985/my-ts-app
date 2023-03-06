import * as React from "react";
import { reducer } from "./reducer";
import { AdditionalInfoActions, AdditionalInfoStateType } from "../types";
import * as constants from "../constants";

interface AdditionalInfoContextType extends AdditionalInfoStateType {
  dispatch: React.Dispatch<AdditionalInfoActions>;
  id: string;
  type: string;
}

const initialState: AdditionalInfoStateType = {
  id: "1",
  type: constants.SET_ADDITIONAL_INFO_LOCATION,
};

export const AdditionalInfoContext =
  React.createContext<AdditionalInfoContextType>(
    initialState as AdditionalInfoContextType
  );

export const AdditionalInfoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AdditionalInfoContext.Provider
      value={{
        ...data,
        dispatch,
      }}
    >
      {children}
    </AdditionalInfoContext.Provider>
  );
};
