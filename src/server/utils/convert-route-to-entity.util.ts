const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  payrolls: 'payroll',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
