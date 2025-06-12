import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { CommonModule } from '@angular/common'

import { GregDatePickerComponent } from '../greg-date-picker/greg-date-picker.component'
import { HijriDatePickerComponent } from '../hijri-date-picker/hijri-date-picker.component'
import { convertFromGregorianToHijri, convertFromHijriToGregorian } from '../helpers/convert-dates'
@Component({
  selector: 'app-user-register',
  imports: [
    HijriDatePickerComponent,
    GregDatePickerComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRegisterComponent {
  userForm: FormGroup
  hijriDate: any | null = null
  gregorianDates: any | null = null
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      hijriDate: [null, Validators.required],
      gregorianDate: [null, Validators.required]
    })
  }

  onGregorianDateChange(newGregorianDate: any) {
    this.gregorianDates = newGregorianDate
    ;(this.userForm.get('gregorianDate') as FormControl).setValue(
      this.gregorianDates
    )
    this.hijriDate = convertFromGregorianToHijri(newGregorianDate)
    ;(this.userForm.get('hijriDate') as FormControl).setValue(this.hijriDate)
  }
  ////////////////from hijri to gregorian
  onHijriDateChange(newHijriDate: any) {
    this.hijriDate = newHijriDate
    ;(this.userForm.get('hijriDate') as FormControl).setValue(this.hijriDate)
    this.gregorianDates = convertFromHijriToGregorian(newHijriDate)
    ;(this.userForm.get('gregorianDate') as FormControl).setValue(
      this.gregorianDates
    )
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value)
    } else {
      console.log('Form is not valid')
    }
  }
}
