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
import {
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'
import {
  NgbCalendar,
  NgbCalendarIslamicUmalqura,
  NgbDatepickerI18n,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { CustomDatepickerI18n } from '../../services/custom-date-picker-i18n.service'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-hijri-date-picker',
  templateUrl: './hijri-date-picker.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: HijriDatePickerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class HijriDatePickerComponent
  implements OnInit, OnChanges
{
  @Output() dateChange = new EventEmitter<any>()
  @Input() placeholder!: string
  @Input() label!: string
  @Input() required = false
  minDate = { year: 1370, month: 1, day: 1 }
  maxDate = { year: 1500, month: 12, day: 30 }
  @Input() control!: any

  constructor(
    injector: Injector,

    @Inject(NgbDatepickerI18n) private datepickerI18n: CustomDatepickerI18n
  ) {
  }
  ngOnInit(): void {
    this.datepickerI18n.setLanguage('ar')
    this.datepickerI18n.setDatePickerType('hijri')
  }
  ngOnChanges() {
    this.datepickerI18n.setLanguage('ar')
    this.datepickerI18n.setDatePickerType('hijri')
  }
  onDateChange() {
    this.dateChange.emit(this.control.value)
  }
}
