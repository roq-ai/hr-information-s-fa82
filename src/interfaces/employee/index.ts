import { PayrollInterface } from 'interfaces/payroll';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  vacation_days: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  user?: UserInterface;
  _count?: {
    payroll?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
}
