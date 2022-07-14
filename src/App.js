import "./App.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* <SoundBar /> */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
