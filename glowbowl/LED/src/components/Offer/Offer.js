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

<div class="TitleH1">Welcome to Today's Giveaway!</div>
<div class="TitleH1" id="h2">Every {RealDayName} we select several lucky customers to get a $50 discount and use this magic LED technology. </div>


      
<div className="GridFoot">
<div>
<img src="https://1693021541.rsc.cdn77.org/lands/led/promo.png" style={{marginTop:20, width:"100%"}} />     
   <br /  >
<div class="TitleH1" id="h2">Please save the promo code and fill your name and phone number. Our consultant will call you, answer your questions and help you to redeem discount code.</div>
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
       <div className="firstText">Retail Price:<span  style={{textDecoration:"line-through",marginTop:"13px"}}>&nbsp;$199.95&nbsp;</span></div>
       <label htmlFor="name">Name<span>*</span></label>
          <input type="text" name="name" id="name" required />

</div><div>

          <label htmlFor="phone">Phone Number<span>*</span></label>

               <input type="number" name="phone" id="phone" required />

</div>
 

   <input type="hidden" name="version" className="p" value="main" />
   <input type="hidden" name="best" className="p" value={this.state.best} />
  
                <div className="buyitr"><button type="submit"   className="btn blabtn"> Claim Your $50 Discount Now!  </button></div>
                <div className="firstText">No Thanks! I'd Rather Pay Full Price</div>
                <div className="secondText">Retail Price: $199.95</div>
                <div className="buyitr"><a href="https://goodsvil.com/products/7x-beauty-led-mask" className="btn" >Pay Full Retail Price! </a></div>
       </form>
</div>

  </div>
)
}

}
