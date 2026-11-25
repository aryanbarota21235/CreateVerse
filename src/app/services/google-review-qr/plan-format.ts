export type PublicPlan = {
  id: string;
  name: string;
  priceInr: number;
  months: number;
  description: string;
  features: string[];
  popular: boolean;
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const period = (m: number) => (m === 12 ? "year" : m === 1 ? "month" : `${m} months`);
