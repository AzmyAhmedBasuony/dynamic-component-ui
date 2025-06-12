import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { userControlForm } from '../../../models/user-control.model';
import { DFormComponent } from '../../../../../shared/components/ng-dynamic/d-form/components/d-form.component';
import { IDFormStructure } from '../../../../../shared/components/ng-dynamic/d-form/interfaces/i-d-form-structure';

@Component({
  selector: 'app-user-control',
  imports: [DFormComponent],
  templateUrl: './user-control.component.html',
  styleUrl: './user-control.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlComponent  {
  userControlForm: IDFormStructure[] = userControlForm;
  constructor() { 

  }

}
