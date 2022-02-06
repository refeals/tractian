/* eslint-disable import/no-anonymous-default-export */
import { GET_UNITS, GET_UNIT } from "../actions/action_types";
import { ActionType, UnitType } from "./types";

const initialState: [UnitType?] = [];

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_UNITS:
      return [...action.payload];
    case GET_UNIT:
      if (state.length === 0) return [action.payload];
      return state.map((asset) =>
        asset!.id === action.payload.id ? action.payload : asset
      );

    default:
      return state;
  }
};
