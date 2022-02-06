export interface ActionType {
  type: string;
  payload: any;
}

export interface AssetType {
  companyId: number;
  healthscore: number;
  id: number;
  image: string;
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  model: string;
  name: string;
  sensors: [string];
  specifications: { maxTemp: 80 };
  status: string;
  unitId: 1;
}

export interface CompanyType {
  id: number;
  name: string;
}

export interface UnitType {
  companyId: number;
  id: number;
  name: string;
}

export interface UserType {
  email: string;
  companyId: number;
  id: number;
  name: string;
  unitId: number;
}

export interface ReducerTypes {
  assets: [AssetType];
  companies: [CompanyType];
  units: [UnitType];
  users: [UserType];
}
