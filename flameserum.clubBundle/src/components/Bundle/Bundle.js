import React, { Component } from 'react';
import { TitleHr } from '../TitleHr/index.js';
import  { BundleOne } from './BundleOne.js';

const Bundle = (props) =>{
 

		 
		  	   return(
					   <div className="bundleFlames" id="bundleFlames">
				      		 
				        		
				      			<TitleHr h1="Choose your package" />


						   <BundleOne db={props.db.Bundle1}/>
						   <BundleOne db={props.db.Bundle2}/>
						   <BundleOne db={props.db.Bundle3}/>
						   <BundleOne db={props.db.Bundle4}/>
				         
				        </div>
			    )
		  }
export { Bundle }