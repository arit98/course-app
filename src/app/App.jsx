import React, { useRef, useContext } from "react";
import NavBar from "../components/NavBar/NavBar";
import MainPage from "../pages/MainPage/MainPage";
import SignUpModal from "../components/modals/SignUpModal";
import SignInModal from "../components/modals/SignInModal";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { setSignInOpen, setSignUpOpen } = useContext(AuthContext);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollHandler = (section) => {
    if (section === "section1") {
      section1Ref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section2") {
      section2Ref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section3") {
      section3Ref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "section4") {
      section4Ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <NavBar
        scrollHandler={scrollHandler}
        onSignInClick={() => setSignInOpen(true) || setSignUpOpen(false)}
        onSignUpClick={() => setSignUpOpen(true) || setSignInOpen(false)}
      />
      <MainPage
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
      />
      <SignInModal />
      <SignUpModal />
      <ToastContainer />
    </>
  );
};

export default App;
