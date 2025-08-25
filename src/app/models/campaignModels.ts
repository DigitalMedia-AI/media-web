export interface Campaign {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: number;
  targetAudience: string[];
  createdAt: string;
  updatedAt: string;
}