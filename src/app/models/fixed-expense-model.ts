export class FixedExpense {
  id?: number;
  name: string;
  supplierId?: number;
  fundId: number;
  amount: number;
  payoutPeriod: number;
  day: string;
  frequency: number;
  startDate: Date;
  endDate: Date;
  poNumber?: string;
}
