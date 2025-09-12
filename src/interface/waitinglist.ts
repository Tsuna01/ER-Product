export type WaitingForm = {
  patient_id: string;
  ward_id: string;
  date_added: string;      
  priority_level: string;  
  status: string;          
};

export type WaitingRow = {
  waiting_list_id: number;
  patient_id: number;
  ward_id: number;
  date_added: string;      
  priority_level: number;  
  status: string;
  name?: string;           
};