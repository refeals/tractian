import { GET_UNITS, GET_UNIT } from "./action_types";
import { api } from "../api";

export const getUnits = () => (dispatch: any) => {
  api
    .get("/units")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_UNITS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const getUnit = (asset_id: number) => (dispatch: any) => {
  api
    .get("/units/", { params: { id: asset_id } })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_UNIT, payload: res.data });
    })
    .catch((err) => console.log(err));
};
