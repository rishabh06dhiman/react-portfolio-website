import React from 'react'
import styled from 'styled-components'

import ParticleConfigLight from '../config/ParticleConfigLight'

const Box = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:0;
`

const SkillsParticleComponent = (props) => {
  return (
    <Box>
       <ParticleConfigLight style={{position:'absolute',top:0}} />
    </Box>
  )
}

export default SkillsParticleComponent