import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Companies from "./Companies";

import { getCompanies } from "../actions/companies_actions";
import { getAssets } from "../actions/assets_actions";
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/:company_id" element={<Companies />} />
            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
