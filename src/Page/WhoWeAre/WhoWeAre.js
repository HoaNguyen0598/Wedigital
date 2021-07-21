import React from 'react'
import styled from "styled-components";
import Group2 from '../../image/Page/WhoWeAre/Group2';
import IconTitle from '../../image/IconTitle';
import img from '../../image/Page/WhoWeAre/2.png'

const WhoWeAreWrapper = styled.div`
        display:flex;
        height: 100vh;
        padding: 100px 40px;
        @media (max-width: 1024px){
            padding: 50px 40px;
            flex-direction: column-reverse;
            height: auto;
        }
        .left{
            width:45%;
            padding-top:100px;
            display: flex;
            flex-direction: column;
            @media (max-width: 1024px){
                width: 100%;
                padding-top: 50px;
            }
            .image{
                img{
                    width:100%;
                }
            }
            .whoWeAre_content{
                display: flex;
                justify-content: space-between;
                padding-top: 20px;
                .desc{
                    text-align: end;
                    &_title{
                        font-size: 18px;
                        line-height: 14px;
                        text-align: right;
                        letter-spacing: 0.1em;
                        color: #000000;
                        font-weight: 500;
                        padding-bottom: 10px;
                    }
                    &_content{
                        max-width:250px;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 160%;
                        text-align: right;
                        color: #000000;
                        line-height: 160%;
                        float: right;
                    }
                }
            }
        }
        .right{
            width:55%;
            padding-top: 100px;
            padding-left: 130px;
            @media (max-width: 1024px){
                width: 100%;
                padding-left:0;
                padding-top: 50px;
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
                }
            }
            h3{
                font-size: 44px;
                line-height: 100%;
                color: #78C9FF;
                padding-bottom: 10px;
            }
            &_desc{
                max-width: 532px;
                font-weight: 300;
                font-size: 18px;
                line-height: 160%;
                color: #070B13;
            }
        }
`

export default function WhoWeAre() {
    return (
        <WhoWeAreWrapper className="whoWeAre">
                <div className="left">
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="whoWeAre_content">
                        <Group2 />
                        <div className="desc">
                            <p className="desc_title">FINTECH CHAMPION 2018/2019</p>
                            <p className="desc_content">By Asian Development Bank, State Bank of Vietnam</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <IconTitle />
                        <p>WHO WE ARE ?</p>
                    </div>
                    <h3>WEE-TEAM</h3>
                    <p className="right_desc">
                    For over 13 years, our team of engineers have been applying new ideas, new concepts to improve users' experience in the financial world. We're here to help banks who aspire to take their business to the next level.</p>
                    <p className="right_desc">It's all about changing Vietnam's behaviors, moving towards a cashless society & a wallet-free mindset.
                    </p>
                </div>
        </WhoWeAreWrapper>
    )
}
