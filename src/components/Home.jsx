import React from 'react'
import Typewriter from 'typewriter-effect'
import Img1 from '../assets/credit-cards-bank.png'
import ButtonComponents from './ButtonComponents'


const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="text">
          <div className="headline-trans">
            <h6>
              send, spend, save & invest
            </h6>
          </div>
          <h2>
            Banking & Transfers at your <span>
              <Typewriter 
                options={{
                  strings: ['Fingertips'],
                  autoStart: true,
                  loop: true,
                }}
                />
              </span>
          </h2>
          <p>
            FinTri is fully featured US bank account fot non-US residents (Africans) and its deposit is fully protected
            by US government's Federal Deposit Insurance Corporation (FDIC).
          </p>
          <ButtonComponents />
        </div>
        <div className="image">
          <img src={Img1} alt="home" />
        </div>

      </div>
    </section>
  )
}

export default Home