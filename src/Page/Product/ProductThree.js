import React from 'react'
import IconTitle from '../../image/IconTitle'
import Group2 from '../../image/Page/WhoWeAre/Group2'
import styled from "styled-components";
import Image from '../../image/Page/Product/Product3.png'
import ButtonVideo from '../../image/Page/Product/ButtonVideo';

const WhoWeAreWrapper = styled.div`
        display:flex;
        height: 100vh;
        padding: 100px 40px;
        @media (max-width: 1024px){
            flex-direction: column-reverse;
            justify-content: space-between;
        }
        .left{
            width:45%;
            padding-top:100px;
            display: flex;
            flex-direction: column;
            @media (max-width: 1024px){
                width:55%;
                padding:0;
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
                        text-transform: uppercase;
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
                max-width: 500px;
                font-weight: 300;
                font-size: 18px;
                line-height: 160%;
                color: #070B13;
                @media (max-width: 1024px){
                    max-width:100%;
                }
            }
            .btn_video{
                margin-top:45px;
                cursor: pointer;
            }
        }
`

export default function ProductThree() {
    return (
        <WhoWeAreWrapper className="Product">
                <div className="left">
                    <div className="image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="whoWeAre_content">
                        <Group2 />
                        <div className="desc">
                            <p className="desc_title">face recognition register</p>
                            <p className="desc_content">Vinpearl Land Nha Trang</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <IconTitle />
                        <p>OUR PRODUCT</p>
                    </div>
                    <h3>Vinpearl Check-in Gate</h3>
                    <p className="right_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante odio, tristique sed risus in, tincidunt lacinia quam. Phasellus sagittis finibus sem quis egestas. In finibus laoreet lectus, ut laoreet enim ornare a. Nullam ut nibh eu orci auctor venenatis quis eu nisi. Pellentesque ex odio, maximus sit amet blandit in, consectetur sit amet tortor.
                    </p>
                    <ButtonVideo className="btn_video"/>                
                </div>
        </WhoWeAreWrapper>
    )
}
