export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  status: boolean;
  password?: string;
  created_at: number;
  updated_at: number;
}
