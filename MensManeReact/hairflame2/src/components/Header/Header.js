import React  from 'react'

 const Header = (props) => {

   const { header__h1, header__h2, header__img, header__p } = props.db;
    return(  <div className="Header">
        <header>

              <div className="header__h2">{header__h2}</div>
                <div className="header__h1">{header__h1}</div>

              <div className="header__p">{header__p}</div>
              <div class="HowItWorks__hr"></div>
              <div className="header__img">
                <img src={header__img} alt="header product" />
              </div>

        </header>
      </div>
      )
 }

export { Header }
