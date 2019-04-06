import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { VideoBullets } from './components/VideoBullets/VideoBullets'

  import { Transform } from './components/Transform/Transform'
  import  BulletsAndImages  from './components/BulletsAndImages/BulletsAndImages'
 import { Review } from './components/Review/Review'
  import { GridSixIcons } from './components/GridSixIcons/GridSixIcons'
  import { GridThreeIcons } from './components/GridThreeIcons/GridThreeIcons'
  import { Testemonials } from './components/Testemonials/Testemonials'
  import { TestemonialsCol } from './components/TestemonialsCol/TestemonialsCol'
  import { BulletsAndImagesSlide } from './components/BulletsAndImagesSlide/BulletsAndImagesSlide'
  import { Precio } from './components/Precio/Precio'
  import Faq  from './components/Faq/Faq'
 import  Offer from './components/Offer/Offer'


class App extends Component {

    constructor(props) {
    super(props);
  
    this.state = {
      visible:false,
      visibleq1:false,
   

    }
    this.questHandler = this.questHandler.bind(this)
    this.questHandlerq1 = this.questHandlerq1.bind(this)
    this.questHandlerq2 = this.questHandlerq2.bind(this)
    this.questHandlerq3 = this.questHandlerq3.bind(this)
    this.questHandlerq4 = this.questHandlerq4.bind(this)
    this.questHandlerq5 = this.questHandlerq5.bind(this)
    this.questHandlerq6 = this.questHandlerq6.bind(this)
    this.questHandlerq7 = this.questHandlerq7.bind(this)
    this.questHandlerq8 = this.questHandlerq8.bind(this)
    this.questHandlerq9 = this.questHandlerq9.bind(this)
    this.questHandlerq10 = this.questHandlerq10.bind(this)
    this.questHandlerq11 = this.questHandlerq11.bind(this)
    this.questHandlerq12 = this.questHandlerq12.bind(this)
    this.questHandlerq13 = this.questHandlerq13.bind(this)

 
  }

    questHandler(){
      this.setState(state => ({
      visible: !state.visible
      }))
    }
    questHandlerq1(){
      this.setState(state => ({
      visibleq1: !state.visibleq1
      }))
    }
    questHandlerq2(){
      this.setState(state => ({
      visibleq2: !state.visibleq2
      }))
    }
    questHandlerq3(){
      this.setState(state => ({
      visibleq3: !state.visibleq3
      }))
    }
    questHandlerq4(){
      this.setState(state => ({
      visibleq4: !state.visibleq4
      }))
    }
    questHandlerq5(){
      this.setState(state => ({
      visibleq5: !state.visibleq5
      }))
    }
    questHandlerq6(){
      this.setState(state => ({
      visibleq6: !state.visibleq6
      }))
    }
    questHandlerq7(){
      this.setState(state => ({
      visibleq7: !state.visibleq7
      }))
    }
    questHandlerq8(){
      this.setState(state => ({
      visibleq8: !state.visibleq8
      }))
    }
    questHandlerq9(){
      this.setState(state => ({
      visibleq9: !state.visibleq9
      }))
    }
    questHandlerq10(){
      this.setState(state => ({
      visibleq10: !state.visibleq10
      }))
    }
    questHandlerq11(){
      this.setState(state => ({
      visibleq11: !state.visibleq11
      }))
    }
    questHandlerq12(){
      this.setState(state => ({
      visibleq12: !state.visibleq12
      }))
    }
    questHandlerq13(){
      this.setState(state => ({
      visibleq13: !state.visibleq13
      }))
    }

  render() {

    return (
        
 <div className="App">

               <img src="https://1693021541.rsc.cdn77.org/lands/led/logo1.png" style={{maxWidth:200,margin:"20px auto"}} />
              <VideoBullets />
              <div style={{background:"#ededed",height:40}} id="bug"></div>
              <Transform />
              <BulletsAndImages />
              <div className="blueH1">
               <div className="TitleH1" style={{fontStyle:"italic"}} > ¡Más de 30,000 vendidas!</div>
              </div>
              <GridSixIcons />

              <GridThreeIcons />
              <Testemonials />
              <Offer />

              <div className="footer"> 
                <img src="https://1693021541.rsc.cdn77.org/lands/led/desktop-trust-badges-4.png" style={{maxWidth:"90%"}} />
                 
                 <div className="firstText blue"  ><div style={{cursor:"pointer"}}  onClick={this.questHandler}> ¿Tienes una pregunta? <span style={{color:"white",textDecoration:"underline"}}>  Revisa nuestras Preguntas y Respuestas</span></div> 

                  <div className={'FaqQuestions ' + (this.state.visible ? 'show' : 'hide')}>
                     <div className={'oneQuest ' + (this.state.visibleq1 ? 'show' : 'hide')} onClick={this.questHandlerq1}>
                         <div className="question"> ¿Qué hace la máscara facial de luz? </div>
                         <div className="answer">  Dependiendo de la longitud de onda que se use, la terapia de luz puede aumentar la producción de colágeno y renovar las células, disminuir las líneas finas y las arrugas, reducir la pigmentación e incluso el tono de la piel, reducir los poros grandes y suavizar la textura de la piel, combatir las bacterias que causan el acné y minimizar las cicatrices.

                          </div>


                    </div>

                    <div className={'oneQuest ' + (this.state.visibleq2 ? 'show' : 'hide')} onClick={this.questHandlerq2}>
                         <div className="question"> ¿Existe alguna prueba de que este tipo de tecnología funciona, y puedo usarla si estoy embarazada? </div>
                         <div className="answer"> Los dispositivos LED son clasificados por la FDA como poseedores de “riesgos no significativos”; son completamente seguros y no poseen ninguna posibilidad de daño por sobreexposición. Los LEDs, no emiten luz UV, entonces no existe riesgo de quemaduras o de cáncer de piel. Este tratamiento no tiene reacciones adversas ni en tiempo de inactividad. Le recomendamos hablar primero con su médico si usted está embarazada, padece de epilepsia o foto alergia o está usando alguno de los siguientes medicamentos: inyecciones de esteroides, inyecciones de cortisona, medicamentos que causan sensibilidad a la luz (como la Tetraciclina).
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq3 ? 'show' : 'hide')} onClick={this.questHandlerq3}>
                         <div className="question"> ¿El tratamiento es abrasivo o doloroso?  </div>
                         <div className="answer">La terapia de luz es un tratamiento gentil, no doloroso, no invasivo ni abrasivo. No tendrá ningún tiempo de inactividad después de cada tratamiento


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq4 ? 'show' : 'hide')} onClick={this.questHandlerq4}>
                         <div className="question"> ¿Qué tan seguido puedo usar la máscara?</div>
                         <div className="answer">Recomendamos que use la máscara por 15 minutos cada día para obtener resultados óptimos.
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq5 ? 'show' : 'hide')} onClick={this.questHandlerq5}>
                         <div className="question"> ¿Qué tan pronto puedo esperar ver resultados? </div>
                         <div className="answer"> La terapia de luz estimula la producción natural de colágeno y la sanación natural propia de las células, así que los resultados más visibles no son inmediatos. La piel puede verse distinta después del primer tratamiento; más suave y más hidratada, con un brillo natural radiante, y con cada tratamiento usted verá las mejorías. Las cicatrices del acné y las cicatrices de otro tipo de heridas pueden empezar a mejorar en tan sólo dos semanas y pueden comenzar a desaparecer gradualmente con el uso continuo.
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq6 ? 'show' : 'hide')} onClick={this.questHandlerq6}>
                         <div className="question">¿Debo continuar normalmente mi rutina de cuidado de la piel?
   </div>
                         <div className="answer">  ¡Absolutamente! La máscara de LED le ayudará a fortalecer y rejuvenecer la piel a nivel celular así que aumentará los resultados obtenidos con otros tratamientos faciales. Le recomendamos usar la máscara de forma adicional a su régimen usado para el cuidado de la piel.
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq7 ? 'show' : 'hide')} onClick={this.questHandlerq7}>
                         <div className="question"> ¿Es la tecnología LED para todos? </div>
                         <div className="answer"> La terapia de Luz tendrá el mayor impacto en las células de la piel con metabolismo lento y una actividad celular lenta, que muestran los visibles signos del envejecimiento. Puede usarse en todos los tipos de piel, colores y condiciones.



                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq8 ? 'show' : 'hide')} onClick={this.questHandlerq8}>
                         <div className="question">¿Cuál es la diferencia entre la máscara facial BEAUTY BY LIGHT y los tratamientos de salón de belleza? </div>
                         <div className="answer"> ¡No es mucho! Toda la tecnología LED diferirá ligeramente en las longitudes de onda específica y en la fuerza de la luz emitida, pero, los efectos serán en su mayoría los mismos. La luz emitida en los dispositivos del salón de belleza es la misma luz emitida por la máscara BEAUTY BY LIGHT. BEAUTY BY LIGHT sólo le da la libertad de completar su tratamiento de una forma más regular, en la comodidad de su hogar.



                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq9 ? 'show' : 'hide')} onClick={this.questHandlerq9}>
                         <div className="question"> ¿Puedo usar la terapia de luz roja después de inyecciones de Botox?  </div>
                         <div className="answer"> Le recomendamos que espere dos semanas después de las inyecciones de Botox antes de empezar a usar la máscara. Si tiene más dudas, por favor hable con su médico o su dermatólogo.



                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq10 ? 'show' : 'hide')} onClick={this.questHandlerq10}>
                         <div className="question"> ¿Puedo salir al sol después de este tratamiento? </div>
                         <div className="answer"> Sí, los LEDs no emiten luz UV y el tratamiento no incrementa la fotosensibilidad. Le recomendamos siempre proteger su piel de los daños de los rayos UVA y UVB


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq11 ? 'show' : 'hide')} onClick={this.questHandlerq11}>
                         <div className="question"> ¿Puede la terapia de luz roja causar quemaduras/cáncer de piel? </div>
                         <div className="answer"> No, las quemaduras del sol y el cáncer de piel son causados por la exposición a las longitudes de onda UV, las cuales no son emitida por los LEDs.


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq12 ? 'show' : 'hide')} onClick={this.questHandlerq12}>
                         <div className="question"> ¿Cómo usar tu máscara de terapia de luz avanzada?
</div>
                         <div className="answer">
 1. Limpie su cara y permita que se seque o use una toalla suave para secarla.
<br />2. Remueva la máscara de luz de terapia facial del empaque y fije la correa elástica a la máscara. Conecte la caja de control a la máscara utilizando el cable proporcionado. Conecte el cable de encendido al cable de entrada de la caja de control y conecte el otro extremo del adaptador de encendido al punto de encendido más cercano.
<br />3. Presione la tecla de encendido y enciéndalo. El indicador de encendido se iluminará, luego presiona la tecla inicio/pausa ON/OFF.
<br />4. Presione la tecla de selección de color, seleccione el tipo de fotón (color: rojo, azul, verde, amarillo, blanco). Presione el botón y seleccione Tiempo + Y tiempo – para ajustar el tiempo de trabajo. Comience con un ajuste de baja energía y luego aumente la fuerza después de colocarse la máscara en la cara.
<br />5. Se recomienda usarla mientras está acostado y con los ojos cerrados. La mayoría de las personas prefieren usarla por las mañanas antes de levantarse de la cama.
<br />6. No la use por más de 30 minutos al día.
<br />7. Para mejores resultados la cara debe estar libre de cualquier crema o maquillaje, de esta manera la puede penetrar más eficientemente a la piel.
<br />8. Se recomienda el uso de una crema de vitamina A o de retinol después del tratamiento para maximizar los resultados. También contamos con una crema especialmente formulada para después del tratamiento, disponible en www.beautybylight.com.au
<br /><b>PRECAUCIONES</b>
<br />1 Trate de evitar mirar directamente a la fuente de luz por un periodo extenso de tiempo.
<br />2 Mantenga la máscara lejos del sol o del calor.
<br />3 No debe de usarse en mujeres embarazadas, niños, personas que padecen epilepsia o cualquiera que tiene algún padecimiento tiroideo. Le recomendamos preguntar a su médico antes de comenzar su tratamiento de terapia de luz.

                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq13 ? 'show' : 'hide')} onClick={this.questHandlerq13}>
                         <div className="question"> ¿Puedo usar la terapia de luz roja en la piel tatuada? </div>
                         <div className="answer"> Los efectos de la terapia de luz en los tatuajes aún no se conoce por completo. Le recomendamos cubrir los tatuajes expuestos con una pequeña cantidad de tela para protegerlos de cualquier reacción imprevista a la luz.


                          </div>


                    </div>

                  </div>

                 </div>
                 <div className="secondText"  > 
                     <ul className="giddy-links">
                             <li id="footer-support-cta"><a href="#" className=" open-modal" data-modal="#modal1"><span>Soporte</span></a></li>
                             <li id="footer-returns-cta"><a href="#" className=" open-modal" data-modal="#modal2"><span>Devolución</span></a></li>
                           
                           <li id="footer-privacy-cta"><a href="#" className=" open-modal" data-modal="#modal3"><span>Privacidad</span></a></li>
                          <li id="footer-terms-cta"><a href="#" className=" open-modal" data-modal="#modal4"><span>Términos</span></a></li>
                      </ul> 
                      <span>2019. Todos los Derechos Reservados.</span>
                 </div>
             </div>



                
      </div>
    );
  }
}

export default App;
