/* eslint-disable import/no-anonymous-default-export */
import { GET_COMPANIES, GET_COMPANY } from "../actions/action_types";
import { ActionType, CompanyType } from "./types";

const initialState: [CompanyType?] = [];

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_COMPANIES:
      return [...action.payload];
    case GET_COMPANY:
      if (state.length === 0) return [action.payload];
      return state.map((asset) =>
        asset!.id === action.payload.id ? action.payload : asset
      );

    default:
      return state;
  }
};
