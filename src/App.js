import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

const urlAllStations = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
// const urlAllStations =
//   'https://powietrze.gios.gov.pl/pjp/current/getAQIDetailsList'

function App() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchStations = async () => {
    setLoading(true)
    console.log('start fetch')
    try {
      const response = await fetch(urlAllStations, {
        method: 'GET',
        mode: 'no-cors',
      })
      const data = await response.text()
      console.log('try')
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchStations()
    }, 100)
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
