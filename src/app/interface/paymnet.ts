export interface OrderData {
      amount: number;
      amount_due: number;
      amount_paid: number;
      attempts: number;
      created_at: number;
      currency: string;
      entity: string;
      id: string;
      notes: any[]; // You can replace 'any' with a more specific type if available
      offer_id: string | null;
      receipt: string;
      status: string;
    
  }