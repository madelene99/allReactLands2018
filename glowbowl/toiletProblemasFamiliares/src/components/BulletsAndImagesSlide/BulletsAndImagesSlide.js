import React from 'react'
import { TitleH1 } from '../TitleH1/TitleH1'
import { Carousel } from 'antd';

const BulletsAndImagesSlide = () => {

return (
  <div>
  <div className="Transform" style={{"background":"#f0f4f8"}}>
        <TitleH1 title="Acerca de Jessi"   />
  </div>
  <div className="BulletsAndImagesSlide">

      <div className="Bullets">

          <div className="Bullets__ul">
              <ul>
                <li><b>Psicóloga Clínica y Maestría</b>  en Terapia Familiar Sistémica Universidad del Valle de Atemajac, México

</li>
                <li><b>Maestría en Crisis</b> y Trauma Universidad de Tel Aviv, Israel

 </li>
                <li><b>Diplomado en Estrategias</b> de la Comunicación Seneca College, Canada.

  </li>
                <li><b>Diplomado en Intervención en Crisis</b> Secretaría de Salud, Nayarit, México

  </li>
                <li><b>Diplomado en Diagnóstico</b> Psicodinámico-Sistémico, Instituto Jaliscience de Psicoanálisis, México  </li>
                <li><b>12 años de experiencia</b> en el sector salud público, Secretaría de Salud de Nayarit así como en el ámbito privado en Unidad de Medicina Física de Rehabilitación Tepic  </li>
                <li><b>Más de 2000 clientes</b> felices  </li>


              </ul>
          </div>


        <a href="#Offer">
            <div className="Bullets__button btn">Agenda tu consulta</div>
          </a>

      </div>
      <div className="caro">
      <Carousel autoplay   style={{height:"450px",width:"450px",}}>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (1).jpg"   alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (2).jpg"   alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (3).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (4).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (5).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (6).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (7).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (8).jpg"  alt="" /></div>
   <div>    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/prof/1 (9).jpg"  alt="" /></div>
 </Carousel>
      </div>

  </div>
  </div>
)

}

export { BulletsAndImagesSlide }
