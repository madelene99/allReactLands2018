import React from 'react'
import { TitleHr } from '../TitleHr/index.js'

const HairGrowRate2 = (props) =>{
  const {HairGrowRate_h1, HairGrowRate_p, HairGrowRate_p2 } = props.db
    return (
      <div className="HairGrowRate">
         <section>
            <TitleHr h1={HairGrowRate_h1} />
            <div className="HairGrowRate__img">

              <img src="https://1693021541.rsc.cdn77.org/lands/mens/h/1.jpg" alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/mens/h/2.jpg" alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/mens/h/3.jpg" alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/mens/h/4.jpg" alt="Does your hair grow"/>
            </div>

           
         </section>
      </div>
    )
  }


export { HairGrowRate2 }
