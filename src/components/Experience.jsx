import React from 'react'

import Img1 from '../assets/budget.jpeg'
import Img2 from '../assets/bank-account.png'
import Img3 from '../assets/bank-growth.png'
import Img4 from '../assets/blog-.jpeg'
import ButtonComponents from './ButtonComponents'



const Experience = () => {

  return (
    <div className="experience">
      <section>
        <div className="experience-container">
          <div className="item">
            <div className="item-text">
              <h4>
              Experience US banking <span> at its finest</span>
              </h4>
              <p>
              With a free US checking account, you can pay for international tuition, accommodation, luxury vacation, send money to friends and family abroad, providing financial peace of mind to millions of people.
              </p>
            </div>
            <div className="item-image">
              <img src={Img1} alt="home" />
            </div>
          </div>
          <div className="item">
            <div className="item-text">
              <h4>
                Gain entry to <span>all borders</span> 
              </h4>
              <p>
              Conveniently send and receive money in multiple currencies, make large payments for investment, pay mortgages, and other bills across all borders. Bird provides easy access to international banking and digital financial services for the 1 billion people on the emerging market.
              </p>
            </div>
            <div className="item-image">
              <img src={Img2} alt="home" />
            </div>
          </div>
          <div className="item">
            <div className="item-text">
              <h4>
                One app for <span>all accounts </span>             
              </h4>
              <p>
              Managing multiple accounts from a single app, saves you the trouble of carrying multiple cards, as well as the time and stress of navigating multiple mobile apps to complete any transaction.
              </p>
              <ButtonComponents />
            </div>
            <div className="item-image">
              <img src={Img3} alt="home" />
            </div>
          </div>
          <div className="item">
            <div className="item-text">
              <h4>
              Checkout with <span> Bird</span>
            </h4>
              <p>
              You can integrate the FinTri fast checkout controls into your website or app. It accepts local and international payments for businesses of all sizes.
              </p>
              <ButtonComponents />
            </div>
            <div className="item-image">
              <img src={Img4} alt="home" />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Experience