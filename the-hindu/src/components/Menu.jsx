import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: #2a5e88;
  color: white;

  & p{
      font-size: 15px;
      color; #281e1e;
      cursor: pointer;
      padding: 0;
      margin: 0;
        padding-top: 10px;   
  }
  & p:hover{
      
      text-decoration: underline;
  }
`;
const Main = styled.div`
  width: 60%;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: left;
  padding: 30px 30px 30px 15px;
  border-bottom: 2px solid #bbb;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Icon = styled.div`
  margin: 0;
  padding: 10px 0 0 20px;
  text-align: left;
  position: fixed;
  & i {
    color: #969696;
    font-size: 35px;
    cursor: pointer;
  }
`;

export const Menu = ({handleToggle}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Icon>

      <i><FaRegWindowClose onClick={handleToggle} /></i>
        
      </Icon>
      <Main>
        <Flex>
          <div>
            <p>
              <b onClick={() => navigate("/")}>Home</b>
            </p>
            <p>
              <b>World</b>
            </p>
            <p>
              <b onClick={() => navigate("/india")}>India</b>
            </p>
            <p>
              <b>North East Indian</b>
            </p>
            <p>Arunachal Pradesh</p>
            <p>Assam</p>
            <p>Manipur</p>
            <p>Meghalaya</p>
            <p>Mizoram</p>
            <p>Nagaland</p>
            <p>Tripura</p>
          </div>
          <div>
            <p>
              <b>Photos</b>
            </p>
            <p>Entertainment</p>
            <p>Sports</p>
            <p>News</p>
            <p>Lifestyle</p>
            <p>Viral</p>
            <p>Technology</p>
            <p>Archives</p>
          </div>
          <div>
            <p>
              <b>Videos</b>
            </p>
            <p>Explained</p>
            <p>Technology</p>
            <p onClick={() => navigate("/entertainment")}>Entertainment</p>
            <p>Lifestyle</p>
            <p>Food</p>
            <p>Sports</p>
            <p>Auto</p>
            <p>Idea Exchange</p>
            <p>News</p>
          </div>
          <div>
            <p>
              <b>Audio</b>
            </p>
            <p>3 Things</p>
            <p>Express Sports</p>
            <p>Water</p>
            <p>Likh: The Process</p>
            <p>Metro Food Hoppers</p>
            <p>The Sandip Roy Show</p>
            <p>Talking Books</p>
            <p>What to Watch this Weekend</p>
          </div>
          <div>
            <p>
              <b>From the Print</b>
            </p>
            <p>Opinion</p>
            <p>Explained</p>
            <p>Delhi Confidential</p>
            <p>Astrology</p>
            <p>Epaper</p>
            <p>Todays Paper</p>
            <p>Sunday Eye</p>
          </div>
        </Flex>
        <Flex>
          <div>
            <p>
              <b>Entertainment</b>
            </p>
            <p>Hollywood</p>
            <p>Bollywood</p>
            <p>Television</p>
            <p>Music</p>
            <p>Reviews</p>
            <p>Regional</p>
            <p>Tamil</p>
            <p>Telugu</p>
            <p>Malayalam</p>
            <p>Box Office</p>
            <p>Web Series</p>
          </div>
          <div>
            <p>
              <b>Featured</b>
            </p>
            <p>What is</p>
            <p>Who is</p>
            <p>When is</p>
            <p>How to</p>
            <p>Research</p>
            <p>GenderAnd</p>
          </div>
          <div>
            <p>
              <b>Sports</b>
            </p>
            <p>Olympics</p>
            <p>T20 WC</p>
            <p>Badminton</p>
            <p>Cricket</p>
            <p>Football</p>
            <p>FIFA 2018</p>
            <p>Hockey</p>
            <p>Motor Sport</p>
            <p>Tennis</p>
            <p>WWE Wrestling</p>
          </div>
          <div>
            <p>
              <b>Tech</b>
            </p>
            <p>Technology</p>
            <p>Mobile & Tabs</p>
            <p>Gadgets</p>
            <p>Sciences</p>
            <p>Tech Reviews</p>
            <p>Social</p>
            <p>Tech News</p>
          </div>
          <div>
            <p>
              <b>Lifestyle</b>
            </p>
            <p>Books</p>
            <p>Fashion</p>
            <p>Food Wine</p>
            <p>Health</p>
            <p>Fitness</p>
            <p>Art & Culture</p>
            <p>Workplace</p>
            <p>Auto & Travel</p>
          </div>
        </Flex>
        <Flex>
          <div>
            <p>
              <b>Trending</b>
            </p>
            <p>Trending in India</p>
            <p>Trending Globally</p>
            <p>Viral Videos</p>
            <p>Bizarre</p>
            <p>Voice</p>
            <br />
            <p>
              <b>Parenting</b>
            </p>
            <p>Food</p>
            <p>Health & Fitness</p>
            <p>Learning</p>
            <p>Family</p>
            <p>Blogs</p>
            <p>Things To Do</p>
          </div>
          <div>
            <p>
              <b>Cities News</b>
            </p>
            <p>Ahmedabad</p>
            <p>Bangalore</p>
            <p>Chandigarh</p>
            <p>Chennai</p>
            <p>Delhi</p>
            <p>Jaipur</p>
            <p>Kolkata</p>
            <p>Lucknow</p>
            <p>Ludhiana</p>
            <p>Mumbai</p>
            <p>Pune</p>
          </div>
          <div>
            <p>
              <b>Jobs</b>
            </p>
            <p>Bank Jobs</p>
            <p>Defence Jobs</p>
            <p>PSU</p>
            <p>Railway</p>
            <p>UPSC</p>
            <p>Teachers Job</p>
            <p>SSC</p>
          </div>
          <div>
            <p>
              <b>Business</b>
            </p>
            <p>Aviation</p>
            <p>Banking & Finance</p>
            <p>Budget</p>
            <p>Business Other</p>
            <p>Companies</p>
            <p>Economy</p>
            <p>Market</p>
          </div>
          <div>
            <p>
              <b>Education</b>
            </p>
            <p>Student Voice</p>
            <p>Study Aboard</p>
            <p>
              <b>More</b>
            </p>
            <p>Elections</p>
            <p>Brand Solutions</p>
          </div>
        </Flex>
      </Main>
    </Wrapper>
  );
};
