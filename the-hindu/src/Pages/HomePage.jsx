import styled from "styled-components";
import Footer from "../components/Footer";
import { Blog } from "../components/Blog";
import { Best } from "../components/Best";
import { Home } from "../components/Home";
import TopComponents from "../components/TopComponent";

import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Singlepage from "../components/Singlepage";
import { Login } from "./Login";
import { Register } from "./Register";
import { Entertainment } from "../components/Entertainment";
import { India } from "../components/India";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin: auto;
  width: 70%;
  & > div:first-child {
    width: 70%;
  }

  & > div:last-child {
    width: 28%;
  }
`;

function HomePage({ handleToggle }) {
  return (
    <>
      <Header handleToggle={handleToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <Home />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route
          path="/news/india"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <India />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route
          path="/entertainment"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <Entertainment />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article" element={<Singlepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomePage;
