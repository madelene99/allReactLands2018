import React from 'react'


const BulletsAndImages = () => {

return (
  <div className="BulletsAndImages">
      <div className="Bullets">

          <div className="Bullets__ul">
              <ul>
              
                  <li> Disminuir la preocupación constante que sientes.</li>
                   <li>Mejorar tu calidad en el sueño</li>
                   <li>Disminuir tus niveles de estrés</li>
                   <li>Aprender a manejar tu ansiedad</li>
                   <li>Mejorar tu calidad de vida en general</li>

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
