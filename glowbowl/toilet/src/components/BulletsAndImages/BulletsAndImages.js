import React from 'react'


const BulletsAndImages = () => {

return (
  <div className="BulletsAndImages">
      <div className="Bullets">

          <div className="Bullets__ul">
              <ul>
                <li><b>Mejorar las relaciones</b> contigo mismo y con los demás</li>
                <li><b>Aprender a establecer</b> límites sanos</li>
                <li><b>Cambiar conductas</b> y actitudes dañinas</li>
                <li><b>Disminuir tus niveles</b> de estrés</li>
                <li><b>Mejorar tu calidad</b> de vida en general</li>

              </ul>
          </div>

        <a href="#Offer">
            <div className="Bullets__button btn">Agenda tu consulta  </div>
          </a>

      </div>
      <div className="Images">
            <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/layer6.png" alt="" />
           
      </div>
  </div>
)

}

export { BulletsAndImages }
