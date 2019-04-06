import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
const VideoBullets = () => {



return (
  <div className="VideoBullets">
      <TitleH1 title="Descubre cómo disfrutar por $200-$400, un lujoso tratamiento de salón de Spa que únicamente las celebridades pueden pagar. ¡Casi de forma Gratuita!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d1.png" className="web" style={{maxWidth:"100%"}}/> 
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d2.png" className="mob" style={{maxWidth:"100%"}}/> 

      <TitleH1 title="¡El salón de Spa real viene al salón en tu casa!" />
      <img src="https://1693021541.rsc.cdn77.org/lands/led/d3.png"  style={{maxWidth:"100%", margin:"0 auto"}}/> 


      <TitleH1 title="7 colores de Máscara Facial LED resolverán los problemas más comunes y difíciles de la piel." />  
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
                      <li>Un tratamiento sin dolor y no invasivo.</li>
                      <li>Ahorra cientos, o a veces miles de dólares en el mismo tratamiento de spa de un salón de belleza. </li>
                      <li>Puede resolver los problemas más comunes y difíciles de la piel.</li>

                  </ul>
            </div>
            <a href="#Offer"> <div className="VideoBullets__button btn">Solicita Ahora tu descuento de $50.</div></a>
        </div>
      </div>
  </div>
)

}

export { VideoBullets }
