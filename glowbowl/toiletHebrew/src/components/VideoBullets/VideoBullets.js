import React from 'react'
import {TitleH1} from '../TitleH1/TitleH1'
const VideoBullets = () => {



return (
  <div className="VideoBullets">
      <TitleH1 title="ישנו פתרון לכל בעיה כספית שלכם או של ילדיכם ונכדיכם" />
      <TitleH1 title="מתאים רק לבני 60 פלוס, בעלי נכס. " color="h2" />
      <div className="VideoBullets__wrap">
        <div className="VideoBullets__video">
            <iframe
                  width="545"
                  height="308"
                  title="ifrmchik"
                  src="https://www.youtube.com/embed/UxVyf3p_Ftg"

                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   >
            </iframe>
        </div>
        <div className="VideoBullets__text">
            <div className="Bullets">
              <TitleH1 title=" תוך זמן קצר תקבלו בחשבון סכום שיכול להגיע גם לחצי מיליון ש״ח או אפילו יותר! ולא מדובר על טוטו… :) " color="h2"   />
                  <ul>
                      <li>רק אם אתם בני 60 פלוס</li>
                      <li>יש לכם נכס</li>
                      <li>אתם רציניים</li>

                  </ul>
            </div>
            <a href="#Offer"> <div className="VideoBullets__button btn">רוצה לקבל פרטים!</div></a>
        </div>
      </div>
  </div>
)

}

export { VideoBullets }
