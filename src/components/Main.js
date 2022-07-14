import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }


 
`;
const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: Calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;



  @media only Screen and (max-width: 40em) { 
    h2{
      font-size:1em;
    }
  }

`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: Calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 40em) { 
    color: ${(props) => props.theme.text};
    text-shadow: 2px 2px  #FFFFFF;
    h2{
      font-size:1em;
    }
  }

`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: Calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 40em) { 
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: 1px 1px  #000000;
    h2{
      font-size:1em;
      
    }
    
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 40em) { 
    color: ${(props) => props.theme.text};
    h2{
      font-size:1em;
    }
  }
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 40em) { 
    h2{
      font-size:1em;
    }
  }
`;
const rotate = keyframes`
from{
    transform: rotate(0);
}

to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "77%" : "35%")};
  left: ${(props) => (props.click ? "88%" : "44%")};
  transfrom: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only Screen and (max-width: 40em) {     

    top: ${(props) => (props.click ? "87%" : "40%")};
    left: ${(props) => (props.click ? "82%" : "33%")};
    transfrom: translate(-50%, -50%);
    

    .yinyang{
      width: ${(props) => (props.click ? "45px" : "120px")};
      height: ${(props) => (props.click ? "45px" : "120px")};
    }
    
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media only Screen and (max-width: 40em) { 
    position:absolute;
    top:0;
    bottom:50%;
    right:0;
    width:${(props)=>(props.click ? "100%":"0%")};
    height:${(props)=>(props.click ? "50%":"0%")};
    z-index:1;
    transition: height 0.5s ease, width 1s ease 0.5s;
   }
  
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            className="yinyang"
            onClick={() => handleClick()}
            height={click ? 120 : 200}
            width={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:rishabhjbs@gmail.com" }}
          // below line to open send mail option
          onClick={() => window.location = 'mailto:rishabhjbs@gmail.com'}
          
        > 
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        
        </Contact>

        <BLOG to="/blog">
          <motion.h2
           initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
           whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blogs
          </motion.h2>
        </BLOG>

        <WORK to="/work" click={click}>
          <motion.h2
           initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
             initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }} 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
             initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
             whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
