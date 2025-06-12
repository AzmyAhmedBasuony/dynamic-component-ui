import { ChangeDetectionStrategy, Component, VERSION, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-literals',
  imports: [],
  templateUrl: './template-literals.component.html',
  styleUrl: './template-literals.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateLiteralsComponent {
  description = `${VERSION.full} - Untagged Template Literals`;

}
