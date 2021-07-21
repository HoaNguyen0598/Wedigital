import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import Image from '../../image/Page/Product/iPhone2.png';

const ProductTwoWrapper = styled.div`
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

export default function ProductTwo() {
    return (
        <ProductTwoWrapper className="product">
            <div className="left">
                    <div className="title">
                            <IconTitle />
                            <p>OUR PRODUCT</p>
                        </div>
                        <h3>Banking should not be boring</h3>
                        <p className="left_desc">
                            We believe digital banking should be simpler, safer and more intuitive, creating deeper and stronger relationships between financial institutions, brands, retailers and their customers. Wee Digital is out to change Vietnam’s micro- transaction behavior, moving Vietnam towards a cashless society where digital identity can verify and authenticate transactions. To create a valuable ecosystem for everyone, we believe the best way to achieve this is through customer- centric designs and solutions.
                        </p>
                    </div>
                <div className="right">
                    <div className="image">
                        <img src={Image} alt=""/>
                    </div>
                </div>
        </ProductTwoWrapper>
    )
}
