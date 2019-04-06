import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { VideoBullets } from './components/VideoBullets/VideoBullets'

  import { Transform } from './components/Transform/Transform'
  import { Transform1 } from './components/Transform1/Transform.js'
  import { Transform2 } from './components/Transform2/Transform.js'
  import { Transform3 } from './components/Transform3/Transform.js'
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

               
               <VideoBullets />

               <Transform />
               <Transform1 />
               <Transform2 />
               <Transform3 />
             

       <Offer />
     
</div>
      </div>
    );
  }
}

export default App;
