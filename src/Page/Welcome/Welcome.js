import React from 'react'
import styled from "styled-components";
import Scroll from '../../image/Page/Welcome/Scroll';
import background from '../../image/background.png';


const WelComeWrapper = styled.div`
        display:flex;
        height: 100vh;
        background-image: url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 100px 40px;
        .Left{
            width:45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_content{
                max-width: 566px;
                padding-top:150px;
                padding-bottom:140px;
                p{
                    font-size: 56px;
                    line-height: 97%;
                    color: #F7FAFF;
                    font-weight: bold;
                    span{
                        color:#78c9ff;
                    }
                }
            }
            &_code{
                p{
                    text-transform: uppercase;
                }
            }
        }
        .scroll{
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 14px;
            line-height: 11px;
            letter-spacing: 0.3em;
            color: #F7FAFF;
            opacity: 0.5;
            span{
                padding: 0 12px;
            }
        }
      
    }
`

export default function Welcome() {
    return (
        <WelComeWrapper className="123">
            <div className="Left">
                <div className="Left_content">
                    <p>WE <span>CREATURE EXPERIENCES</span> THAT MOVE PEOPLE</p>
                </div>
                <div className="Left_code">
                    <p>0x06ac2d3c</p>
                    <p>0x16c827de</p>
                    <p>0x104c7c33</p>
                    <p>0x096b0a24</p>
                    <p>0x0580047c</p>
                    <p>0x08273edb</p>
                </div>
            </div>
            <p className="scroll">SCOLL DOWN   <span><Scroll /></span>   FOR EXPLORE</p>
        </WelComeWrapper>
    )
}
