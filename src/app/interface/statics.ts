interface RevenueData {
  revenue: number;
  month: number;
}

interface TotalData {
  _id: null;
  totalRate: number;
}

export interface StatisticsData {
  users: number;
  doctors: number;
  total: TotalData[];
  appointments: number; // Corrected the typo in the property name
  revenue: RevenueData[];
}
