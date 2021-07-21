import React, { useEffect, useState } from 'react'
import Logo from '../../image/Header/Logo/Logo'
import LogoBlack from '../../image/Header/Logo/LogoBlack';
import Hamburger from 'hamburger-react'
import styled from "styled-components";
import NavLink from '../../image/NavLink/NavLink';

const HeaderWrapper = styled.div`
   .header{
        position: fixed;
        display:flex;
        width: 60%;
        justify-content: space-between;
        height: 86px;
        align-items: center;
        @media (max-width: 1024px){
            width: 100%;
            background: #070b13;
            z-index: 1;
            height: 50px;
        }
        .bar{
            padding-left:30px;
            z-index: 50;
        }
        .logo{
            @media (max-width: 1024px){
                display:none;
            }
        }
        .language{
            @media (max-width: 1024px){
                display:none;
            }
            span{
                cursor:pointer;
                font-weight: bold;
                font-size: 18px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #B0BBCC;
            }
            .first{
                margin-right:7px;
            }
            .last{
                opacity: 0.5;
            }
        }
        .language.white{
            span{
                color: #070B13;
            }
        }
   }
   .NavLink{
        position: fixed;
        background: #070b13;
        height: 100vh;
        width: 100%;
        bottom:0;
        left: 0;
        top: 0px;
        min-height: 860px;
        z-index:10;
        left:-100%;
        transition: all .5s;
        animation-name:navbar;
        animation-duration: 0.9s;
       ul{
        display: flex;
        justify-content: center;
        flex-direction: column;
        ${'' /* align-items: center; */}
        list-style: none;
        padding-top: 90px;
        max-width: 200px;
        margin-left: 400px;
        li{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 30px;
            color:#f6faff;
            position:relative;
            cursor: pointer;
            a{
                color: #f6faff;
                text-decoration: none;
            }
        }
        .link.active{
                a{
                    color: #78C9FF;
                }
            span{
                margin-left: -20px;
                top: -5px;
                position:absolute;
            }
        }
       }
   }
   .NavLink.active{
    left: 0;
   }
   .header.hide{
       z-index:11;
    .bar{

    }
    .logo,
    .language
    {
        display:none;
    }
   }
`

const menu = [
    {
        name: "WELCOME",
        link: "welcome",
        id: 1,
        active: false,
    },
    {
        name: "WHO WE ARE",
        link: "whoweare",
        id: 2,
        active: false,
    },
    {
        name: "WHAT WE DO",
        link: "whatwedo",
        id: 3,
        active: false,
    },
    {
        name: "PRODUCT",
        link: "product",
        id: 4,
        active: false,
    },
    {
        name: "FOUNDER",
        link: "founder",
        id: 5,
        active: false,
    },
    {
        name: "TEAM",
        link: "team",
        id: 6,
        active: false,
    },
    {
        name: "WE IN MEDIA",
        link: "weinmedia",
        id: 7,
        active: false,
    },
    {
        name: "CONTACT",
        link: "contact",
        id: 8,
        active: false,
    },

]

export default function Header({ logoHeader,activePage }) {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setActive] = useState()

    useEffect(() => {
       if(activePage){
           console.log(activePage);
        setActive(activePage)
       }
    }, [activePage])
    

    const handleClickLink = (id) => {
        // console.log(id)
        setActive(id)
        setOpen(!isOpen)
    }

    return (
        <HeaderWrapper>
            <div className={`header ${isOpen ? 'hide' : ''}`}>
                <div className="bar">
                    <Hamburger hideOutline={false} color={`${logoHeader !== 1 ? "#070B13" : "#B0BBCC"}`} size={20} toggled={isOpen} toggle={setOpen} />
                </div>
                <div className="logo">
                    {
                        logoHeader === 1 ? <Logo /> : <LogoBlack />
                    }
                </div>
                <div className={`language ${logoHeader !== 1 ? 'white' : ''}`}>
                    <span className="first">EN</span>
                    <span className="last">VI</span>
                </div>
            </div>
            <div className={`NavLink ${isOpen ? 'active' : ''}`}>
                <ul>
                    {
                        menu.map((item, index) => {
                            return (
                                <li key={index} className={`link ${item.id === isActive ? 'active' : ''}`}>
                                    {/* <Link to={item.link} smooth={true} duration={1000} onClick={() => handleClickLink(item.id)}>
                                        {item.id === isActive
                                            ? <span><NavLink /></span>
                                            : ""
                                        }
                                        {item.name}
                                    </Link> */}
                                    {item.id === isActive
                                            ? <span><NavLink /></span>
                                            : ""
                                    }
                                    <a href={`#${item.link}`} onClick={() => handleClickLink(item.id)}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </HeaderWrapper>
    )

}


