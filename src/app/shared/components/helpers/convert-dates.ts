import moment from 'moment-hijri'
export function convertFromGregorianToHijri(newGregorianDate: any) {
  const gregorianMoment = moment([
    newGregorianDate.year,
    newGregorianDate.month - 1,
    newGregorianDate.day
  ])

  // Format Hijri date
  const hijriYear = gregorianMoment.format('iYYYY')
  const hijriMonth = gregorianMoment.format('iMM')
  const hijriDay = gregorianMoment.format('iDD')
  const hijriDate = {
    day: parseInt(hijriDay, 10),
    month: parseInt(hijriMonth, 10),
    year: parseInt(hijriYear, 10)
  }
  return hijriDate
}
export function convertFromHijriToGregorian(newHijriDate: any) {
  const hijriMoment = moment(
    `${newHijriDate.year}-${newHijriDate.month}-${newHijriDate.day}`,
    'iYYYY-iM-iD'
  )

  const gregorianYear = hijriMoment.year()
  const gregorianMonth = hijriMoment.month() + 1
  const gregorianDay = hijriMoment.date()

  const gregorianDates = {
    year: gregorianYear,
    month: gregorianMonth,
    day: gregorianDay
  }
  return gregorianDates
}
