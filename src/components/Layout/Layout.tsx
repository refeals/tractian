import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { ReducerTypes } from "../../reducers/types";

const Layout = () => {
  const companies = useSelector((state: ReducerTypes) => state.companies);

  const renderCompanies = () => {
    return companies.map((c) => (
      <li key={c.id}>
        <Link to={c.id.toString()}>{c.name}</Link>
      </li>
    ));
  };

  return (
    <>
      <h1>Tractian</h1>
      <nav>
        <ul>{renderCompanies()}</ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
