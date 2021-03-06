import { GET_ASSETS, GET_ASSET } from "./action_types";
import { api } from "../api";

export const getAssets = () => (dispatch: any) => {
  api
    .get("/assets")
    .then((res) => dispatch({ type: GET_ASSETS, payload: res.data }))
    .catch((err) => console.error(err));
};

export const getAsset = (asset_id: number) => (dispatch: any) => {
  api
    .get("/assets/", { params: { id: asset_id } })
    .then((res) => dispatch({ type: GET_ASSET, payload: res.data }))
    .catch((err) => console.error(err));
};
