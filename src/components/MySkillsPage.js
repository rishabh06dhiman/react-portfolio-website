import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import styled from "styled-components";
import {  Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import SkillsParticleComponent from "../subComponents/SkillsParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { useMediaQuery } from "../usemediaQuery";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    position: relative;
    top:10rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor:pointer
  font-family: "Ubantu mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
    color: ${(props) => props.theme.body};
    background-color:  ${(props) => props.theme.text};
  }

  @media only Screen and (max-width: 40em) {
    width: 50vw;
    height: max-content;
    margin-bottom:4rem;
  }
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
      fill:${props=>props.theme.body}
    }
  }
  &>*:first-child{
    margin-right: 1rem;
  }

  @media only Screen and (max-width: 40em) {
    font-size: calc(0.8em + 1vw)
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
  
      color:${props=>props.theme.body}
    
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  @media only Screen and (max-width: 40em) {
    font-size: calc(0.5em + 1vw)
  }
`;

const MySkillsPage = () => {

  const useIsSmall = () => useMediaQuery("(max-width:40em)");
  const isSmall = useIsSmall();

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light' />
        <PowerButton />
        <SkillsParticleComponent theme='light' />
        <Main>
          <Title>
            <Develope height={40} width={40} /> Frontend Developer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>Tech</strong>
            <p>
              Html, Css, Js, React, Redux, Angular, Bootstrap, java
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Jira, Figma  etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope height={40} width={40} /> Backend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Tech</strong>
            <p>
              DBMS, SQL, Mongodb, Node, Express, Data Structure, API, 
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github,  etc.</p>
          </Description>
        </Main>
        {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}
        <BigTitle text="SKILLS" top={isSmall? "87%" :"80%"} right={isSmall? "20%" :"30%"} />
       
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

