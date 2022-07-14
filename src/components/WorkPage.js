import React, { useEffect,useRef } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";
import styled from "styled-components";
import {  YinYang } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import {Work} from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import { useMediaQuery } from "../usemediaQuery";


const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display:flex;
  align-items:center;
  
`;


const Main = styled(motion.ul)`
position:fixed;
top:12rem;
left:calc(10rem + 15vw);
height:40vh;
display:flex;
color:white;

@media only Screen and (max-width: 40em) {
  padding-top:1.5rem;
}
`

const Rotate = styled.span`
display:block;
position:fixed;
right:1rem;
bottom:1rem;
width:80px;
height:80px;
z-index:1;

@media only Screen and (max-width: 40em) {
  width:50px;
  height:50px;
}
`
//frammer motion configuration
const container = {

  hidden: {opacity:0},
  show:{
    opacity:1,  
    transition:{
      staggerChildren:0.5,
      duration:0.5,
    }
  }
}

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(()=>{
    let element = ref.current;
    const rotate = () =>{
      element.style.transform = `translateX(${-window.pageYOffset}px)`
      yinyang.current.style.transform = `rotate(`+ -window.pageYOffset + 'deg)'
    }
    window.addEventListener('scroll', rotate)
     return () => window.removeEventListener('scroll', rotate)
  },[])

   const useIsSmall = () => useMediaQuery("(max-width:40em)");
    const isSmall = useIsSmall();

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark' />
        <PowerButton />
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
         {
           Work.map(d=>
            <Card key={d.id} data={d} />
            )
         }
        </Main>
       <Rotate ref={yinyang}>
         {/* <YinYang width={80} height={80} fill={DarkTheme.text}/> */}
         <YinYang width={isSmall? "50" :"80"} height={isSmall? "50" :"80"} fill={DarkTheme.text}/>
      </Rotate> 
      <BigTitle text="WORK" top='10%' right='20%' />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
