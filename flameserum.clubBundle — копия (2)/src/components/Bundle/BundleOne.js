import React, { Component } from 'react'
import ModalButton from '../ModalButton/ModalButton'



const BundleOne = (props) =>{
 console.log(props)
	const { bundleOne_title, bundleOne_price1_1, bundleOne_price1_2, bundleOne_price2, bundleOne_text1, bundleOne_text2, bundleOne_text3, bundleOne_text4, bundleOne_text5, bundleOne_img, CtaButton__button, quantity  } = props.db
		 
		  	   return(
				      <div className="bundleOne">
						   <div className="bundleOne-title">{bundleOne_title}</div>
				      		 <div className="bundleOne-line">
</div>
						   <div className="bundleOne-price1">{bundleOne_price1_1} for <span style={{ color: "rgb(255, 0, 0)" }}>AED</span> <span>{bundleOne_price1_2}</span></div>
				      		 <div className="bundleOne-price2">
							   {bundleOne_price2}</div>
				      		 <div className="bundleOne-img">
							   <img src={bundleOne_img} height="50px" />
							   </div>
						   <div className="bundleOne-text"> {bundleOne_text1}
						   <br/> <br/>
							   {bundleOne_text2}
							   <br /> <br />
							   {bundleOne_text3}
							   <br /> <br />
							   {bundleOne_text4} <br /> <br />
							   {bundleOne_text5}
						   </div>
				      		 <div className="bundleOne-button">
							 
							   <ModalButton classNames="CtaButton__button" id={CtaButton__button} quantity={quantity} btntext="ORDER NOW" />
				      		 </div>
				        </div>
			    )
		  }
export { BundleOne }