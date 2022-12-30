export const currentDate = () => {
  const date = new Date()
  let day = ''
  switch (date.getDay()) {
    case 0:
      day = 'niedziela'
      break
    case 1:
      day = 'poniedziałek'
      break
    case 2:
      day = 'wtorek'
      break
    case 3:
      day = 'środa'
      break
    case 4:
      day = 'czwartek'
      break
    case 5:
      day = 'piątek'
      break
    case 6:
      day = 'sobota'
      break
    default:
      day = 'error'
  }

  let month = ''
  switch (date.getMonth()) {
    case 0:
      month = 'styczeń'
      break
    case 1:
      month = 'luty'
      break
    case 2:
      month = 'marzec'
      break
    case 3:
      month = 'kwiecień'
      break
    case 4:
      month = 'maj'
      break
    case 5:
      month = 'czerwiec'
      break
    case 6:
      month = 'lipiec'
      break
    case 7:
      month = 'sierpień'
      break
    case 8:
      month = 'wrzesień'
      break
    case 9:
      month = 'październik'
      break
    case 10:
      month = 'listopad'
      break
    case 11:
      month = 'grudzień'
      break
  }
  return date.getDate() + ' ' + month + ',' + day
}
