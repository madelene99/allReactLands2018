import React, {Component} from 'react'
import {TitleH1} from '../TitleH1/TitleH1'



  export default class Offer extends Component {
    constructor() {
       super();
       this.state = {

         p:0,
         adsetname:0,
         adname:0,
         price:40,
         active1:true,
         active2:true,
         active3:true,
         class1:"yourclassNameImg",
         class2:"yourclassName",
         class3:"yourclassName",
         messenger:"Facebook",
         classWrap:"allOpen",
         best:"",

       };
        this.handleOption1 = this.handleOption1.bind(this);
        this.handleOption2 = this.handleOption2.bind(this);
        this.handleOption3 = this.handleOption3.bind(this);
         

     }



     handleOption1(){
       const currentState = this.state.active1;

       currentState ? this.setState({ class1: "yourclassNameImg" }) : this.setState({ class1: "yourclassName1" })
       currentState ? this.setState({ class2: "yourclassName" }) : this.setState({ class2: "yourclassNameImg" })
       currentState ? this.setState({ class3: "yourclassName" }) : this.setState({ class3: "yourclassNameImg" })

       this.setState({ active1: !currentState });
       this.setState({ messenger: "facebook" });



       if (this.state.active1)
        {

          this.setState({ classWrap: "allOpen" });


        }  else{
            this.setState({ classWrap: "allClose" });

        }


     }

     handleOption2(){
       const currentState = this.state.active2;

       currentState ? this.setState({ class1: "yourclassName" }) : this.setState({ class1: "yourclassNameImg" })
       currentState ? this.setState({ class2: "yourclassNameImg" }) : this.setState({ class2: "yourclassName1" })
       currentState ? this.setState({ class3: "yourclassName" }) : this.setState({ class3: "yourclassNameImg" })

       this.setState({ active2: !currentState });
        this.setState({ messenger: "WhatsApp" });
        if (this.state.active2)
         {

           this.setState({ classWrap: "allOpen" });


         }  else{
             this.setState({ classWrap: "allClose" });

         }
     }
     handleOption3(){
       const currentState = this.state.active3;

              currentState ? this.setState({ class1: "yourclassName" }) : this.setState({ class1: "yourclassNameImg" })
              currentState ? this.setState({ class2: "yourclassName" }) : this.setState({ class2: "yourclassNameImg" })
              currentState ? this.setState({ class3: "yourclassNameImg" }) : this.setState({ class3: "yourclassName1" })

      this.setState({ active3: !currentState });
        this.setState({ messenger: "Skype" });
        if (this.state.active3)
         {

           this.setState({ classWrap: "allOpen" });


         }  else{
             this.setState({ classWrap: "allClose" });

         }
     }


     componentDidMount() {
       function getURLParameter(name) {
                   return decodeURI(
                       (RegExp(name + '=' + '(.+?)(&|$)').exec(document.location.search) || [, null])[1] || ''
                   );
               }
            let best = getURLParameter('best')
            let adname = getURLParameter('adname')
            let adsetname = getURLParameter('adsetname')
            let p = getURLParameter('p')
            let c = getURLParameter('c')

     this.setState({"adname":adname, "adsetname":adsetname, "p":p,"best":best})
let comm =this


 

 

 




     }



       render(){

const Day = new Date();
const gday = Day.getDay();
 var RealDayName
(gday == 0) ? RealDayName = "Sunday" : (gday == 1) ? RealDayName = "Monday" : (gday == 2) ? RealDayName = "Tuesday" : (gday == 3) ? RealDayName = "Wednesday" : (gday == 4) ? RealDayName = "Thursday" : (gday == 5) ? RealDayName = "Friday" : (gday == 5) ? RealDayName = "Friday" : (gday == 5) ? RealDayName = "Friday" : (gday == 6) ? RealDayName = "Saturday" :RealDayName = "day";


 

return (
  <div className="Offer" id="Offer">

<div class="TitleH1">Bienvenue au cadeau d'aujourd'hui!</div>
<div class="TitleH1" id="h2">Chaque {RealDayName}, nous sélectionnons plusieurs clients chanceux pour obtenir un rabais de 90 $ et utilisons cette technologie LED magique.
</div>


      
<div className="GridFoot">
<div>
<img src="https://1693021541.rsc.cdn77.org/lands/led/promo.png" style={{marginTop:20, width:"100%"}} />     
   <br /  >
<div class="TitleH1" id="h2" style={{textAlign:"left"}}>
<br />
<div>    <b>Pour réclamer votre rabais de 90 $:</b></div>

<b>1.</b> Cliquez sur le bouton
<br /><b>2.</b> Remplissez votre adresse de livraison
<br /><b>3.</b> Appliquez le code de réduction 7x2019 à la page suivante (sur le mobile) ou à droite (sur le PC)
</div>
   </div>

       <div className="Offer__blocks" style={{display:"none"}}>
          <div className="Offer__block">
              <div className="Offer__h3">1 – GlowBowl Fresh</div>
              <div className="Offer__img"></div>
              <div className="Offer__p">Retail 1 177,67 ₽</div>
              <div className="Offer__btn">Order Now</div>
           </div>
           <div className="Offer__block">
               <div className="Offer__h3">5 – GlowBowl Fresh</div>
               <div className="Offer__img"></div>
               <div className="Offer__p">Buy 3, Get 2 FREE</div>
               <div className="Offer__p">706,60 ₽/each</div>
               <div className="Offer__p">Total: 3 533,02 ₽</div>
               <div className="Offer__btn">Order Now</div>
            </div>
            <div className="Offer__block">
                <div className="Offer__h3">2 – GlowBowl Fresh</div>
                <div className="Offer__img"></div>
                <div className="Offer__p">Buy 1, Get 1 25% OFF</div>
                <div className="Offer__p">1 030,38 ₽/each</div>
                <div className="Offer__p">Total: 2 060,77 ₽</div>
                <div className="Offer__btn">Order Now</div>
             </div>
       </div>

       <form className="Fotter-Form" action="thanks" method="GET">
       <div>
       <div className="firstText">Votre prix:  <span  style={{textDecoration:"line-through",marginTop:"13px"}}>&nbsp;$199.95&nbsp;</span>  109,95 $ + Livraison gratuite </div>
    
</div>

 

   <input type="hidden" name="version" className="p" value="main" />
   <input type="hidden" name="best" className="p" value={this.state.best} />
  
<div className="secondText">7xBeauty est un produit de haute qualité normalement utilisé dans les salons de spa. Ils facturent au moins 110 $ pour 1 traitement.</div>

                <div className="buyitr"  style={{paddingTop:20}}><a  href="https://7xbeauty.com/fb.html" className="btn blabtn" style={{margin:24}}> Réclamez votre rabais de 90 $ maintenant!</a></div>
                
                
                
       </form>
</div>

  </div>
)
}

}
