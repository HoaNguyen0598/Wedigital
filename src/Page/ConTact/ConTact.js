import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import FaceBook from '../../image/Page/Contact/FaceBook';
import Instagram from '../../image/Page/Contact/Instagram';
import Youtube from '../../image/Page/Contact/Youtube';
import ClickTop from '../../image/Page/Contact/ClickTop';
import { animateScroll as scroll } from 'react-scroll'

const ContactWrapper = styled.div`
    .contact{
        position:relative;
        display:flex;
        height: 100vh;
        padding: 100px 40px 30px 40px;
        flex-direction: column;
        justify-content: center;
        ${'' /* margin: auto;
        max-width: 700px; */}
        max-width: 1200px;
        margin-left: auto;
        justify-content: space-between;
        &_top{
            padding-top: 100px;
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
                }
                .form{
                    width: 650px;
                    .form_input{
                        width: 100%;
                        height: 80px;
                        ${'' /* border: none;
                        box-shadow: inset 0px -1px 0px rgb(255 255 255 / 25%);
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 160%;
                        color: #B0BBCC; */}
                        input{
                            width:100%;
                            border: none;
                            box-shadow: inset 0px -1px 0px rgb(255 255 255 / 25%);
                            font-weight: 300;
                            font-size: 18px;
                            line-height: 160%;
                            color: #B0BBCC;
                            background-color: transparent;
                            height:100%;
                        }
                        input:focus{
                            outline: none;
                        }
                        &-center{
                            display:flex;
                            justify-content: space-between;
                            input{
                                width:48%;
                            }
                        }
                    }
                    .btn-submit{
                        margin-top:40px;
                        background: #78C9FF;
                        border-radius: 100px;
                        border:none;
                        font-size: 15px;
                        line-height: 14px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        letter-spacing: 0.1em;
                        color: #F7FAFF;
                        padding: 20px 50px;
                        cursor: pointer;
                    }
                }  
        }
        .footer{
            display: flex;
            margin-bottom: 0;
            justify-content: space-between;
            .follower{
                display: flex;
                width: 100%;
                align-items: flex-end;
                .title_footer{
                    display: flex;
                    align-items: center;
                    padding-right: 20px;
                    svg{
                        margin-right: 8px;
                    }
                    p{
                        letter-spacing: 0.3em;
                        color: #B0BBCC;
                        opacity: 0.75;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 11px;
                    }
                }
                svg{
                    margin-right: 20px;
                }
            }
            .copyRight{
                font-weight: 300;
                font-size: 14px;
                line-height: 160%;
                color: #B0BBCC;
                width: 100%;
                &_top{
                    padding-bottom: 15px;
                }
            }
        }
        .clickToTop{
            position: absolute;
            right: 100px;
            bottom: 100px;
            cursor: pointer;
        }
    }
`

export default function ConTact({ handleClickToTop }) {

    // const ClickToTop = () => {
    //     console.log(1);
    //     handleClickToTop && handleClickToTop()
    // }
    return (
        <ContactWrapper>
            <div className="contact">
                <div className="contact_top">
                    <div className="title">
                        <IconTitle />
                        <p>CONTACT</p>
                    </div>
                    <h3>GET IN TOUCH</h3>
                    <form className="form">
                        <div className="form_input">
                            <input placeholder="FULL NAME" />
                        </div>
                        <div className="form_input form_input-center">
                            <input placeholder="PHONE NUMBER" />
                            <input placeholder="EMAIL" />
                        </div>
                        <div className="form_input">
                            <input placeholder="MESSAGE" />
                        </div>
                        <button className="btn-submit">SEND</button>
                    </form>
                </div>
                <div className="footer">
                    <div className="follower">
                        <div className="title_footer">
                            <IconTitle />
                            <p>FOLLOWER US</p>
                        </div>
                        <FaceBook />
                        <Instagram />
                        <Youtube />
                    </div>
                    <div className="copyRight">
                        <p className="copyRight_top">Privacy Policy   |   Legal Statement</p>
                        <p>Copyright © Wee Digital. All right reserved.</p>
                    </div>
                </div>
                <ClickTop className="clickToTop" onClick={() => scroll.scrollToTop()} />
            </div>
        </ContactWrapper>
    )
}
