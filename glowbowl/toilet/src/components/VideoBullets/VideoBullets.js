import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
const VideoBullets = () => {



return (
  <div className="VideoBullets">
      <TitleH1 title="Hablar con un PSICOLOGO ONLINE puede brindarte una mayor estabilidad emocional." />
      <TitleH1 title="Encuentra un espacio para hablar segura y privadamente con un psicólogo de confianza cuando lo necesites." color="h2" />
      <div className="VideoBullets__wrap">
        <div className="VideoBullets__video">
            <iframe
                  width="545"
                  height="308"
                  title="ifrmchik"
                  src="https://www.youtube.com/embed/UxVyf3p_Ftg"

                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   >
            </iframe>
        </div>
        <div className="VideoBullets__text">
            <div className="VideoBullets__ul">
                  <ul>
                      <li>Entender conjuntamente qué es lo que te sucede</li>
                      <li>Encontrar una solución a lo que te sucede</li>
                      <li>Recuperar tu salud emocional</li>

                  </ul>
            </div>
            <a href="#Offer"> <div className="VideoBullets__button btn">Agenda tu consulta</div></a>
        </div>
      </div>
  </div>
)

}

export { VideoBullets }
