import { useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { ReducerTypes } from "../../reducers/types";

const Companies = () => {
  const params = useParams();
  const companyId = parseInt(params.companyId ?? "0");
  const company = useSelector((state: ReducerTypes) =>
    state.companies.find((c) => c.id === companyId)
  );

  if (!company) {
    return <Navigate to="/" />;
  }

  return <CompanyDashboard companyId={companyId} />;
};

export default Companies;

interface CompanyDashboardTypes {
  companyId: number | undefined;
}

const CompanyDashboard = ({ companyId }: CompanyDashboardTypes) => {
  const assets = useSelector((state: ReducerTypes) =>
    state.assets.filter((a) => a.companyId === companyId)
  );
  const units = useSelector((state: ReducerTypes) =>
    state.units.filter((un) => un.companyId === companyId)
  );
  const users = useSelector((state: ReducerTypes) =>
    state.users.filter((u) => u.companyId === companyId)
  );
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "Assets",
    },
    series: [
      {
        type: "line",
        data: assets.map((a) => a.healthscore),
      },
    ],
  };

  console.log(assets);
  console.log(units);
  console.log(users);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
