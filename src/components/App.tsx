import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAssets } from "../actions/assets_actions";
import { getCompanies } from "../actions/companies_actions";
import { getUnits } from "../actions/units_actions";
import { getUsers } from "../actions/users_actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssets());
    dispatch(getCompanies());
    dispatch(getUnits());
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="App">App</div>;
}

export default App;
