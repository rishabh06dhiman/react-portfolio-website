import { motion } from 'framer-motion'
import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube,Linkdin,Instagrame } from '../components/AllSvgs'
import {DarkTheme} from '../components/Themes'
// import {lightTheme} from '../components/Themes'
import { useMediaQuery } from "../usemediaQuery";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position:fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
  
    &>*:not(:last-child){
        margin: 0.5rem 0;
    }

    @media only Screen and (max-width: 40em) {     
        left:1rem;
    
    }

`
const Line = styled(motion.span)`
    width:2px;
    height:8rem;
    background-color: ${props=>props.color === 'dark' ? DarkTheme.text: DarkTheme.body};
`
const SocialIcons = (props) => {

    const useIsSmall = () => useMediaQuery("(max-width:40em)");
    const isSmall = useIsSmall();

  return (
    <Icons>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring",delay:1, duration:1}}
        >
            <a style={{color:'inherit'}} target="_blank" href={"https://github.com/rishabh06dhiman"}>
                <Github className="socialicons" width={isSmall? "20" :"25"} height={isSmall? "20" :"25"} fill={props.theme === "dark" ? DarkTheme.text: DarkTheme.body} />
            </a>
        </motion.div>

        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring",delay:1, duration:1.2}}
        >
            <a style={{color:'inherit'}} target="_blank" href={"https://www.linkedin.com/in/rishabhdhiman0602/"}>
                <Linkdin width={isSmall? "20" :"22"} height={isSmall? "20" :"22"} fill={props.theme === "dark" ? DarkTheme.text: DarkTheme.body}/>
            </a>
        </motion.div>

        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}} 
        transition={{type:"spring",delay:1, duration:1.4}}
        >
            <a style={{color:'inherit'}}  target="_blank" href={"#"}>
                <Twitter width={isSmall? "20" :"25"} height={isSmall? "20" :"25"} fill={props.theme === "dark" ? DarkTheme.text: DarkTheme.body}/>
            </a>
        </motion.div>

        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring",delay:1, duration:1.6}}
        >
            <a style={{color:'inherit'}}   target="_blank" href={"#"}>
                <Instagrame width={isSmall? "20" :"25"} height={isSmall? "20" :"25"} fill={props.theme === "dark" ? DarkTheme.text: DarkTheme.body}/>
            </a>
        </motion.div>

        {/* <div>
            <a style={{color:'inherit'}}   target="_blank" href="https://github.com/rishabh06dhiman" rel="noopener noreferrer">
                <YouTube width={25} height={25} fill='currentColor'/>
            </a>
        </div> */}
        
        <Line color={props.theme}
        initial={{
            height:0
        }} 
        // animate={{
        //     height:'8rem'   
        // }}

        animate={isSmall ? { height: '5rem' } : { height: '8rem' }}

        transition={{
            type:'spring', duration:1, delay:0.8
        }}
        />
    </Icons>
  )
}

export default SocialIcons