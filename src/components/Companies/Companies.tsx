import { useParams } from "react-router-dom";
// import { CompaniesTypes } from "./Companies.types";

const Companies = () => {
  const { company_id } = useParams();

  return <>{company_id}</>;
};

export default Companies;
