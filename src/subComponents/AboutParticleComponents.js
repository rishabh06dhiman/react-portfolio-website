import React from 'react'
import styled from 'styled-components'
import ParticleConfigDark from '../config/ParticleConfigDark'

const Box = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:0;
`

const AboutParticleComponents = () => {
  return (
    <Box>
       <ParticleConfigDark />
    </Box>
  )
}

export default AboutParticleComponents