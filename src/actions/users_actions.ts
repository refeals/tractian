import { GET_USERS, GET_USER } from "./action_types";
import { api } from "../api";

export const getUsers = () => (dispatch: any) => {
  api
    .get("/users")
    .then((res) => dispatch({ type: GET_USERS, payload: res.data }))
    .catch((err) => console.error(err));
};

export const getUser = (asset_id: number) => (dispatch: any) => {
  api
    .get("/users/", { params: { id: asset_id } })
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch((err) => console.error(err));
};
