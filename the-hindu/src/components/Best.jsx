import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: 100%;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  margin: 5px 0;
  & > div {
    background: #f6f6f6;
    line-height: 16px;
    padding: 0;
    margin: 0;
  }
  & img {
    width: 130px;
    padding: 0;
    margin: 0;
    margin: 10px;
  }
`;
const Title = styled.p`
  color: #a32020;
  display: block;
  font: 400 11px Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 14px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
`;
const Desc = styled.p`
  color: #000;
  font: 400 13px Arial, Helvetica, sans-serif;
  line-height: 18px;
  text-decoration: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  margin-right: 10px;

  cursor: pointer;
  :hover {
    color: #a32020;
  }
`;
const H = styled.p`
  border-bottom: 1px solid #dbdbdb;
  color: #000;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 3px 0 5px;
`;

export const Best = () => {
  let bst = [
    {
      title: "Entertainment",
      img: "https://images.indianexpress.com/2022/06/nikamma-shilpa-shetty-1200.jpg?resize=150,83",
      desc: "Nikamma movie review: Shilpa Shetty’s comeback makes you worry about Bollywood’s future",
    },
    {
      title: "Entertainment",
      img: "https://images.indianexpress.com/2022/06/suzhal-2.jpg?resize=150,83",
      desc: "Suzhal The Vortex review: This crime thriller is its very own, very gripping creature",
    },
    {
      title: "Trending",
      img: "https://images.indianexpress.com/2022/06/working-from-home.jpg?resize=150,83",
      desc: "Man's 'appreciation post' about 'ninja' wife multitasking office and kitchen duties divides internet",
    },
    {
      title: "Trending",
      img: "https://images.indianexpress.com/2022/06/traffic-cop-sweep.jpg?resize=150,83",
      desc: "Traffic cop sweeps road to ensure motorists don’t skid on loose gravel, earns plaudits online",
    },
    {
      title: "Sports",
      img: "https://images.indianexpress.com/2022/06/ind-vs-sa.jpeg?resize=150,83",
      desc: "India vs South Africa 4th T20 LIVE",
    },
    {
      title: "Sports",
      img: "https://images.indianexpress.com/2021/03/Screenshot-2021-03-15T225939.782.png?resize=150,83",
      desc: "Batting for Bengal: Ranji team star by day, minister and TMC MLA at night",
    },
    {
      title: "Lifestyle",
      img: "https://images.indianexpress.com/2022/06/coke-1200.jpg?resize=150,83",
      desc: "DIY 'healthy Coke' takes over the internet, but is it really beneficial?",
    },
    {
      title: "Technology",
      img: "https://images.indianexpress.com/2022/06/C1.jpg?resize=150,83",
      desc: "21-year-old's startup wants to change India's renewed smartphone market",
    },
    {
      title: "Entertainment",
      img: "https://images.indianexpress.com/2022/06/nikamma-shilpa-shetty-1200.jpg?resize=150,83",
      desc: "Nikamma movie review: Shilpa Shetty’s comeback makes you worry about Bollywood’s future",
    },
    {
      title: "Entertainment",
      img: "https://images.indianexpress.com/2022/06/suzhal-2.jpg?resize=150,83",
      desc: "Suzhal The Vortex review: This crime thriller is its very own, very gripping creature",
    },
    {
      title: "Trending",
      img: "https://images.indianexpress.com/2022/06/working-from-home.jpg?resize=150,83",
      desc: "Man's 'appreciation post' about 'ninja' wife multitasking office and kitchen duties divides internet",
    },
    {
      title: "Trending",
      img: "https://images.indianexpress.com/2022/06/traffic-cop-sweep.jpg?resize=150,83",
      desc: "Traffic cop sweeps road to ensure motorists don’t skid on loose gravel, earns plaudits online",
    },
    {
      title: "Sports",
      img: "https://images.indianexpress.com/2022/06/ind-vs-sa.jpeg?resize=150,83",
      desc: "India vs South Africa 4th T20 LIVE",
    },
    {
      title: "Sports",
      img: "https://images.indianexpress.com/2021/03/Screenshot-2021-03-15T225939.782.png?resize=150,83",
      desc: "Batting for Bengal: Ranji team star by day, minister and TMC MLA at night",
    },
    {
      title: "Lifestyle",
      img: "https://images.indianexpress.com/2022/06/coke-1200.jpg?resize=150,83",
      desc: "DIY 'healthy Coke' takes over the internet, but is it really beneficial?",
    },
    {
      title: "Technology",
      img: "https://images.indianexpress.com/2022/06/C1.jpg?resize=150,83",
      desc: "21-year-old's startup wants to change India's renewed smartphone market",
    },
  ];
  return (
    <Outer>
      <div>
        <H>BEST OF EXPRESS</H>
      </div>
      <div>
        {bst.map((el, index) => (
          <Flex key={index}>
            <div>
              <img src={el.img} alt="" />
            </div>
            <div>
              <Title>{el.title}</Title>
              <Desc>{el.desc}</Desc>
            </div>
          </Flex>
        ))}
      </div>
    </Outer>
  );
};
