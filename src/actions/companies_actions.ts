import { GET_COMPANIES, GET_COMPANY } from "./action_types";
import { api } from "../api";

export const getCompanies = () => (dispatch: any) => {
  api
    .get("/companies")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_COMPANIES, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const getCompany = (asset_id: number) => (dispatch: any) => {
  api
    .get("/companies/", { params: { id: asset_id } })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_COMPANY, payload: res.data });
    })
    .catch((err) => console.log(err));
};
