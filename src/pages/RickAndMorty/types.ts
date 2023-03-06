export type AdditionalInfoStateType = {
  id: string;
  type: string;
};

export type AdditionalInfoActions =
  | { type: "SET_ADDITIONAL_INFO_LOCATION"; payload: string }
  | { type: "SET_ADDITIONAL_INFO_EPISODE"; payload: string };
