import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Injector,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  OnChanges
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  NgbDatepickerI18n,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap'
import { CustomDatepickerI18n } from '../../services/custom-date-picker-i18n.service'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-greg-date-picker',
  imports: [
    FormsModule,
    CommonModule,
    NgbDatepickerModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './greg-date-picker.component.html',
  styleUrl: './greg-date-picker.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class GregDatePickerComponent
  implements OnInit, OnChanges
{
  @Output() dateChange = new EventEmitter<any>()
  @Input() placeholder!: string
  @Input() label!: string
  @Input() required = false
  minDate = { year: 1950, month: 1, day: 1 }
  maxDate = { year: 2030, month: 12, day: 31 }
  @Input() control!: any

  constructor(
    injector: Injector,

    @Inject(NgbDatepickerI18n) private datepickerI18n: CustomDatepickerI18n
  ) {
  }
  ngOnInit() {
    this.datepickerI18n.setLanguage('ar')
    this.datepickerI18n.setDatePickerType('gerg')
  }
  ngOnChanges() {
    this.datepickerI18n.setLanguage('ar')
    this.datepickerI18n.setDatePickerType('gerg')
  }
  onDateChange() {
    this.dateChange.emit(this.control.value)
  }
}
