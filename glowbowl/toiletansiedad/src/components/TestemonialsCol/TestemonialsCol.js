import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
//import {OneComment} from '../OneComment/OneComment'
import { Carousel } from 'antd';



const TestemonialsCol = () => {

return (
  <div className="Testemonials TestemonialsCol">
      <TitleH1 title="Recomendaciones de Colegas" color="blue" />
     {/*   <OneComment /> */}

    <div className="web">
         <div className="OneComment">

             <div className="OneComment__text">
                 <div className="OneComment__h3"></div>
                 <div className="OneComment__p">Conozco a Jessica y puedo asegurar que es una persona íntegra, honesta, responsable. Se ha mostrado siempre sensible y profesional en su trabajo como Psicóloga.
</div>           <br /><b>Isadora Seguame</b>, Ocampoм Maestra en Terapia Familiar Sistémica, Universidad Autónoma de Nayarit
             </div>

         </div>
         <div className="OneComment">

             <div className="OneComment__text">
                 <div className="OneComment__h3"></div>
                 <div className="OneComment__p">La Maestra Jessica Quiñonez ha demostrado por 12 años capacidad, ética y profesionalismo en el área de la salud mental, mostrándose actualizada y competente en las actividades que realiza.
</div> <br /><b>Carlos Alejandre Bobadilla</b>, Licenciado en Psicología, Secretaría de Salud de Nayarit


             </div>

         </div>
         <div className="OneComment">

             <div className="OneComment__text">
                 <div className="OneComment__h3"></div>
                 <div className="OneComment__p">Conozco a Jessica desde hace 10 años a quién recomiendo ampliamente como Psicóloga y como Terapeuta. En ella encontrará compromiso, lealtad, profesionalismo, calidad y calidez en la atención.
</div> <br /><b>Marcela Rábago de Ávila</b>, Doctora en Psicología. Docente Investigador en Universidad Autónoma de Nayarit.


             </div>

         </div>
         <div className="OneComment">

             <div className="OneComment__text">
                 <div className="OneComment__h3"></div>
                 <div className="OneComment__p">Recomiendo a Jessica como Psicóloga, la conozco desde la licenciatura, en la que destacó con su gran motivación para el estudio y como profesionista con más de 12 años de experiencia, ha demostrado ampliamente su capacidad para ayudar a las personas en el área de la salud mental.
</div><br /><b>Norma Ramírez Ávila</b>, Licenciada en Psicología, Universidad del Valle de Atemajac.


             </div>

         </div>














     </div>

     <div className="mob">

     <Carousel autoplay>
     <div className="OneComment">

         <div className="OneComment__text">
             <div className="OneComment__h3"></div>
             <div className="OneComment__p">Conozco a Jessica y puedo asegurar que es una persona íntegra, honesta, responsable. Se ha mostrado siempre sensible y profesional en su trabajo como Psicóloga.
</div>           <br /><b>Isadora Seguame</b>, Ocampoм Maestra en Terapia Familiar Sistémica, Universidad Autónoma de Nayarit
         </div>

     </div>
     <div className="OneComment">

         <div className="OneComment__text">
             <div className="OneComment__h3"></div>
             <div className="OneComment__p">La Maestra Jessica Quiñonez ha demostrado por 12 años capacidad, ética y profesionalismo en el área de la salud mental, mostrándose actualizada y competente en las actividades que realiza.
</div> <br /><b>Carlos Alejandre Bobadilla</b>, Licenciado en Psicología, Secretaría de Salud de Nayarit


         </div>

     </div>
     <div className="OneComment">

         <div className="OneComment__text">
             <div className="OneComment__h3"></div>
             <div className="OneComment__p">Conozco a Jessica desde hace 10 años a quién recomiendo ampliamente como Psicóloga y como Terapeuta. En ella encontrará compromiso, lealtad, profesionalismo, calidad y calidez en la atención.
</div> <br /><b>Marcela Rábago de Ávila</b>, Doctora en Psicología. Docente Investigador en Universidad Autónoma de Nayarit.


         </div>

     </div>
     <div className="OneComment">

         <div className="OneComment__text">
             <div className="OneComment__h3"></div>
             <div className="OneComment__p">Recomiendo a Jessica como Psicóloga, la conozco desde la licenciatura, en la que destacó con su gran motivación para el estudio y como profesionista con más de 12 años de experiencia, ha demostrado ampliamente su capacidad para ayudar a las personas en el área de la salud mental.
</div><br /><b>Norma Ramírez Ávila</b>, Licenciada en Psicología, Universidad del Valle de Atemajac.


         </div>

     </div>


</Carousel>


     </div>




  </div>
)

}

export { TestemonialsCol }
