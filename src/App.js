import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

// const url = 'https://danepubliczne.imgw.pl/api/data/synop'
const url = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
// const url =
//   'https://api.dane.gov.pl/1.4/resources/42634,liczba-studentow-z-obywatelstwem-ukrainskim-w-podziale-na-wojewodztwa_-stan-na-07112022/data'

function App() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchStations = async () => {
    fetch(url, {
      mode: 'no-cors',
      headers: {
        //   'Content-Type': 'application/json',
        // Host: 'api.gios.gov.pl',
        // Accept: '*/*',
        // Referer: 'http://localhost:3000/',
        // Connection: 'keep-alive',
        // 'Sec-Fetch-Mode': 'cors',
        // 'access-control-allow-origin': 'powietrze.gios.gov.pl',
        //   'Access-Control-Allow-Credentials': 'true',
        // 'cache-control': 'max-age=120, public',
        // 'cache-control': 'private',
        // 'content-type': 'application/json;charset=utf-8',
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log('dane:', json))
      .catch((err) => console.log('Failed', err.message))
  }
  //   access-control-allow-headers: Origin ,X-Requested-With ,Content-Type ,Accept ,Access-Control-Request-Method
  // access-control-allow-methods: GET ,POST ,OPTIONS
  // access-control-allow-origin: *
  //   setLoading(true)
  //   try {
  //     const response = await fetch(url, {
  //       // mode: 'cors',
  //       // headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  //     })
  //     console.log('data:', response)
  //     const data = await response.json()
  //     setLoading(false)
  //     setStations(data)
  //   } catch (error) {
  //     setLoading(false)
  //     // console.log('Error1: ', error.message)
  //     console.log('Error2: ', error)
  //   }
  // }

  useEffect(() => {
    fetchStations()
    console.log('effect:', stations)
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
      {/* <Main stations={stations} /> */}
      <Footer />
    </>
  )
}

export default App
