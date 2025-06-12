import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserControlComponent } from '../../../../../pages/user/components/user-control/user-control/user-control.component';
import { CustomDialogComponent } from '../../../ng-dynamic/d-component/components/ng-component-outlet/custom-dialog/custom-dialog.component';
import { PeopleSelectionComponent } from '../rx-resource/components/people-selection/people-selection.component';
import { VehicleSelectionComponent } from '../rx-resource/components/vehicle-selection/vehicle-selection.component';

@Component({
  selector: 'app-test-new-updates-v19-2',
  imports: [TranslateModule,PeopleSelectionComponent, UserControlComponent, VehicleSelectionComponent, CustomDialogComponent],
template:`
 <div>{{ 'HELLO' | translate }}</div>

<button  (click)="changLang()" 
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Change Lang
</button>
<h1>Dynamic component Using ng content oulet</h1>
<app-custom-dialog/>
<app-user-control/>
<h1>vehicle Example for rx-resource</h1>
<app-vehicle-selection/>
<h1>people list Example for rx-resource</h1>
<app-people-selection> 


`
  ,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestNewUpdatesV192Component {
  translate = inject(TranslateService);
  langFlag: boolean = false;
  changLang() {
    this.langFlag = !this.langFlag;
    if (this.langFlag) {
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }
}
