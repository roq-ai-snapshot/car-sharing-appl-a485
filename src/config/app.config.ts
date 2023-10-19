interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own bookings', 'Create reviews', 'Create reports', 'Edit own user info'],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage car details', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9331bf46-d463-48eb-abcd-f3bacacea58e',
};
