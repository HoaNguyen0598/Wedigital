import React, {useState} from 'react'
import styled from "styled-components";
import CountSlideIcon from '../../image/CountSlide/CountSlide';

const CountSlideWrapper = styled.div`
    .countSlide{
        ${'' /* position: absolute; */}
        position: fixed;
        right: 62px;
        top: 40%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1024px){
           display:none;
        }
        .number{
            color:#B0BBCC;
            text-align: center;
            padding-bottom: 50px;
            p{
                font-family: SVN-Bebas Neue;
                font-size: 18px;
                line-height: 14px;
                letter-spacing: 0.1em;
            }
        }
        .number.active{
            color: #78C9FF;
        }
    }
    .countSlide.white{
        .number{
            color:#070B13;
        }
        .number.active{
            color: #78C9FF;
        }
    }
`

export default function CountSlide({pageWhite, pageActive}) {
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
        <CountSlideWrapper>
        {
            isScroll ?
            <div className={`countSlide ${pageWhite !== 1 ? "white" : ""}`}>
                {
                    pageActive === 1
                    ?
                    <>
                        <div className="number active">
                            <CountSlideIcon />
                            <p>01</p>
                        </div>
                        <div className="number">
                            <p>02</p>
                        </div>
                        <div className="number">
                            <p>03</p>
                        </div>
                    </>
                    :
                    pageActive === 8
                    ?
                    <>
                        <div className="number">
                            <p>0{pageActive - 2}</p>
                        </div>
                        <div className="number">
                            <p>0{pageActive - 1}</p>
                        </div>
                        <div className="number active">
                            <CountSlideIcon />
                            <p>0{pageActive}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="number">
                            <p>0{pageActive - 1}</p>
                        </div>
                        <div className="number active">
                            <CountSlideIcon />
                            <p>0{pageActive}</p>
                        </div>
                        <div className="number">
                            <p>0{pageActive + 1}</p>
                        </div>
                    </>
                    
                }
            </div>
            : 
            ""
        }
        </CountSlideWrapper>
    )
}
