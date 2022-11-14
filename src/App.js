import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

// const url = 'https://danepubliczne.imgw.pl/api/data/synop'
const url = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'

function App() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchStations = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      const data = await response.json()
      console.log('data:', data)
      setLoading(false)
      setStations(data)
    } catch (error) {
      setLoading(false)
      // console.log('Error1: ', error.message)
      console.log('Error2: ', error)
    }
  }

  useEffect(() => {
    fetchStations()
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
      <Main stations={stations} />
      <Footer />
    </>
  )
}

export default App
