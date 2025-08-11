export interface Campaign {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  budget: number;
  targetAudience: string[];
  createdAt: string;
  updatedAt: string;
}