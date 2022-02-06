import { combineReducers } from "redux";
import companies from "./companies_reducer";
import assets from "./assets_reducer";
import units from "./units_reducer";
import users from "./users_reducer";

export default combineReducers({
  companies,
  assets,
  units,
  users,
});
