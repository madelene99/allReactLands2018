import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { VideoBullets } from './components/VideoBullets/VideoBullets'
 import { Featured } from './components/Featured/Featured'
  import { Transform } from './components/Transform/Transform'
  import { BulletsAndImages } from './components/BulletsAndImages/BulletsAndImages'
 import { Review } from './components/Review/Review'
  import { GridSixIcons } from './components/GridSixIcons/GridSixIcons'
  import { GridThreeIcons } from './components/GridThreeIcons/GridThreeIcons'
  import { Testemonials } from './components/Testemonials/Testemonials'
  import { Faq } from './components/Faq/Faq'
// import { Offer } from './components/Offer/Offer'
// import { Footer } from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
         <VideoBullets />
         <Featured />
         <Transform />
            <BulletsAndImages />
        <Review />
            <GridSixIcons />
         <GridThreeIcons />
          <Testemonials />
        <Faq />
          {/*    <Offer />
          <Footer /> */}
      </div>
    );
  }
}

export default App;
