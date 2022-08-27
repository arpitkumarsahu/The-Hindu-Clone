import styled from "styled-components";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaMobile,
  FaSearch,
  FaBars
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopDiv = styled.div`
  display: flex;
  gap: 5px;
  color: rgb(90, 90, 90);
  font-size: 13px;
  

  & i {
    color: rgb(90, 90, 90);
    border-right: 1px solid grey;
    padding: 8px 5px;
    width: 28px;
  }
  & p {
    margin-top: 5px;
    
  }
`;
const Div = styled.div`
border-bottom: 1px solid grey;
margin: auto;
padding-top: 15px;
  width: 100%%;
  display: flex;
  justify-content: space-between;
`

const SearchDiv = styled.div`
  display: flex;

  & i {
    color: rgb(90, 90, 90);
    padding: 8px 5px;
    width: 28px;
  } 
  & input {
    border: none;
    border-left: 1px solid grey
  }
  
`;

const ImgDiv = styled.div`
  & img {
    margin: auto;
    display: flex;
    margin-top: 10px;
   
  } 
  & div {
    display: flex;
    gap: 20px;
    font-size : 13px;
    justify-content: center;
  }
`

const BottomDiv = styled.div`
display: flex;
gap: 10px;
align-items: center;
border-bottom: 1px solid grey;
& i {
  color: rgb(90, 90, 90);
  font-size: 20px;
  cursor: pointer;
    
}
`

const Category = styled.div`
display: flex;
gap: 5px;
line-height: 25px;
    color: #828282;
    font-size: 12px;
    letter-spacing: 1.2px;
    padding: 0 11px;
    font-family: "Fira Sans",sans-serif;
    font-weight: 600;
& p {
  cursor: pointer;
}
  & p:hover {
    color: #ff0303;
  }
`

const Trial = styled.div`

font-family: "Fira Sans",sans-serif;
font-weight: 600;
& button {
  cursor: pointer;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 1.2px;
  border: none;
  font-family: "Fira Sans",sans-serif;
  background-color: #00419b;
  color: white;
  padding: 6px 13px;
  border-radius: 5px;
}
& button:hover {
  text-decoration: underline;
}
  
`

const Subscribe = styled.div`

font-family: "Fira Sans",sans-serif;
font-weight: 600;
& button {
  cursor: pointer;
  font-weight: 600;
  line-height: 29px;
  border: none;
  letter-spacing: 1.2px;
  font-family: "Fira Sans",sans-serif;
  background-color: #ffc000;
  color: black;
  padding: 6px 13px;
  border-radius: 5px;
}

& button:hover {
  background-color: #00419b;
  color: white;
}
`

const Login = styled.div`
cursor: pointer;
font-family: "Fira Sans",sans-serif;
font-weight: 600;
& button {
  cursor: pointer;
  font-weight: 600;
  line-height: 29px;
  border: 1px solid #00419b;
  letter-spacing: 1.2px;
  font-family: "Fira Sans",sans-serif;
  
  color: #00419b;
  padding: 6px 13px;
  border-radius: 5px;
}

& button:hover {
  background-color: #00419b;
  color: white;
}
`


const MainDiv = styled.div`
 width: 75%;
 margin: auto;
`

const Header = ({ handleToggle }) => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      <Div>
        <TopDiv>
          <i>
            <FaFacebookF />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaLinkedinIn />
          </i>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaTelegram />
          </i>
          <i>
            <FaEnvelope />
          </i>
          <i>
            <FaMobile />
          </i>
          <p>e-paper</p>
        </TopDiv>
        <SearchDiv>
          <input type="text" placeholder="search here" />
          <i><FaSearch /></i>
        </SearchDiv>
        
      </Div>
      <ImgDiv>
        <img onClick={() => navigate("/")} src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="The Hindu" />
        <div>
          <p>LATEST NEWS</p>
          <p>MONDAY, AUGUST 29 , 2022</p>
          <p>E-PAPER</p>
        </div>
        
      </ImgDiv>
      <BottomDiv>
          <i><FaBars onClick={handleToggle}/></i>
          <Category>
            <p onClick={() => navigate("/news/india")}>TODAY'S PAPER</p>
            <p>NEWS</p>
            <p>OPINION</p>
            <p>BUSINESS</p>
            <p>SPORTS</p>
            <p onClick={() => navigate("/entertainment")}>ENTERTAINMENT</p>
            <p>CROSSWORD+</p>
            <p>SCIENCE</p>
          </Category>
          <Trial>
            <button>GET TRIAL</button>
          </Trial>
          <Subscribe>
            <button>SUBSCRIBE NOW</button>
          </Subscribe>
          <Login>
            <button onClick={() => navigate("/login")}>LOGIN</button>
          </Login>
      </BottomDiv>
    </MainDiv>
  );
};

export default Header;
