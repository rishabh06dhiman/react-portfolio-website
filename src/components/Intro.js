import React from "react";
import styled from "styled-components";
import Me from "../assets/images/profile-img.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../usemediaQuery";

const Box = styled(motion.div)`
  position: absolute;
  left: 17.5%;
  top: 30%;
  transform: translate(-50% -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media only Screen and (max-width: 40em) {
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height: auto;
    display: flex;
    flex-direction: column;

    background: linear-gradient(
          to left,
          ${(props) => props.theme.text} 50%,
          ${(props) => props.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to left,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.body} 50%
        )
        top;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    z-index: 1;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 10%;
    transfrom: translate(-50%, -50%);
    width: 100%;
    height: auto;
  }

  @media only Screen and (max-width: 40em) {
    width: 100%;
    position: relative;
    height: 50%;
    .pic {
      position: absolute;
      bottom: 0;
      left: 0%;
      transfrom: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }

    border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.body};
  
  }
`;
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${(props) => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color:${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size(0.5rem + 1.5vw);
    font-weight:300;
}

@media only Screen and (max-width: 40em) {
font-size: calc(1em + 1.5vw);
color: ${(props) => props.theme.body};

cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;


&>*:last-child{
    color:${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size(0.5rem + 1.5vw);
    font-weight:300;
}
}

`;

const Intro = () => {
  const useIsSmall = () => useMediaQuery("(min-width:40em)");
  // const isSmall = useMediaQuery('(min-width:40em)');
  const isSmall = useIsSmall();

  // const variants = isSmall ? {
  //   initial:{
  //     height:0
  //   },
  //   animate:{
  //     height:"75vh"
  //   },
  //   transition:{
  //     type: "spring",
  //      duration: 2,
  //       delay: 1
  //   }
  // }:{
  //   initial:{
  //     height:0
  //   },
  //   animate:{
  //     height:"45vh"
  //   },
  //   transition:{
  //     type: "spring",
  //      duration: 2,
  //       delay: 1
  //   }
  // }

  return (
    <Box
      // initial={{ height: 0 }}
      // animate={{ height: "45vh" }}
      // transition={{ type: "spring", duration: 2, delay: 1 }}

      initial={isSmall ? { height: 0 } : { height: 0 }}
      animate={isSmall ? { height: "45vh" } : { height: "75vh" }}
      transition={
        isSmall
          ? { type: "spring", duration: 2, delay: 1 }
          : { type: "spring", duration: 2, delay: 1 }
      }
      // initial="initial"
      // animate="animate"
      // transition="transition"
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Rishabh.</h3>
          <h6>I design and code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="profile pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
