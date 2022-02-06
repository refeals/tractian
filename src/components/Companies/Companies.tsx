import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { ReducerTypes } from "../../reducers/types";
// import { CompaniesTypes } from "./Companies.types";

const Companies = () => {
  const { companyId } = useParams();
  const company = useSelector((state: ReducerTypes) =>
    state.companies.find((c) => c.id.toString() === companyId)
  );

  if (!company) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <CompanyDashboard companyId={companyId!.toString()} />
    </>
  );
};

export default Companies;

interface CompanyDashboardTypes {
  companyId: string;
}

const CompanyDashboard = ({ companyId }: CompanyDashboardTypes) => {
  const assets = useSelector((state: ReducerTypes) =>
    state.assets.filter((a) => a.companyId.toString() === companyId)
  );
  const units = useSelector((state: ReducerTypes) =>
    state.units.filter((un) => un.companyId.toString() === companyId)
  );
  const users = useSelector((state: ReducerTypes) =>
    state.users.filter((u) => u.companyId.toString() === companyId)
  );

  console.log(assets);
  console.log(units);
  console.log(users);

  return <>CompanyDashboard</>;
};
