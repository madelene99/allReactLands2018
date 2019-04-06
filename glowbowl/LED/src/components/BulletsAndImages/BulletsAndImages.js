import React, { Component } from 'react'
import { TitleH1 } from '../TitleH1/TitleH1'
import { GridThreeIcons } from '../GridThreeIcons/GridThreeIcons'

 
class BulletsAndImages extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      visible:false,
      visibleHow:false,
      visibleq1:false,
   

    }
    this.howHandler = this.howHandler.bind(this)
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

    howHandler(){
      this.setState(state => ({
      visibleHow: !state.visibleHow
      }))
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
  <div className="BulletsAndImages">
      <div className="Bullets">
         <div className="TitleH1 mob" style={{fontStyle:"italic",color:"#009cff", borderTop:"1px solid #ccc", borderBottom:"1px solid #ccc",padding:"20px 0px",    margin: "26px auto", textAlign: "center"}} > Over 30,000 Sold!</div>
       <div class="TitleH1" id="h3"> 7 different modes of treatment - clinically proven space age technology that <b> penetrates the skin painlessly using light at different wavelengths. </b> </div>

          <div className="Bullets__ul">
              <ul>
                <li>Spa salon at your home almost for free!</li>
                <li>Produces faster, deeper and effective beauty effect</li>
                <li>Covers all face, also covers neck area</li>
                
                

              </ul>
          </div>
 <div class="TitleH1" id="h3"> It’s The <b>Must-have Beauty Device</b> For Everyone!</div>

<div className="mob">
  <div className="TitleH1"  style={{textAlign:"center", color: "#888888", paddingBottom:"6px"}}> Want to learn more?</div>
    <div className="linkWrap" >
      <div className="link" onClick={this.questHandler} >
      View FAQs
      </div>
      <div>|</div>
      <div className="link"  onClick={this.howHandler} >
      How It Works?
      </div>
    </div>


</div>

<div className={'Howitworks mob ' + (this.state.visibleHow ? 'show' : 'hide')}  >
    <div className="HowitworksWrap">
      <img src="https://1693021541.rsc.cdn77.org/lands/led/giddybox-closeBtn.png" class="closeb" onClick={this.howHandler} />
         <GridThreeIcons />
    </div>
</div>



 <div className={'FaqQuestionsMob mob ' + (this.state.visible ? 'show' : 'hide')}>
 <img src="https://1693021541.rsc.cdn77.org/lands/led/giddybox-closeBtn.png" class="closeb" onClick={this.questHandler} />
<div className="faqwrap">
                    <div className={'oneQuest ' + (this.state.visibleq1 ? 'show' : 'hide')} onClick={this.questHandlerq1}>
                         <div className="question"> What does the light therapy facial mask do? </div>
                         <div className="answer"> Depending on which wavelength is used, light therapy can increase collagen production & cell renewal, diminish fine lines & wrinkles, reduce pigmentation & even skin tone, shrink large pores & smooth skin texture, fight acne causing bacteria and minimize scarring.
                          </div>


                    </div>

                    <div className={'oneQuest ' + (this.state.visibleq2 ? 'show' : 'hide')} onClick={this.questHandlerq2}>
                         <div className="question"> Is there proof that this technology works and can I use it if I am pregnant? </div>
                         <div className="answer"> LED devices are classified by the FDA as possessing “non-significant risk”; they are completely safe and possess no possibility of harm from over-exposure. 
The LEDs emit no UV light, so there is no risk of sunburn or skin cancer. This treatment has no adverse reactions and no down-time. We recommend speaking to your doctor first if you are pregnant, have epilepsy or photoallergy or are taking any of the following medications; steroids injections, cortisone injections, medications causing light sensitivity (such as Tetracycline). 
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq3 ? 'show' : 'hide')} onClick={this.questHandlerq3}>
                         <div className="question"> Is the treatment abrasive or painful?  </div>
                         <div className="answer"> Light therapy is a gentle, painless, non-invasive and non-abrasive treatment. You'll have no down time after each treatment. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq4 ? 'show' : 'hide')} onClick={this.questHandlerq4}>
                         <div className="question"> How often should I use the mask? </div>
                         <div className="answer">We recommend you use the mask for 15 minutes a day, every day to see optimal results. 
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq5 ? 'show' : 'hide')} onClick={this.questHandlerq5}>
                         <div className="question"> How soon can I expect to see results?  </div>
                         <div className="answer"> Light therapy stimulates your own cells natural healing and collagen production, so the most visible results are not immediate. The skin can look different after the first treatment; smoother and more hydrated with a natural radiant glow, and with each treatment you will see improvement. 
Acne scars and scars from other types of injuries can start to improve in as little as two weeks and should gradually fade over time with continued use. 
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq6 ? 'show' : 'hide')} onClick={this.questHandlerq6}>
                         <div className="question">Should I continue my skin care routine as normal? </div>
                         <div className="answer"> Absolutely! The LED mask will help to strengthen and rejuvenate the skin at a cellular level so will amplify the results achieved in other facial treatments. We recommend using the mask as an addition to your existing skincare regime. 
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq7 ? 'show' : 'hide')} onClick={this.questHandlerq7}>
                         <div className="question"> Is LED for everyone? </div>
                         <div className="answer"> Light therapy will have the greatest impact on skin cells with sluggish metabolism and slow cellular activity, showing visible signs of aging. It can be used on all skin types, colours and conditions. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq8 ? 'show' : 'hide')} onClick={this.questHandlerq8}>
                         <div className="question"> What is the difference between the BEAUTY BY LIGHT facial mask and in-salon treatments.  </div>
                         <div className="answer"> Not much! All LED technology will differ slightly in the specific wavelengths and strength of light emitted, but, the effects will mostly be the same. The light emitted by in-salon devices is the same light emitted by the BEAUTY BY LIGHT mask. BEAUTY BY LIGHT just gives you the freedom to complete your treatments on a more regular basis, in the comfort of your own home. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq9 ? 'show' : 'hide')} onClick={this.questHandlerq9}>
                         <div className="question"> Can I use red light therapy after Botox injections?  </div>
                         <div className="answer"> We recommended that you wait two weeks after Botox injections before beginning to use the mask. If you have any concerns, speak with your doctor or dermatologist. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq10 ? 'show' : 'hide')} onClick={this.questHandlerq10}>
                         <div className="question"> Can I go out in the sun after this treatment?  </div>
                         <div className="answer"> Yes, LEDs emit no UV light and the treatment does not increase photo-sensitivity. We always recommend you slip, slop, slap every day to protect your skin from damaging UVA and UVB rays. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq11 ? 'show' : 'hide')} onClick={this.questHandlerq11}>
                         <div className="question"> Can red light therapy cause sunburn/skin cancer? </div>
                         <div className="answer"> No. Sun burn, and skin cancer are caused by light exposure from UV wavelengths, which the LEDs do not emit. 


                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq12 ? 'show' : 'hide')} onClick={this.questHandlerq12}>
                         <div className="question"> How to use your advanced Light Therapy Facial Mask. </div>
                         <div className="answer"> 1. Clean face and allow to dry or use a soft towel to pat dry.<br />
2. Remove the Light Therapy Facial mask from packaging and attach elastic strap to mask. Connect power control box to the mask using supplied cable. Connect power cord to power input of power control box and connect the other end of power adapter to the nearest power point.
<br />3. Press the power key to turn on. The power indicator will light up, then press start/pause key ON/OFF.
<br />4. Press the select key colour, select the type of photon (colour: red, blue, green and yellow Green white). Press Time button and select Time + and time - to adjust working time. Start with a low energy setting and then increase strength after placing mask on face.
<br />5. It is recommended to use lying down with eyes closed. Most people prefer to use it first thing in the morning before getting out of bed.
<br />6. Do not use more than 30 minutes per day.
<br />7. For best results the face should be free of any creams or make-up, so the light can penetrate the skin efficiently.
<br />8. It is advised to use Vitamin A cream or Retinol cream after treatment to maximise results. We also have a specially formulated after care cream available at www.beautybylight.com.au
<br />PRECAUTIONS 
<br />1. Try to avoid looking directly into light source for an extended period.
<br />2. Keep the mask away from direct sun or heat.
<br />3. Not to be used on pregnant women, children, epileptic sufferers or anyone who has thyroid disease. We recommend asking your doctor’s advice before starting your light therapy treatments. 
                          </div>


                    </div>


                    <div className={'oneQuest ' + (this.state.visibleq13 ? 'show' : 'hide')} onClick={this.questHandlerq13}>
                         <div className="question"> Can I use red light therapy on tattooed skin? </div>
                         <div className="answer"> The effect of light therapy on tattoos is not yet completely known. We recommend covering any exposed tattoos with a small amount of fabric to protect them from any unforeseen reaction to the light. 


                          </div>


                    </div>

                  </div>
                  </div>



        <a href="#Offer">
            <div className="Bullets__button btn">Claim Your $50 Discount Now! </div>
          </a>

      </div>
      <div className="Images">
            <img src="https://1693021541.rsc.cdn77.org/lands/led/biimage.png" alt="" />
           
      </div>
  </div>
)

}
}

export default  BulletsAndImages 
