import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { VideoBullets } from './components/VideoBullets/VideoBullets'

  import { Transform } from './components/Transform/Transform'
  import { BulletsAndImages } from './components/BulletsAndImages/BulletsAndImages'
 import { Review } from './components/Review/Review'
  import { GridSixIcons } from './components/GridSixIcons/GridSixIcons'
  import { GridThreeIcons } from './components/GridThreeIcons/GridThreeIcons'
  import { Testemonials } from './components/Testemonials/Testemonials'
  import { TestemonialsCol } from './components/TestemonialsCol/TestemonialsCol'
  import { BulletsAndImagesSlide } from './components/BulletsAndImagesSlide/BulletsAndImagesSlide'
  import { Precio } from './components/Precio/Precio'
  import Faq  from './components/Faq/Faq'
 import  Offer from './components/Offer/Offer'


class App extends Component {
  render() {
    return (
      <div >
 <div className="App">

                <Header />
               <VideoBullets />

               <Transform />
                  <BulletsAndImages />
              <Review />
                  <GridSixIcons />
               <GridThreeIcons />

                 <BulletsAndImagesSlide />
                 <TestemonialsCol />
               <Faq />
                <Testemonials />
                </div>
                 <div className="App" style={{"max-width":"100%"}}>
                <Precio />
                </div>
 <div className="App">


       <Offer />
       <div className="Offer__h2" style={{marginBottom:" 31px"}}>
       Copyright © 2018 JessiTerapia<br /> <a href="privacy-policy.html">Aviso de privacidad</a> |  <a href="terms.html">Términos y Condiciones</a> </div>
</div>
      </div>
    );
  }
}

export default App;
