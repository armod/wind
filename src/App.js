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
    fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': 'powietrze.gios.gov.pl',
        'Access-Control-Allow-Credentials': 'true',
        // 'cache-control': 'max-age=120, public',
        // 'cache-control': 'private',
        // 'content-type': 'application/json;charset=utf-8',
        // 'Access-Control-Allow-Origin': 'https://powietrze.gios.gov.pl',
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
