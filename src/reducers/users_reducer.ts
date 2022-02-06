/* eslint-disable import/no-anonymous-default-export */
import { GET_USERS, GET_USER } from "../actions/action_types";
import { ActionType, UserType } from "./types";

const initialState: [UserType?] = [];

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.payload];
    case GET_USER:
      if (state.length === 0) return [action.payload];
      return state.map((asset) =>
        asset!.id === action.payload.id ? action.payload : asset
      );

    default:
      return state;
  }
};
