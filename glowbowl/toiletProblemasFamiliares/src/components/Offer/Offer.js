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
         classWrap:"allOpen"

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
            let adname = getURLParameter('adname')
            let adsetname = getURLParameter('adsetname')
            let p = getURLParameter('p')
            let c = getURLParameter('c')

     this.setState({"adname":adname, "adsetname":adsetname, "p":p})
let comm =this



async function getIpApi() {
 try {
     let response = await fetch('//jessiterapia.com/geo.php');
   let responseJson = await response.json();
   console.log(responseJson.ip)
   console.log(response)
let urlaka = "//ipinfo.io/"+responseJson.ip+"/geo"


     async function getMoviesFromApi() {
      try {
          let response = await fetch(urlaka);
        let responseJson = await response.json();
        console.log(responseJson.country)

          let alfaPrice = (responseJson.country==="US") ? '$50' : (c==='us') ? '$50' : '575 Pesos';
            comm.setState({"price":alfaPrice})

       } catch(error) {
        console.error(error);
      }
    }
    getMoviesFromApi()


  } catch(error) {
   console.error(error);
 }
}
getIpApi()










     }
       render(){
return (
  <div className="Offer" id="Offer">
     <TitleH1 title="Agenda  tu Consulta" />
       <div className="Offer__h2">
</div><div className="Offer__h2">
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

       <form className="Fotter-Form" action="https://jessiterapia.com/thanks/" method="GET">
       <div>
       <label htmlFor="name">Nombre completo<span>*</span></label>
          <input type="text" name="name" id="name" required />

</div><div>

          <label htmlFor="phone">Número de Teléfono<span>*</span></label>

               <input type="number" name="phone" id="phone" required />

</div>
<div>

          <div className="labelMess"><label>Messenger</label></div>

            <div className="select" id={this.state.classWrap}  >
                <div  className={this.state.class1} onClick={this.handleOption1}><img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc1.png" alt="" />Facebook</div>
                <div  className={this.state.class2} onClick={this.handleOption2}><img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc3.png" alt="" />WhatsApp</div>
                <div  className={this.state.class3} onClick={this.handleOption3}><img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc2.png" alt="" />Skype</div>
            </div>

</div>
<div>
             <label htmlFor="mess">Nombre de usuario</label>
               <input type="text" name="mess" id="mess" />

                </div>

   <input type="hidden" name="p" className="p" value={this.state.p} />
   <input type="hidden" name="adsetname" className="adsetname"  value={this.state.adsetname} />
   <input type="hidden" name="adname" className="adname"  value={this.state.adname} />
   <input type="hidden" name="price" className="price"  value={this.state.price} />
   <input type="hidden" name="messenger" className="messenger"  value={this.state.messenger} />

                <div className="buyitr"><button type="submit" > Agenda tu consulta   </button></div>
       </form>


  </div>
)
}

}
