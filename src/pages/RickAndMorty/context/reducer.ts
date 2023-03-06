import { AdditionalInfoActions, AdditionalInfoStateType } from "../types";
import * as constants from "./../constants";

export const reducer = (
  state: AdditionalInfoStateType,
  action: AdditionalInfoActions
): AdditionalInfoStateType => {
  if (action.type === constants.SET_ADDITIONAL_INFO_LOCATION) {
    return {
      ...state,
      id: action.payload,
      type: constants.SET_ADDITIONAL_INFO_LOCATION,
    };
  }

  if (action.type === constants.SET_ADDITIONAL_INFO_EPISODE) {
    return {
      ...state,
      id: action.payload,
      type: constants.SET_ADDITIONAL_INFO_EPISODE,
    };
  }

  return state;
};
