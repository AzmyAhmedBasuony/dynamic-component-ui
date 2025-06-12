import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';
import { AdminBioComponent } from '../admin-bio/admin-bio.component';
import { StandarBioComponent } from '../standar-bio/standar-bio.component';
import { NgComponentOutlet } from '@angular/common';
import { layout_configs } from '../../../../../../models/layout-config.model';

@Component({
  selector: 'app-custom-dialog',
  imports: [NgComponentOutlet],
  template: `<h1>{{ bioType }}</h1>
    <button
      (click)="changeBio()"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Change user Bio
    </button>
    @let ct = componentType();
    <ng-container
      [ngComponentOutlet]="ct.type"
      [ngComponentOutletInputs]="inputs()"
      #instance="ngComponentOutlet"
    /> `,
  styles: ``,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDialogComponent {
  description = `${VERSION.full} - Untagged Template Literals`;

  userName = signal('N/A');
  userType = signal<'user' | 'admin' | 'intruder'>('user');
  bioType: any = 'admin';
  componentType = computed(() => layout_configs[this.userType()]);
  inputs = computed(() => ({
    permissions: this.componentType().permissions,
    name: this.userName(),
    type: this.userType(),
  }));

  changeBio() {
    if (this.userType() == 'admin') {
      this.userType.set('user');
    } else {
      this.userType.set('admin');
    }
  }
}
