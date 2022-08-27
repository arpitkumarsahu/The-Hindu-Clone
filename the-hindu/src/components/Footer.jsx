import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMobile, FaSearch, FaTelegram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const Foot = styled.div`
width: 75%;
margin: auto;
margin-top: 25px;
`

const Div = styled.div`
border-bottom: 1px solid grey;
background-color: rgb(245, 245, 245);
margin: auto;
padding-top: 15px;
  width: 100%%;
  display: flex;
  justify-content: space-between;
`
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
    border-left: 1px solid grey;
    background: #f5f5f5;
  }
  
`;

const ImgDiv = styled.div`
& img {
    height: 30px;
    margin-bottom: -15px;
    margin-left: -80px;
}
`;

const Trending = styled.div`
display: flex;
justify-content: space-between;
margin-left: 20px;
margin-right: 50px;
margin-top: 25px;
border-bottom: 1px solid grey;
& div {
    
    & h3{
        font-size:12px;
        color: #133b5a;
        letter-spacing: 1.2px;
        font-family: "Fira Sans",sans-serif;
        font-weight: 600;
        cursor: pointer;
    } 
    & p {
        font-size:12px;
        color: #7e7c76;
        line-height: 24px;
        font-family: "Fira Sans",sans-serif;
    }
    & p:hover {
        cursor: pointer;
        text-decoration: underline;
    }
}
`;

const Last = styled.div`
background-color: rgb(234, 234, 234);
& div {
    display:flex;
    & h3{
        line-height: 25px;
        color: #828282;
        font-size: 12px;
        letter-spacing: 1.2px;
        padding: 0 5px;
        font-family: "Fira Sans",sans-serif;
        font-weight: 600;
        cursor: pointer;
    } 

}
`;

const LastDiv = styled.div`
    display:flex;
    flex-direction: column;
& div {
    display:flex;
    flex-direction: row;
    gap: 5px;
    margin: auto;

    & p {
        padding-right: 10px;
        border-right: 1px solid grey;
        color: #7e7c76;
        padding: 0 7px;
        border-right: 1px solid #7e7c76;
        font-size: 11.5px;
        line-height: 24px;
        letter-spacing: -.09px;
    }
    & p:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    & h5 {
        line-height: 25px;
        color: #828282;
        font-size: 12px;
        letter-spacing: 1.2px;
        padding: 0 5px;
        font-family: "Fira Sans",sans-serif;
        font-weight: 600;
    }
}
`

const Footer =()=> {
    const navigate = useNavigate();
  return (
    
        <Foot>
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
                <ImgDiv>
                    <img onClick={() => navigate("/")} src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="" />
                </ImgDiv>
                <SearchDiv>
                <input type="text" placeholder="search here" />
                <i><FaSearch /></i>
                </SearchDiv>
                
            </Div> 
            <Trending>
                <div>
                    <h3>TRENDING TODAY</h3>
                    <p>‘Liger’ Movie Review: Vijay Deverakonda’s Action Drama Is All Noise...</p>
                    <p>Former ISRO Colleagues Challenge Claims About Nambi Narayanan’s Rol...</p>
                    <p>For The First Time, India Votes Against Russia In UNSC During Proce...</p>
                    <p>Adani Stake In NDTV | Company Says SEBI Order Restrained Prannoy, R...</p>
                    <p>Adani Stake In NDTV | Two Oligarchs Taking Over Entire Media, Sa...</p>
                </div>
                <div>
                    <h3>TENDING TOPIC</h3>
                    <p>Telengana</p>
                    <p>Economy, Business And Finance</p>
                    
                </div>
                <div>
                    <h3>TRENDING ON OUR GROUP SITES</h3>
                    <p>MSME</p>
                    <p>Transport And Log...</p>
                    <p>Insolvency And Ban...</p>
                    <p>Stocks And Shares</p>
                </div>
            </Trending>
            <Last>
                <div>
                    <h3>HOME</h3>
                    <h3>NEWS</h3>
                    <h3>CORONAVIRUS</h3>
                    <h3>OPINION</h3>
                    <h3>BUSINESS</h3>
                    <h3>SPORTS</h3>
                    <h3>CROSSWORDS+</h3>
                    <h3>COUPONS</h3>
                    <h3>ENTERTAINMENT</h3>
                </div>
                <LastDiv>
                    <div>
                        <p>About Us</p>
                        <p>Term of Use</p>
                        <p>Privacy Policy</p>
                        <p>Contacts</p>
                        <p>Archive</p>
                        <p>Print Subscription</p>
                        <p>ePaper</p>
                        <p>Digital Subscription</p>
                        <p>Rss Feeds</p>
                        <p>Sitemap</p>
                    </div>
                    <div>
                        <h5>GROUP SITES</h5>
                        <p>The Hindu</p>
                        <p>Business Line</p>
                        <p>BL on Campus</p>
                        <p>Spostar</p>
                        <p>Frontline</p>
                        <p>The hindu Center</p>
                        <p>RoofandFloor</p>
                        <p>STEP</p>
                        <p>Young World Club</p>
                    </div>
                    <div>
                        <p>Publication</p>
                        <p>eBooks</p>
                        <p>Images</p>
                        <p>Classifieds</p>
                    </div>
                    <div>
                        <p>CONTACT US</p>
                        <p>Copyright© 2022, THG PUBLISHING PVT LTD.</p>
                    </div>
                </LastDiv>
            </Last>
        </Foot>
      
    
  )
}

export default Footer
