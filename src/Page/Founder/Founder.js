import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import FounderImage from '../../image/Page/Founder/Founder.png';

const FounderWrapper = styled.div`
    display:flex;
    height: 100vh;
    padding: 100px 40px;
        @media (max-width: 1024px){
            flex-direction: column;
        }
    .left{
        width:45%;
        padding-top:150px;
        display: flex;
        flex-direction: column;
        padding-left: 180px;
        @media (max-width: 1024px){
            width: 100%;
            padding:0;
        }
        .title{
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            svg{
                margin-right: 8px;
            }
            p{
                font-size: 14px;
                line-height: 11px;
                letter-spacing: 0.3em;
                ${'' /* color: #070B13; */}
                color: #B0BBCC;
                opacity: 0.75;
                font-weight: 700;
            }
        }
        h3{
            font-size: 44px;
            line-height: 100%;
            color: #78C9FF;
            padding-bottom: 60px;
            text-transform: uppercase;
            @media (max-width: 1024px){
                padding-bottom: 20px;
            }
        }
        &_desc{
            max-width:400px;
            font-weight: 300;
            font-size: 18px;
            line-height: 160%;
            color: #B0BBCC;
            @media (max-width: 1024px){
                max-width: 100%;
            }
        }
    }
    .right{
        width:55%;
        padding: 100px 40px;
        @media (max-width: 1024px){
            text-align: center;
            padding: 50px 40px;
            width:100%;
        }
    }   
`

export default function Founder() {
    return (
        <FounderWrapper className="founder">
                <div className="left">
                    <div className="title">
                        <IconTitle />
                        <p>THE FOUNDER OF WEE DIGITAL</p>
                    </div>
                    <h3>Christian Nguyen</h3>
                    <p className="left_desc">
                        A true pioneer in challenging digital banking in Vietnam. Chris is a serial entrepreneur with proven success. He started companies with multiple exits within the technology space across Southeast Asia in the last 13 years. He has nearly 10 years of experience in digital banking and user- experience technologies. Chris, a French Viet kieu, returned to Vietnam with a mission to create better financial services for Vietnam, closely linking brands and its consumers at scale.
                    </p>
                </div>
                <div className="right">
                    <div className="image">
                        <img src={FounderImage} alt="" />
                    </div>
                </div>
        </FounderWrapper>
    )
}
