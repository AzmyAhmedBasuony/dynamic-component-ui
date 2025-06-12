import { AdminBioComponent } from '../components/ng-dynamic/d-component/components/ng-component-outlet/admin-bio/admin-bio.component';
import { StandarBioComponent } from '../components/ng-dynamic/d-component/components/ng-component-outlet/standar-bio/standar-bio.component';

export const layout_configs = {
  admin: {
    type: AdminBioComponent,
    permissions: ['read', 'write', 'delete'],
  },
  user: {
    type: StandarBioComponent,
    permissions: ['read'],
  },
  intruder: {
    type: StandarBioComponent,
    permissions: [],
  },
};
