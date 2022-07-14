import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitle from '../subComponents/BigTitle';

import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent';

import AnchorComponent from '../subComponents/Anchor';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../usemediaQuery';


const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment:fixed;
background-position:center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top: 10rem;

@media only Screen and (max-width: 40em) {
padding-top: 7rem;
}

`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);

@media only Screen and (max-width: 40em) {
display: grid;
grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
}


`
//frammer motion config
const container = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const BlogPage = () => {

  const useIsSmall = useMediaQuery("(max-width:40em)");
  // const isSmall = useIsSmall();
 

  const [numbers, setNumbers] = useState(0);
  // const [mobileview, setMobileView]  = useState(false);

  // const check = ()=>{ 
  //   setMobileView(!mobileview);
  // }

  useEffect(()=>{
   let num = (window.innerHeight - 70)/30;
   setNumbers(parseInt(num));
  },[])

  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate='show'
    exit={{
      opacity:0, transition:{duration:0.5}
    }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons /> 
        {useIsSmall ?  null : <AnchorComponent numbers={numbers}/>}
        {/* <AnchorComponent numbers={numbers}/> */}
        <Center>
        <Grid>
          {
            Blogs.map(blog=>{
              return <BlogComponent key={blog.id} blog={blog} />
            })
          }
        </Grid>
      </Center>
      <BigTitle text="BLOG" top="5rem" left="5rem"/>
      </Container>
    </MainContainer>
  )
}

export default BlogPage