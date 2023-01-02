import React from 'react'
import styled from 'styled-components'

const Map = ({ lat, lng }) => {
  return (
    <Wrapper>
      <iframe
        // width='600'
        // height='450'
        frameborder='0'
        style={{ border: 0 }}
        src={`https://www.windy.com/embed2.html?lat=${lat}&lon=${lng}&zoom=10&level=surface&overlay=wind&menu=&message=&pressure=&type=map&location=coordinates&detail=&detailLat=${lat}&detailLon=${lng}&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1`}
      />
    </Wrapper>
  )
}

export default Map

const Wrapper = styled.section``
