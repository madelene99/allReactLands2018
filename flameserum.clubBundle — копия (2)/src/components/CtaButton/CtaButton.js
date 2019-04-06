import React from 'react'
 

 const CtaButton = (props) => {

    const { CtaButton__h1, CtaButton__button } = props.db
    return (
      <div className="CtaButton">
            <div className="CtaButton__h1">{CtaButton__h1}</div>
          
         

        <a className="CtaButton__button" href="#bundleFlames"> {CtaButton__button} </a>
      </div>
    )
  }

export { CtaButton }
