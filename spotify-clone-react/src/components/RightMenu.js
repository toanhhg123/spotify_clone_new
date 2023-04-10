import React from 'react'
import { FaBell, FaCrown, FaRegHeart, FaSun, FaCogs } from 'react-icons/fa'
import styled from 'styled-components'
import profileImg from '../img/profile.jpg'
const RightMenu = () => {
    return (
        <Wrapper>
            <div className="top-section">
                <i><FaCrown />
                    <p>Go <span>Pro</span></p>
                </i>
                <i><FaBell /></i>
                <i><FaRegHeart /></i>
            </div>
            <div className="bottom-section">
                <i><FaSun /></i>
                <i>
                    <FaCogs />
                </i>
                <div className="profile-image">
                    <img src={profileImg} alt="person-img" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    width: 100px;
    z-index: 1;
    padding: 20px 20px;
    min-width: 100px;
    backdrop-filter: blur(10px);
    background: rgba(34,34,34, 0.4);
    border-left: 1px solid rgba(255,255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top-section, .bottom-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        i {
            color: #f1f1f1;
            margin: 20px 0;
            text-align: center;
            font-size: 20px;
            position: relative;
        }
    }
    .top-section {
        i {
            p {
                font-size: 14px;
                span {
                    color: #848484;
                }
            }
            :nth-child(2)::before {
                position: absolute;
                content: '';
                width: 8px;
                height: 8px;
                background: #43ab2e;
                border-radius: 50%;
                top: 0;
                right: 0;
            }
        }
        
    }
    .bottom-section {
        .profile-image {
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 100%;
            box-shadow: 0px 0px 20px rgba(34, 34, 34, 0.4);
            /* background: #f1f1f1; */
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    @media screen and (max-width:950px) {
        width: 60px;
        max-width: 60px;
        min-width: 60px;
    }
    @media screen and (max-width: 450px) {
        display: none;
    }
`

export default RightMenu