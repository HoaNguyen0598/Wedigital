import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import Image from '../../image/Page/Product/iPhone.png';

const ProductWrapper = styled.div`
    display:flex;
    height: 100vh;
    padding: 150px 40px;
         @media (max-width: 1024px){
            flex-direction: column;
        }
    .left{
        width:50%;
        padding-top:150px;
        display: flex;
        flex-direction: column;
        padding-left: 180px;
        @media (max-width: 1024px){
            padding: 0 0 20px 0;
            width:100%;
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
            text-transform: uppercase;
        }
        &_desc{
            max-width:536px;
            font-weight: 300;
            font-size: 18px;
            line-height: 160%;
            @media (max-width: 1024px){
                max-width:100%;
            }
        }
    }
    .right{
        width:50%;
        padding-left: 100px;
        @media (max-width: 1024px){
                width:100%;
                padding: 0;
                text-align:center;
        }
    }
`

export default function ProductOne() {
    return (
        <ProductWrapper className="product">
                <div className="left">
                    <div className="title">
                            <IconTitle />
                            <p>OUR PRODUCT</p>
                        </div>
                        <h3>We redefine user’s experience</h3>
                        <p className="left_desc">
                        Wee Digital creates new digital banking experience with user- centric designs, biometric security technology and deep data analytics. Through secured digital identities, we bring “conversation” and “natural language processing” into banking. We provide forward- thinking designs to give you all the expertise you need in digital banking. With our technology, we deliver a digital banking experience as exciting as those we see in top social media applications today.
                        </p>
                    </div>
                <div className="right">
                    <div className="image">
                        <img src={Image} alt=""/>
                    </div>
                </div>
        </ProductWrapper>
    )
}
