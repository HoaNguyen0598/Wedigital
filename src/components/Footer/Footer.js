import React from 'react'
import styled from "styled-components";

const FooterWrapper = styled.div`
  .footer{
        ${'' /* position: absolute; */}
        position: fixed;
        bottom: 30px;
        left: 40px;
        @media (max-width: 1024px){
            display: none;
        }
      p{
        font-weight: bold;
        font-size: 18px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.1em;
        color: #F7FAFF;
        span{
            opacity: 0.5;
        }
      }
  }
  .footer.white{
    p{
        color:#070B13;
    }
  }
`

export default function Footer({pageWhite,pageActive}) {
    return (
        <FooterWrapper>
            <div className={`footer ${pageWhite !== 1 ? "white" : ""}`}>
                <p>{pageActive}<span>/8</span></p>
            </div>
        </FooterWrapper>
    )
}
