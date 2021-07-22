import React, {useState} from 'react'
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
    const [isScroll,setScroll] = useState(false)

    function scrollStop (callback, refresh = 100) {
        // Make sure a valid callback was provided
        if (!callback || typeof callback !== 'function') return;
        // Setup scrolling variable
        let isScrolling;
        // Listen for scroll events
        window.addEventListener('scroll', function (event) {
            setScroll(false)
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling);
          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(callback, refresh);
        }, false);
    }
    scrollStop(function () {
        // console.log('Scrolling has stopped.');
        setScroll(true)
    });
    return (
        <FooterWrapper>
            {
                isScroll ?
                    <div className={`footer ${pageWhite !== 1 ? "white" : ""}`}>
                        <p>{pageActive}<span>/8</span></p>
                    </div>
                : ""
            }
        </FooterWrapper>
    )
}
