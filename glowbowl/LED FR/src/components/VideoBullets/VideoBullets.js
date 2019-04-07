import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
const VideoBullets = () => {



return (
  <div className="VideoBullets">
      <TitleH1 title="Découvrez comment profiter d'un traitement de luxe au salon spa de 200 $ à 400 $ + que seules les célébrités peuvent se permettre presque gratuitement!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d1.png" className="web" style={{maxWidth:"100%"}}/> 
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d2.png" className="mob" style={{maxWidth:"100%"}}/> 

      <TitleH1 title="Real Spa Salon vient dans votre salon!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d3.png"  style={{maxWidth:"100%", margin:"0 auto"}}/> 


      <TitleH1 title="Le masque facial à 7 couleurs à DEL résoudra les problèmes de peau courants et tenaces" />  
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
                      <li>Traitement indolore et non invasif</li>
                      <li>Économise des centaines, parfois des milliers de dollars sur le même traitement dans les salons de beauté </li>
                      <li>Peut résoudre les problèmes de peau courants et persistants</li>

                  </ul>
            </div>
            <a href="#Offer"> <div className="VideoBullets__button btn">Réclamez votre rabais de 90 $ maintenant!</div></a>
        </div>
      </div>
  </div>
)

}

export { VideoBullets }
