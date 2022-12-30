export const currentDate = () => {
  const date = new Date()
  const day = date.getDay()
  switch (day) {
    case 0:
      return 'niedziela'
    case 1:
      return 'poniedziałek'
    case 2:
      return 'wtorek'
    case 3:
      return 'środa'
    case 4:
      return 'czwartek'
    case 5:
      return 'piątek'
    case 6:
      return 'sobota'
  }
}
