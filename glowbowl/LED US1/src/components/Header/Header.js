import React from 'react'

const Header = () => {

return (
  <div className="Header">

      <div className="Header__h1">
          <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/logo.png" alt="" style={{margin: "20px auto"}} />
          <span >JESSITERAPIA</span>
      </div>

      <div className="Header__soc">
        <div className="Header__soc-wrap">
          <a href="http://m.me/354204255384013/">    <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc1.png" alt=""   /></a>
          <a href="skype:jessicaqm33?chat">  <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc2.png" alt=""   /></a>
        <a href="https://api.whatsapp.com/send?phone=972544279080">      <img src="https://1693021541.rsc.cdn77.org/lands/toilet/n/soc3.png" alt=""   /></a>
        </div>
        <span>Conéctate con nosotros ahora</span>
      </div>
  </div>
)

}

export { Header }
