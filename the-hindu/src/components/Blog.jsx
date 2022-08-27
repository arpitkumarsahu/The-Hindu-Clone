import React from "react";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components";

const Outer = styled.div`
  width: 100%;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #c4c4c4;
  padding: 10px;
  margin-bottom: 20px;

  & > div {
    border-bottom: 1px solid #c4c4c4;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    padding: 0 0 10px;
    margin: 0 0 10px;
    max-height: 100px;

    & p {
      padding: 0;
      margin: 0;
      border-left: 4px solid #a32020;
      padding-left: 5px;
      cursor: pointer;
    }
    & p:last-child {
      padding-top: 12px;
      font-size: 10px;
      color: #7a7a7a;
    }
    & p:first-child:hover {
      color: #3385d0;
    }
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
  & p:nth-child(2) {
    color: #a32020;
  }
  & i {
    font-size: 10px;
    color: #a32020;
  }
`;

export const Blog = () => {
  let blg = [
    {
      title:
        "Asia Cup 2022 | With one eye on T20 World Cup, sub-continental giants resume rivalry",
      time: "13 minutes ago",
    },
    {
      title:
        "‘India keen to learn more about price cap compact for Russian fuel’: U.S.",
      time: "35 minutes ago",
    },
    {
      title:
        "U.S. Justice Department releases redacted document that underpins Trump search",
      time: "1 hour ago",
    },
    {
      title:
        "Beneficiaries of welfare schemes to be invited to PM’s event in city",
      time: "2 hour ago",
    },
  ];

  return (
    <Outer>
      <Head>
        <i><FaCircle/></i>
        <p>LIVE</p>
        <p>BLOG</p>
      </Head>
      <Wrapper>
        {blg.map((el, index) => (
          <div key={index}>
            <p>{el.title}</p>
            <p>{el.time}</p>
          </div>
        ))}
      </Wrapper>
    </Outer>
  );
};
