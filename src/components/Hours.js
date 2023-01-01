import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components/macro'
import { imgIconName } from '../generateIcon'

const Hours = ({ forecast }) => {
  const hours = forecast[0].hour
  // console.log(hours.map((i, index) => console.log(i)))

  // useRef służy do przechowywania odwołania do elementu listy, co pozwala na dostęp do jego właściwości i metod
  const listRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // gdy używkownik naciśnie przycisk myszy na elemencie listy, to zapisuje położenie kursora i przesunięcie listy
  const handleMouseDown = (e) => {
    setIsDown(true)
    setStartX(e.pageX - listRef.current.offsetLeft)
    setScrollLeft(listRef.current.scrollLeft)
  }

  // opuszczenie elementu
  const handleMouseLeave = () => {
    setIsDown(false)
    // console.log(isDown)
  }

  // puszczenie przycisku myszy
  const handleMouseUp = () => {
    setIsDown(false)
    // console.log(isDown)
  }

  // gdy użytkownik przesuwa kursor nad elementem listy, jeśli true oblicza ile należy przesunąć listę i ustawia przewinięcie za pomocą scrollLeft
  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - listRef.current.offsetLeft
    const walk = (x - startX) * 2 //magic number
    listRef.current.scrollLeft = scrollLeft - walk
  }
  // dla dotykowego
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX)
    setScrollLeft(listRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    // e.preventDefault()
    const x = e.touches[0].pageX
    const walk = (x - startX) * 2 //magic number
    listRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    // ustawia godzinę od której zostanie wyświetlona prognoza godzinowa
    const currentHour = new Date().getHours() + 1
    listRef.current.scrollLeft = 74 * currentHour
    // console.log(new Date().getHours())
  }, [])
  return (
    <Wrapper>
      {/* <div className='hours'> */}
      <ul
        className='slider'
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {hours.map((item, index) => {
          const {
            temp_c,
            time,
            is_day,
            condition: { icon },
          } = item
          return (
            <li key={index}>
              <div className='hour-container'>
                <div className='hour-time'>
                  {time.substring(10, 13)}
                  {Number(time.substring(10, 13)) < 12 ? ' am' : ' pm'}
                </div>
                <div className='hour-icon'>
                  <img
                    src={`/images/${
                      is_day === 1 ? 'day' : 'night'
                    }/${imgIconName(icon)}`}
                    alt='icon'
                  />
                </div>
                <div className='hour-temp'>{Math.round(temp_c)}&deg;</div>
              </div>
            </li>
          )
        })}
      </ul>
      {/* </div> */}
    </Wrapper>
  )
}

export default Hours

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background: var(--c3); */
  border-radius: 15px;

  .slider {
    display: flex;
    overflow-x: hidden;
    white-space: nowrap;
    list-style: none;
    li {
      display: inline-block;
      text-align: center;
    }
    .hour-container {
      border-radius: 14px;
      background: var(--c4);
      /* border: 1px solid white; */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      .hour-time {
        padding-top: 5px;
        color: var(--c5);
      }
      .hour-temp {
        padding-bottom: 5px;
        font-size: 1.2rem;
      }
    }
  }
`
