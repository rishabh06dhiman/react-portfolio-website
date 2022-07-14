import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import AboutParticleComponents from "../subComponents/AboutParticleComponents";
import astronaut from "../assets/images/spaceman4.png"
import { keyframes } from "styled-components";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow:hidden;
  
`;


const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transfrom: translateY(-10px)}
`

const Spaceman = styled.div`
position:absolute;
top:15%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
  width:100%;
  height:auto;

}

@media only Screen and (max-width: 40em) {
  position:absolute;
  top:10%;
  right: 5%;
}
`
const Main = styled.div`
border: 2px solid ${props=>props.theme.text};
color: ${props=>props.theme.text};
padding: 2rem;
width:50vw;
height:60vh;
z-index:3;
line-height:1.5;

display:flex;
align-items:center;
jsutify-content:center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position:absolute;
left: calc(5rem + 5vw);
top: 8rem;

font-family:'Ubutntu Mono',monospace;
font-style:italic;

@media only Screen and (max-width: 40em) {
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark' />
        <PowerButton />
        <AboutParticleComponents />
        {/* <SkillsParticleComponent theme='dark' /> */}
        
        <Spaceman>
            <img src={astronaut} alt="Spacemen" />
        </Spaceman>
        
        <Main>
        I'm a full stack developer located in India. I love to develop simple yet beautiful websites with great user experience.
        <br/><br/>
        I'm interested in the whole full stack Like trying new things and building great projects. I'm an independent developer. I love to write blogs and read books.
        <br/><br/>
        I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top='4%' left='5%' />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
