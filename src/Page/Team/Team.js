import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import TeamImage from '../../image/Page/Team/team.png';

const TeamWrapper = styled.div`
        display:flex;
        height: 100vh;
        padding: 150px 40px;
        @media (max-width: 991p1024px){
            flex-direction: column;
        }
        .left{
            width:50%;
            padding-top:150px;
            display: flex;
            flex-direction: column;
            padding-left: 180px;
            @media (max-width: 1024px){
                width:100%;
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
                color: #070B13;
                opacity: 0.75;
                font-weight: 700;
                font-size: 14px;
            }
            }
        h3{
            font-size: 44px;
            line-height: 100%;
            color: #78C9FF;
            max-width:400px;
            padding-bottom: 10px;
            @media (max-width: 1024px){
                max-width:100%;
            }
        }
        &_desc{
            max-width:400px;
            font-weight: 300;
            font-size: 18px;
            line-height: 160%;
            color: #070B13;
            @media (max-width: 1024px){
                max-width:80%;
            }
            }
        }
        .right{
            padding-top:50px;
            @media (max-width: 1024px){
                width:100%;
            }
        }
`

export default function Team() {
    return (
        <TeamWrapper className="team">
               <div className="left">
                <div className="title">
                        <IconTitle />
                        <p>OUR TEAM</p>
                    </div>
                    <h3>Happy customers, happy employees</h3>
                    <p className="left_desc">For over 13 years, our team of engineers have been applying new ideas, new concepts to improve users’ experience in the financial world. We are here to help banks who aspire to take their services to the next level.</p>
               </div>
               <div className="right">
                    <div className="image">
                        <img src={TeamImage} alt="" />
                    </div>
               </div>
        </TeamWrapper>
    )
}
