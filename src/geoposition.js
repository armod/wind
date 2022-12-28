const success = (pos) => {
  const crd = pos.coords
  console.log('Your current position is:')
  console.log(`Latitude : ${crd.latitude}`)
  console.log(`Longitude: ${crd.longitude}`)
  console.log(`More or less ${crd.accuracy} meters.`)
}

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

export { success, error }
