import React from 'react'


import Img1 from '../assets/icons8-money-50.png'
import Img2 from '../assets/icons8-credit-card-64.png'
import Img3 from '../assets/icons8-merchant-account-80.png'
import Img4 from '../assets/icons8-invest-64.png'


const Offers = () => {
  const items = [{
    id: 1,
    image: Img1 ,
    text: 'Send and receive money across borders, as well as P2P transfers.',
    name: 'send'

  },
  {
    id: 2,
    image: Img2 ,
    text: 'Make purchases and withdrawals online or in person, anywhere in the world', 
    name: 'spend'
  },
  {
    id: 3,
    image: Img3 ,
    text: 'Save in dollars and earn high yield returns on your balance with no additional fees',
    name: 'save'
  },
  {
    id: 4,
    image: Img4 ,
    text: 'Set a monthly savings target and start investing.',
    name: 'invest'
  },
]
  return (
    <div className='offers'>
      <section>
        <div className='offers-container'>            {
              items.map(item => {
                return (
                  <div className="item" key={item.id}>
                    <div className="item-image">
                      <img src={item.image} alt="" />
                    </div> 
                    <div className="item-text">
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                    </div>                   
                  </div>
                  
                )
              })
            }

        </div>
      </section>
    </div>
  )
}

export default Offers