import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'

const GridThreeIcons = () => {

return (
  <div className="GridThreeIcons">
    <TitleH1 title="Ahora puedes accesar a la Psicoterapia Online cuando tu lo desees"  />
      <div className="GridThreeIcons__ul">
        <div className="GridThreeIcons__block">

              <div className="GridThreeIcons__img">
                <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/t1.png" alt="" />
              </div>
              <div className="GridThreeIcons__title">Ahorrar tiempo</div>
              <div className="GridThreeIcons__p">          </div>
      </div>
          <div className="GridThreeIcons__block">

                <div className="GridThreeIcons__img">
                  <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/t2.png" alt="" />
                </div>
                <div className="GridThreeIcons__title">Agendar una cita en un horario conveniente</div>
                <div className="GridThreeIcons__p"> </div>
  <a href="#Offer">
<div className="GridThreeIcons__button web btn" >Agenda tu consulta</div>
</a>
            </div>

            <div className="GridThreeIcons__block">

                  <div className="GridThreeIcons__img">
                    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/pre1.png" alt="" />
                  </div>
                  <div className="GridThreeIcons__title">Cualquier tipo de conexión disponible:  Teléfono mediante llamada de Whatsapp, chat, Online Messenger con o sin cámara</div>
                  <div className="GridThreeIcons__p">   </div>

                <a href="#Offer">    <div className="GridThreeIcons__button mob btn" >Agenda tu consulta</div></a>

            </div>


  </div>

  </div>
)

}

export { GridThreeIcons }
