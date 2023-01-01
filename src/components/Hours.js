import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { imgIconName } from '../generateIcon'

const Hours = ({ forecast }) => {
  const hours = forecast[0].hour
  // console.log(hours.map((i, index) => console.log(i)))

  const listRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDown(true)
    setStartX(e.pageX - listRef.current.offsetLeft)
    setScrollLeft(listRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDown(false)
  }

  const handleMouseUp = () => {
    setIsDown(false)
  }

  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - listRef.current.offsetLeft
    const walk = (x - startX) * 3 //magic number
    listRef.current.scrollLeft = scrollLeft - walk
  }
  return (
    <Wrapper>
      {/* <div className='hours'> */}
      <ul className='slider'>
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
                <div className='hour-temp'>{Math.round(temp_c)}</div>
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
  background: var(--c3);
  border-radius: 15px;
  margin: 0px 0;
  padding: 0px;

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
      border: 1px solid white;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
    }
  }
`
