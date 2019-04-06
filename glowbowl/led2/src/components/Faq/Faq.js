import React from 'react'
import {   Collapse } from 'antd'
import {TitleH1} from '../TitleH1/TitleH1'
//import FaqAnswers from '../FaqAnswers/FaqAnswers'


const Panel = Collapse.Panel

class Faq extends React.Component {

  state = { visible: false }

   showModal = () => {
     this.setState({
       visible: true,
     });
   }

   handleOk = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }

   handleCancel = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }

   render() {
     return (
       <div className="Faq">
    <TitleH1 title="Preguntas y Respuestas" color="blufaq"  />
         <Collapse accordion>
  <Panel header="¿Es posible tener una sesión de prueba gratis?" key="1">
    <p>Lo que te ofrezco es una sesión de 10-15 minutos de manera gratuita en donde hablamos de lo que te sucede y además te brindaré una breve orientación psicológica.</p>
  </Panel>
  <Panel header="¿Puedo agendar una cita en horario conveniente para mí?" key="2">
    <p>Sí totalmente, el servicio está diseñado justamente online para que puedas recibirlo en un horario conveniente para ti.</p>
  </Panel>
  <Panel header="¿Cuánto es la duración de la sesión?" key="3">
    <p>La duración de la sesión son 50 minutos</p>
  </Panel>



  <Panel header="¿Cada cuánto tiempo son las sesiones?" key="4">
    <p>Las sesiones son 1 vez a la semana</p>
  </Panel>

  <Panel header="¿En una sola sesión resolveré lo que me sucede?" key="5">
    <p> El tratamiento psicológico breve en total puede llevar aproximadamente 10 sesiones, sin embargo, desde la primera sesión se te brindará una orientación psicológica.  </p>
  </Panel>

  <Panel header="¿Qué tipo de enfoque psicoterapéutico es el que se maneja?" key="6">
    <p> La psicoterapia que se brinda es psicoterapia breve de enfoque sistémico.</p>
  </Panel>

  <Panel header="¿Qué tipo de problemática queda excluida de la psicoterapia breve?" key="7">
    <p>Principalmente Trastornos Psiquiátricos que requieran medicación, la atención que se brinda es Psicológica y no Psiquiátrica.</p>
  </Panel>

  <Panel header="¿El servicio que ofreces es confidencial?" key="8">
    <p>En la sesión inicial gratuita tendrás la oportunidad de realizar preguntas y comenzar a entender acerca de lo qué te sucede y cuál es el primer paso a llevar a cabo para después iniciar el tratamiento psicológico</p>
  </Panel>




</Collapse>

       </div>
     );
   }
 }
export default  Faq
