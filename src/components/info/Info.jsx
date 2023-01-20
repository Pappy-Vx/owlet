import React  from 'react'
import './info.css'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import FOUNDER from '../../assets/founder.png'
import SIGN from '../../assets/sign-up.png'
import { BsChevronRight , BsPatchCheckFill, BsChevronDown } from 'react-icons/bs'
import Collapsible from 'react-collapsible'
const Info = () => {
  // const [selected, setSelected] = useState(0)
  // const toggle = (index) => {
  //   if (selected === index) {
  //     setSelected(index)
  //   }

    
  // }
  const data = [
    {
      question: '1. Inappropriate Posts',
      answer: 'You are not allowed to post lewd, obscene, or graphic images. You are also not allowed to post sexual photos of any kind. You are not allowed to post partially nude or completely nude photos'
    },
    {
      question: '2. Age Limit',
      answer: 'You must be at least 13 years old to use this service.'
    },
    {
      question: '3. Password Security',
      answer: 'You are to protect your password and guard access to your account. You are accountable for every activityperformed under your user name. You are solely accountable for your conduct on the app. You are also responsible for any text, audio, video, graphic, photo, profile, audio, and link (content) that you submit, post, and display on the Owlet.'
    },
    {
      question: '4. Rules of engagement',
      answer: 'You must not abuse, harass, or threaten other owlet users. Abusive language or any form of online harassment can lead to suspension or even deletion of account. There is no tolerance for abusive users and reports of abusive language are taken seriously.'
    },
    {
      question: '5. Copyright Laws',
      answer: 'You must not violate copyright laws. You must not violate intellectual property rights.'
    },
    {
      question: '6. Spamming',
      answer: 'You must not send multiple unsolicited messages that can be diagnosed as spam.'
    }
    
  ]
  const faq = [
    {
      question: '1. What is "Marketplace"?',
      answer: 'An online marketplace is a place where people buy from people. It’s like a local market, but with one difference: you can buy and sell online without even leaving a room. More than that, with Owletapp you can find vendors or buyers closest to your location in seconds.'
    },
    {
      question: '2. Do you have any stores?',
      answer: 'No, as we are not a shop. Owletapp is the marketplace where you can sell your listings, buy goods from real people, and find a service you need. Any deal you make, you make with people.  And we exist just to help you find each other.'
    },
    {
      question: '3. Listing rules',
      answer: '- Add a precise title for each advert. - Make sure you add a brief and clear description without any false information  - Every advert should contain unique images taken by you without any contact information. - Make sure you choose an Location and Hashtag - The prices of your items must correspond to the actual prices of similar products - Indicate correct contact details so that your potential customers can reach you easily. - All items and products must be legally permitted - Add Listings for different items for sale separately.'
    },
    {
      question: '4. How to report illegal activity on Owletapp?',
      answer: 'If you see something suspicious on Owletapp, please let us know       1. Click on the 3 dots at the right corner of every Listing    2. Choose "Flag Post"  3. Select your Reason for flagging the post     Thanks to your caution, the Owletapp will be more secure for millions of users.'
    },
    {
      question: '5. How do I contact Support Team? ',
      answer: 'You can only contact our support team via our email: helpdesk@theowlette.com        Here are some tips on how to prepare an efficient email and get assistance faster based on the type of issue you have faced:        - Something is not working correctly on the platform. If  the issue is about our app, let us know what operating system and app version you use. If possible, take screenshots that show what kind of issue appears.           - Scam case: If you have faced a scam or you have suspicions that one of the users may deceive people, please tell us about it in your email. Share a link to the profile of such a user, and describe all the details you have. If possible attach screenshots of your conversations and other pictures or materials that can prove your words. The more information we have, the higher chances we can take all the necessary steps faster.'  
    },
    {
      question: '6. Should I pay before or after?',
      answer: 'We are the place that only connects buyers with sellers and helps them meet. You will make deals with different people, so it is better to discuss such things with every seller directly. However, we recommend not sending prepayments. It is also unsafe to pay the full sum before seeing the product. The best way is to set up with a seller a face-to-face meeting  in a public place or order delivery, inspect the product, and only pay for it if you are satisfied.'
    }
    
  ]
  return (
  
<div>
<section className='chat'>
    <div className='chat_info'>
      <h2>Chat With Us</h2>
      <p>You can also contact us via our social media platforms
        and someone will be waiting to help.
      </p>
    </div>
    <div className='chat_socials-list'>
    <a href="https://twitter.com/owletapp
    "><FaTwitter className="chat_socials"/></a>
    <a href="https://instagram.com/owletapp"><FaInstagram className="chat_socials"/></a>
    <a href="https://www.youtube.com/channel/UCWimeDcakI6eHAxR3lLwuuA"><FaYoutube className="chat_socials"/></a>
    </div>
  </section>
  <section id='founders' className='container founder_info'>
    <div className="founder_content">
      <h2>
      Who Birthed <span>
      OWLETAPP?
      </span>
      </h2>
      <p>
      The Owlet was born out of Elijah Olusehinde Kolawole’s 
frustration at the inefficiency of physical markets. 
He saw the problems people faced with buying from a 
physical marketplace and the strife of running a business 
and felt there was a better way. 
The overcrowding in the physical markets is menacing, and 
factoring in the ever-present danger of insecurity in Nigeria, 
something had to be done to improve commercial shopping. 
On both sides of the coin (business owner and consumer), 
physical markets are not good enough.

Elijah sought to build a better bridge between business 
owners and their customers. He wanted to build a better 
marketplace that offers a better experience. That dream 
birthed The Owletapp, an online marketplace where traders/
professionals can display their goods and services for 
customers to make purchases and hire them. 
It is a digital, easy-to-navigate market that 
allows entrepreneurs to earn more from their businesses even 
without a physical shop. For customers, The Owlet makes 
shopping easier, safer, and more convenient.

On The Owlet, business owners can build a store and list all 
their products. Customers can then make orders, and The 
Owlet will pick these orders and deliver them in pristine 
condition. enience. 
The Owlet brings both parties online and connects them. 
      </p>
    </div>
    <div className="founder_img">
      <img src={FOUNDER} alt="" />
    </div>
  </section>
  <section id='works' className='works_container'>
    <h2>How It Works</h2>
    <div className='container work_container'>
    <div className="works_img">
      <img src={SIGN} alt="" />
    </div>
    <div className="works_content">
    <h3>For Sellers:</h3>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Download Owletapp
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Sign Up and register your account
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Set up your Store and provide the necessary KYC information
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Add Listings, by filling in the provided fields and using clear 
      images and descriptions
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Add hashtags and precise location to your post for easy 
      geolocating
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Add Post and let Owletapp help you find customers in seconds
      </p>
      </div>
      </article>
 
      <h3>For Buyers:</h3>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Download Owletapp
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Sign Up and register your account
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Provide the necessary KYC information
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Search for listings using Hashtags, specific account names 
      or Listings
      </p>
      </div>
      </article>
      <article className="work_detail">
      <BsPatchCheckFill className="work__details-icons" />
      <div>
      <p>
      Find Listings closest to you withing seconds
      </p>
      </div>
      </article>

    </div>
    </div>
  </section>
  <section id='terms' className='container term_container'>
    <h2>Terms & Condition</h2>
    <p>The Owlet aims to connect business owners to customers. We want to help entrepreneurs to expand
    their business, reach, visibility, and sales. It is an online marketplace that makes it easier to gain new
    customers as businesses/freelancers can reach a wider variety of customers who may not have heard of
    their product or service.</p>

    <div className="accordion">
    {data.map(({question, answer}) => {
      return (
        <Collapsible
        className='item'
        trigger={[<div className='title'><h2>{question}</h2> <BsChevronRight /> </div> ]}
        triggerWhenOpen= {[<div style={{backgroundColor:'#1E1E1E', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', borderRadius:'5px'}}><h2>{question}</h2> <BsChevronDown /> </div> ]}>
        
        <p className='content'>
          {answer}
        </p>
        </Collapsible>
      )
    })}
    </div>
 
    <div className="subscribe_container">
      <h2>Subscribe to our Newsletter</h2>
      <small>Be the first to know Updates, Freebies and current activities within the Owletapp community</small>
      <form action="" className="subscribe">
        <input type="text" placeholder='Enter Your Name'/>
        <div className="sub-design">
        <input type="email" placeholder='Enter Your Email' className='email' />
        <input type="submit" value="Submit" className='submit' />
        </div>
        
      </form>
      <div className="circle"></div>
    </div>
  </section>
  <section id='faq' className='container faq_container'>
    <h2>Frequently Asked Questions</h2>
    <div className="accordion">
    {faq.map(({question, answer}) => {
      return (
        <Collapsible
        className='item'
        trigger={[<div className='title'><h2>{question}</h2> <BsChevronRight /> </div> ]}
        triggerWhenOpen= {[<div style={{backgroundColor:'#1E1E1E', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', borderRadius:'5px'}}><h2>{question}</h2> <BsChevronDown /> </div> ]}>
        
        <p className='content'>
          {answer}
        </p>
        </Collapsible>
      )
    })}
    </div>
  </section>
  
</div>   

  )
}

export default Info