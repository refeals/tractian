import { GET_COMPANIES, GET_COMPANY } from "./action_types";
import { api } from "../api";

export const getCompanies = () => (dispatch: any) => {
  api
    .get("/companies")
    .then((res) => dispatch({ type: GET_COMPANIES, payload: res.data }))
    .catch((err) => console.error(err));
};

export const getCompany = (asset_id: number) => (dispatch: any) => {
  api
    .get("/companies/", { params: { id: asset_id } })
    .then((res) => dispatch({ type: GET_COMPANY, payload: res.data }))
    .catch((err) => console.error(err));
};
