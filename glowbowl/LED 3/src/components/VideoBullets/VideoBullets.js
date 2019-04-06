import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
const VideoBullets = () => {



return (
  <div className="VideoBullets">
      <TitleH1 title="Discover How to Enjoy $200-$400+ Luxury Spa Salon Treatment That Only Celebs Can Afford Almost for Free!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d1.png" className="web" style={{maxWidth:"100%"}}/> 
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d2.png" className="mob" style={{maxWidth:"100%"}}/> 

      <TitleH1 title="Real Spa Salon Comes to Your Home Salon!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d3.png"  style={{maxWidth:"100%", margin:"0 auto"}}/> 


      <TitleH1 title="7 Colors LED  Facial Mask will solve both common and stubborn skin problems" />  
      <div className="VideoBullets__wrap">
        <div className="VideoBullets__video">
            {/*<iframe
                  width="545"
                  height="308"
                  title="ifrmchik"
                  src="https://www.youtube.com/embed/UxVyf3p_Ftg"

                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   >
            </iframe> */}
            <video src="https://1693021541.rsc.cdn77.org/lands/led/videow.mp4" controls style={{maxWidth: "100%",
    height: "auto"}} />
        </div>
        <div className="VideoBullets__text">
            <div className="VideoBullets__ul">
                  <ul>
                      <li>Painless and Non Invasive Treatment</li>
                      <li>Saves hundreds, sometimes thousands of dollars on the same treatment in beauty spa salons </li>
                      <li>Can solve both common and stubborn skin problems</li>

                  </ul>
            </div>
            <a href="#Offer"> <div className="VideoBullets__button btn">Claim Your $50 Discount Now!</div></a>
        </div>
      </div>
  </div>
)

}

export { VideoBullets }
