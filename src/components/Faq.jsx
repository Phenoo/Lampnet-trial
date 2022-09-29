import React, { useState } from 'react'
import Accordion from './Accordion'
import Team from '../assets/engineer.png'
const data = [
  {
    id: 1,
    title: 'What is Bird?',
    answer: 'Bird allows you to open a US checking account in dollars, a wealth building account, make cross-border and P2P transfers in various currencies, manage multiple accounts from a single app, pay bills and provides a checkout solution for apps and websites.',
  },
  {
    id: 2,
    title: 'What do I need to have a Bird account?',
    answer: 'For Nigerian users, phone number and Bank Verification Number (BVN) are required, whereas only a phone number is required for US users.'
  },
  {
    id: 3,
    title: 'How do I send money to a Bird user?',
    answer: `
    1. Click on “Send Money” on the dashboard or “Transfer” on the menu below the screen.
    2. Click on "Send" to your Contact. 
    3. Search by name.
    4. Enter amount.
    5. Add a note.
    6. Click on "SEND NOW"
    `
  },
  {
    id: 4,
    title: 'How do I transfer money to a bank account?',
    answer: `
      1. Click on “Send Money” on the dashboard or “Transfer” on the menu below the screen.
      2. Click on “Send to your Bank Account”.
      3. Select recipient currency.
      4. Select Bank.
      5. Enter recipient account number.
      6. Click on “Next”.
      7. Enter amount.
      8. Add a note.
      9. Click on “SEND NOW”.
    `
  },
  {
    id: 5,
    title: 'How do I link a bank account or card on Bird?',
    answer: `
      1. Click on “Cards”.\n2. Click on “Link your debit card”\n
      3. Click on “Continue”.
    `
  },
]
const Faq = () => {
  const [ask, setAsk] = useState(data)

  return (
    <section>
      <div className='faq'> 
        <h4>
          Frequently asked <span> questions</span>
        </h4>
        <p className='sub'>
          Everything you need to know about the product
        </p>

        <ul className='faq-container'>
        {
            ask.map(question  => {
              return <Accordion key={question.id} {...question} set={setAsk} />
            })
          }
        </ul>
        <div className='engine'>
          <img src={Team} alt='team' />
          <h4>
            Still have questions?
          </h4>
          <h6>
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </h6>
          <button className='btn btn-blue'>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Faq