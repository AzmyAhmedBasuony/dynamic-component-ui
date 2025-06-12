import { Injectable } from '@angular/core'
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

const ARABIC_MONTHS_GERG = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'
]
const ARABIC_MONTHS_Hijri = [
  'محرم',
  'صفر',
  'ربيع الأول',
  'ربيع الآخر',
  'جمادى الأولى',
  'جمادى الآخرة',
  'رجب',
  'شعبان',
  'رمضان',
  'شوال',
  'ذو القعدة',
  'ذو الحجة'
]
const ENGLISH_MONTHS_Hijri = [
  'Muh',
  'Saf',
  'Rab Aw',
  'Rab Tha',
  'Jum Aw',
  'Jum Tha',
  'Raj',
  'Sha',
  'Ram',
  'Sha',
  'Dh Qid',
  'D Hij'
]
const ARABIC_WEEKDAYS = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
const ENGLISH_WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  ARABIC_MONTHS: any = []
  type: string = ''
  private currentLang = 'ar'

  setLanguage(lang: string) {
    this.currentLang = lang
  }

  setDatePickerType(type: string) {
    this.type = type
    if (type === 'gerg') {
      this.ARABIC_MONTHS = ARABIC_MONTHS_GERG
    } else if (type === 'hijri') {
      this.ARABIC_MONTHS = ARABIC_MONTHS_Hijri
    }
  }

  private toArabicNumbers(value: number): string {
    return value.toString().replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d])
  }

  override getMonthShortName(month: number, year?: number): string {
    if (this.type === 'gerg') {
      return this.currentLang === 'ar'
        ? this.ARABIC_MONTHS[month - 1]
        : new Intl.DateTimeFormat('en', { month: 'short' }).format(
            new Date(year ?? 2000, month - 1)
          )
    } else {
      if (this.currentLang === 'ar') {
        return this.ARABIC_MONTHS[month - 1]
      } else {
        return ENGLISH_MONTHS_Hijri[month - 1]
      }
    }
  }

  override getMonthFullName(month: number, year?: number): string {
    return this.currentLang === 'ar'
      ? this.ARABIC_MONTHS[month - 1]
      : new Intl.DateTimeFormat('en', { month: 'long' }).format(
          new Date(year ?? 2000, month - 1)
        )
  }

  override getWeekdayLabel(weekday: number): string {
    return this.currentLang === 'ar'
      ? ARABIC_WEEKDAYS[weekday % 7]
      : ENGLISH_WEEKDAYS[weekday % 7]
  }

  override getDayAriaLabel(date: NgbDateStruct): string {
    return this.currentLang === 'ar'
      ? `${this.toArabicNumbers(date.day)}-${this.toArabicNumbers(date.month)}-${this.toArabicNumbers(date.year)}`
      : `${date.day}-${date.month}-${date.year}`
  }

  override getYearNumerals(year: number): string {
    return this.currentLang === 'ar'
      ? this.toArabicNumbers(year)
      : year.toString()
  }

  override getDayNumerals(date: NgbDateStruct): string {
    return this.currentLang === 'ar'
      ? this.toArabicNumbers(date.day)
      : date.day.toString()
  }
}
