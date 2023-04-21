import React, { useEffect } from "react";
import styled from "styled-components";
import AudioList from "./AudioList";
const MainContainer = ({ children, hidden }) => {
  //once component loads get items from page and set click event on them
  //just testing different approach
  useEffect(() => {
    const allLis = document.querySelectorAll(".menutabs li");

    allLis.forEach((item) => {
      item.addEventListener("click", (e) => {
        //get clicked element
        const target = e.currentTarget;
        //remove active class from all li elements
        allLis.forEach((item) => item.classList.remove("active"));
        //add active class to clicked element
        if (item === target) {
          item.classList.add("active");
        }
      });
    });
  }, []);
  return (
    <Wrapper className="main-container">
      <div className="view__main">{children}</div>
      <AudioList hidden={hidden} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  flex-grow: 1;
  backdrop-filter: blur(10px);
  background: rgba(34, 34, 34, 0.6);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .view__main {
    height: 80%;
    overflow-y: scroll;
  }
  .menutabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    background: #2c2c2c;
    ul {
      padding-left: 30px;
      display: flex;
      align-items: center;
      li {
        list-style: none;
        margin: 0 20px;
        position: relative;
        a {
          text-decoration: none;
          color: #848484;
        }
        :before {
          position: absolute;
          content: "";
          bottom: -20px;
          left: 5px;
          width: 0px;
          height: 5px;
          border-radius: 5px;
          background: #f1f1f1;
        }
        :hover::before {
          width: 70%;
          transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .active a {
          color: #f1f1f1;
          transition: 0.3s;
        }
      }
      li.active:before {
        width: 70%;
        transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
    }
    p {
      color: #f1f1f1;
      font-size: 14px;
      display: flex;
      align-items: center;
      i {
        display: grid;
        place-items: center;
        margin-right: 6px;
        font-size: 14px;
        text-align: center;
      }
      span {
        /* display: block; */
        font-size: 14px;
        text-align: center;
        color: #848484;
        /* line-height: 14px; */
      }
    }
  }

  @media screen and (max-width: 950px) {
    min-width: 380px;
    .menutabs {
      padding: 10px 5px;
      ul {
        li {
          margin: 0px 8px;
        }
        li:before {
          bottom: -10px;
          height: 3px;
        }
      }
      p {
        display: none;
      }
    }
  }

  @media screen and (max-width: 500px) {
    min-width: 250px;
    .menutabs {
      ul {
        padding-left: 5px;
      }
    }
  }
`;
export default MainContainer;
