import React, { useState, useEffect } from 'react'
import './App.scss';

import Header from './components/Header/Header';
import CountSlide from './components/CountSlide/CountSlide';
import Footer from './components/Footer/Footer';
import ConTact from '../src/Page/ConTact/ConTact';
import Founder from '../src/Page/Founder/Founder';
import Team from '../src/Page/Team/Team';
import Welcome from '../src/Page/Welcome/Welcome';
import WeInMedia from '../src/Page/WeInMedia/WeInMedia';
import WhatWeDo from '../src/Page/WhatWeDo/WhatWeDo';
import WhoWeAre from './Page/WhoWeAre/WhoWeAre';
import ProductOne from './Page/Product/ProductOne';
import ProductTwo from './Page/Product/ProductTwo';
import ProductThree from './Page/Product/ProductThree';

function App() {
  const [pageWhite, setPageWhite] = useState(1)
  const [pageActive,setPageActive] = useState(1)

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {

    console.log(window.pageXOffset)

    if(window.scrollY === 0){
      setPageActive(1)
      setPageWhite(1)
    }else if(window.scrollY === 937){
      setPageActive(2)
      setPageWhite(2)
    }
    else if(window.scrollY === 1874){
      setPageActive(3)
      setPageWhite(1)
    }
    else if(window.scrollY === 2811 || window.scrollY === 3748 || window.scrollY === 4685){
      setPageActive(4)
      setPageWhite(2)
      
    }
    else if(window.scrollY === 5622){
      setPageActive(5)
      setPageWhite(1)
    }
    else if(window.scrollY === 6559){
      setPageActive(6)
      setPageWhite(2)
    }
    else if(window.scrollY === 7496){
      setPageActive(7)
      setPageWhite(2)
    }
    else if(window.scrollY === 8433){
      setPageActive(8)
      setPageWhite(1)
    }
  };

  return (
    <>
      <Header logoHeader={pageWhite} activePage={pageActive}/>
      {/* <Switch> */}
      <div className="container">
        <section className="container_page container_page-1" id="welcome">
          <Welcome />
        </section>
        <section className="container_page container_page-2" id="whoweare">
          <WhoWeAre />
        </section>
        <section className="container_page container_page-1" id="whatwedo">
          <WhatWeDo />
        </section>
        <section className="container_page container_page-2" id="product">
          <ProductOne />
        </section>
        <section className="container_page container_page-2">
          <ProductTwo />
        </section>
        <section className="container_page container_page-2">
          <ProductThree />
        </section>
        <section className="container_page container_page-1" id="founder">
          <Founder />
        </section>
        <section className="container_page container_page-2" id="team">
          <Team />
        </section>
        <section className="container_page container_page-2" id="weinmedia">
          <WeInMedia />
        </section>
        <section className="container_page container_page-1" id="contact">
          <ConTact />
        </section>
      </div>
      {/* </Switch> */}
      <CountSlide pageWhite={pageWhite} pageActive={pageActive}/>
      <Footer pageWhite={pageWhite} pageActive={pageActive}/>
    </>
  );
}

export default App;

