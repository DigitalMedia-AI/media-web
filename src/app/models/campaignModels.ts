export interface Campaign {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'New' | 'Ongoing' | 'Delivered' | 'Reconciled';
  budget: number;
  targetAudience: string[];
  createdAt: string;
  updatedAt: string;
}
