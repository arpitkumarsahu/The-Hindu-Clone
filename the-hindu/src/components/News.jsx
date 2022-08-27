import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { openNews } from "../Redux/action";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  border-bottom: 1px solid #dbdbdb;
  clear: both;
  overflow: hidden;
  padding: 10px 0;
  margin-top: 30px;

  & > div:last-child {
    padding: 0;
    margin: 0;
    padding: 0 10px 0 20px;
  }
`;

const Img = styled.img`
  width: 270px;
  height: 150px;
  cursor: pointer;
`;
const H3 = styled.h3`
  color: #000;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #a32020;
  }
`;

const Date = styled.p`
  color: #6b6b6b;
  display: block;
  font-size: 11px;
  font-weight: 400;
  margin: 0 0 5px;
  text-transform: uppercase;
  padding-top: 8px;
`;

const Sh = styled.p`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 0;
  margin: 0;
`;

export const News = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((e) => (
            <Wrapper >
              <div>
                <Img src={e.image} alt="" />
              </div>
              <div>
                <H3
                  onClick={() => {
                    dispatch(openNews(e));
                    navigate("/article");
                  }}
                >
                  {e.heading}
                </H3>
                <Date>{e.date}</Date>
                <Sh>{e.subheading}</Sh>
              </div>
            </Wrapper>
          ))
        : ""}
    </>
  );
};
