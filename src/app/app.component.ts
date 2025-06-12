import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './shared/components/user-register/user-register.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, UserRegisterComponent],
  template: `<router-outlet />
    <app-user-register /> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  model!: NgbDateStruct;
}
