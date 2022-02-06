/* eslint-disable import/no-anonymous-default-export */
import { GET_ASSETS, GET_ASSET } from "../actions/action_types";
import { ActionType, AssetType } from "./types";

const initialState: [AssetType?] = [];

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_ASSETS:
      return [...action.payload];
    case GET_ASSET:
      if (state.length === 0) return [action.payload];
      return state.map((asset) =>
        asset!.id === action.payload.id ? action.payload : asset
      );

    default:
      return state;
  }
};
