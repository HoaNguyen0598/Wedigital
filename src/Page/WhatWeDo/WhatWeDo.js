import React from 'react'
import styled from "styled-components";
import IconTitle from '../../image/IconTitle';
import Apollo from '../../image/Page/WhatWeDo/Apollo';
import Partner from '../../image/Page/WhatWeDo/Partner';
import Identity from '../../image/Page/WhatWeDo/Identity';

const WhatWeDoWrapper = styled.div`
        display:flex;
        height: 100vh;
        padding: 100px 40px;
        @media (max-width: 1024px){
            flex-direction: column;
            height: auto;
        }
        .left{
            padding-left:110px;
            width:45%;
            display:flex;
            flex-direction: column;
            padding-top:200px;
            @media (max-width: 1024px){
                padding: 150px 0px 50px;
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
                    color: #B0BBCC;
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
                max-width: 432px;
                font-weight: 300;
                font-size: 18px;
                line-height: 160%;
                color:#B0BBCC;
                @media (max-width:1024px){
                    max-width: initial;
                }
            }

        }
        .right{
            width:55%;
            @media (max-width: 1024px){
                width:100%;
            }
            .image{
                position:relative;
                .identity{
                    position:absolute;
                    right: 300px;
                    top: 0;
                }
            }
            p{
                font-size: 18px;
                line-height: 14px;  
                letter-spacing: 0.1em;
                color: #B0BBCC;
            }
        }
`

export default function WhatWeDo() {
    return (
        <WhatWeDoWrapper className="whatWheDo">
                <div className="left">
                    <div className="title">
                        <IconTitle />
                        <p>WHAT WE DO</p>
                    </div>
                    <h3>
                    We build disruptive innovations
                    </h3>
                    <p className="left_desc">
                        By enabling social, legal and economic inclusion through digital identities, we help citizens join the modern economy and help organizations to engage with people. From preventing identity fraud, on-boarding new customers to transferring funds, we ensure that identities remain uncompromised. Digital identity is not about all the passwords we must remember- it’s about who we are.
                    </p>
                </div>
                <div className="right">
                    <div className="image">
                        <Apollo />
                        <Identity className="identity"/>    
                    </div>
                    <p>TRUSTED BY</p>
                    <Partner />
                </div>
        </WhatWeDoWrapper>
    )
}
