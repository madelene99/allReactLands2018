import React, { Component } from 'react';
import { Header } from './components/Header/Header.js';

import { CtaButton } from './components/CtaButton/CtaButton';
import { HairGrowRate } from './components/HairGrowRate/HairGrowRate';
import { HairGrowRate2 } from './components/HairGrowRate2/HairGrowRate2';
import { Advantages } from './components/Advantages/Advantages';
import { Effects } from './components/Effects/Effects';
import { PriceButton } from './components/PriceButton/PriceButton';
import { Footer } from './components/Footer/Footer';
import  Faq  from './components/Faq/Faq.js';
import  Testemonials  from './components/Testemonials/Testemonials';
import './App.css'
import db from './db/db'
import { TitleHr } from './components/TitleHr/index.js'

class App extends Component {

  render() {
const dbs=db[0]

    return (
      <div>
      { /* <Header h1={db[0].header__h1} h2={db[0].header__h2} img={db[0].header__img} p={db[0].header__p} /> */}
        <Header db={dbs.Header} />
        <PriceButton   db={dbs.PriceButton} />
          <HairGrowRate2 db={dbs.HairGrowRate}  />
          <Advantages db={dbs.Advantages}  />

        <CtaButton db={dbs.CtaButton} />



        <Effects db={dbs.Effects}  />
         <section>  <TitleHr h1="Easy to use" /> </section>
          <video src="https://1693021541.rsc.cdn77.org/lands/mens/h/video1.mp4"  controls="controls" width="100%;" poster="https://1693021541.rsc.cdn77.org/lands/mens/h/video.png"></video>
          <CtaButton db={dbs.CtaButton} />
        <HairGrowRate db={dbs.OurSecret}  />
        <section>  <TitleHr h1="WOMAN love BEADRS" /> </section>
  <video src="https://1693021541.rsc.cdn77.org/lands/mens/video2.mp4" controls="controls" width="100%;" ></video>
        <PriceButton  db={dbs.PriceButton}  />
        <Faq  db={dbs.Faq} />
        <Testemonials  db={dbs.Testemonials} />
        <section><p>&nbsp;</p></section>
        <Header db={dbs.Header} />
        <PriceButton   db={dbs.PriceButton} />
          <HairGrowRate db={dbs.MoneyBack} />
          <CtaButton db={dbs.CtaButton} />
          <Footer db={dbs.Footer} />
    </div>
    )
  }
}

export default App;
