import React, {Component} from 'react'
import {TitleH1} from '../TitleH1/TitleH1'

const Precio = () => {

return (
  <div className="Precio">
       			  <TitleH1 title="Precio" />
		         <div className="PrecioContainer">
				         	<div>
				         		<img src="https://1693021541.rsc.cdn77.org/lands/toilet/pre1.png" />
				         		<div>Cualquier tipo de conexión disponible:  Teléfono mediante llamada de Whatsapp, chat, Online Messenger con o sin cámara</div>
				         	</div>

				         	<div>
				         		<img src="https://1693021541.rsc.cdn77.org/lands/toilet/pre2.png" />
				         		<div>25% de descuento para 
								clientes online
								Precio regular por 
								sesión <s>685</s> 515 Pesos
								</div>
				         	</div>

				         	<div>
				         		<img src="https://1693021541.rsc.cdn77.org/lands/toilet/pre3.png" />
				         		<div>Duración 50 minutos
								</div>
				         	</div>
		         </div>

  </div>
)

}

export { Precio }