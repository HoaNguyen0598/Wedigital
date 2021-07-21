import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import imageNew from '../../image/Page/WeInMedia/new.png'
import ReadMore1 from '../../image/Page/WeInMedia/ReadMore1';
import ReadMore2 from '../../image/Page/WeInMedia/ReadMore2';

const dataNew = [
    {
        image: "",
        desc: "Câu Chuyện Kinh Doanh: Wee Digital"
    },
    {
        image: "",
        desc: "Christian Nguyễn - Giám đốc Wee Digital: Mỉm cười để thanh toán"
    },
    {
        image: "",
        desc: "Công nghệ nhận diện để du khách hưởng kì nghỉ ‘vô lo’"
    },
    {
        image: "",
        desc: "Cà Phê Khởi Nghiệp VTV1 - Wee Digital: Thanh toán bằng nhận diện gương mặt"
    },
    {
        image: "",
        desc: "Weezi Digital và giấc mơ ngân hàng không chi nhánh"
    },
    {
        image: "",
        desc: "Startup Việt giành giải thưởng 25.000 USD tại Fintech Challenge Vietnam"
    },
]

const WeInMediaWrapper = styled.div`
        display:flex;
        height: 100vh;
        padding: 100px 40px;
        flex-direction: column;
        padding-top: 100px;
        padding-left:180px;
        @media (max-width: 1024px){
            padding: 100px 40px;
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
                text-transform: uppercase;
            }
        }
        h3{
            font-size: 44px;
            line-height: 100%;
            color: #78C9FF;
            padding-bottom: 40px;
            text-transform: uppercase;
        }
        .new_content{
            display:flex;
            flex-wrap:wrap;
            padding-left:130px;
            overflow: hidden;
            @media (max-width: 1024px){
                padding: 0;
            }
            .new{
                padding-left:15px;
                padding-bottom:15px;
                .image{
                    height:200px;
                    width:400px;
                    margin-bottom:15px;
                    img{
                        width:100%;
                    }
                }
                p{
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 160%;
                    color: #070B13;
                    max-width:323px;
                }
            }
        }
        .readMore{
            display:flex;   
            padding-left:140px;
            align-item:center;
            margin-top: 40px;
            @media (max-width: 1024px){
                padding: 0;
            }
            svg{
                cursor: pointer;
                margin-right:5px;
            }
            p{
                font-size: 14px;
                line-height: 11px;
                letter-spacing: 0.3em;
                color: #000000;
                opacity: 0.75;
            }
        }
`

export default function WeInMedia() {
    return (
        <WeInMediaWrapper className="media">
                <div className="title">
                        <IconTitle />
                        <p>we in media</p>
                </div>
                <h3>what people say about us</h3>
                <div className="new_content">
                {
                    dataNew && dataNew.map((item,index) =>{
                        return(
                            <div className="new" key={index}>
                                <div className="image">
                                    <img src={imageNew} alt="" />
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }
                </div>
                <div className="readMore">
                    <ReadMore1 />
                    <ReadMore2 />
                    <p>READ MORE</p>
                </div>
        </WeInMediaWrapper>
    )
}
