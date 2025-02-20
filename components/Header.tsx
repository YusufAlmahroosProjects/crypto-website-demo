import React from 'react'
import '../styles/header.css'
import Logo from '../resource/Plus500-Logo.png'
import { InputSelect } from '../components/menu_components/InputFields'

const marketOptions = [
  {name: 'CFGs'        , link: '#'}, 
  {name: 'Crypto'      , link: '#'},
  {name: 'Indices'     , link: '#'},
  {name: 'Forex'       , link: '#'},
  {name: 'Commodities' , link: '#'},
  {name: 'Shares'      , link: '#'},
  {name: 'Options'     , link: '#'},
  {name: 'ETFs'        , link: '#'},
  {name: 'All Markets' , link: '#'},
]

const traningOptions = [
 {name: 'Premium Service' , link: '#'},
 {name: 'Fees & Charges'  , link: '#'},
 {name: 'ESG'             , link: '#'},
]

const companyOptions = [
  { name: 'About Us'            , link: '#' },
  { name: 'Plus 500 reviews'    , link: '#' },
  { name: 'Affiliates'          , link: '#' },
  { name: 'Investor relations'  , link: '#' },
  { name: 'Cookies and Privacy' , link: '#' },
];

const learnOptions = [
  { name: 'Trading Academy'          , link: '#' },
  { name: 'News and Market Insights' , link: '#' },
  { name: '+insights'                , link: '#' },
  { name: 'Economic Calendar'        , link: '#' },
];

export default function Header() 
{
  return (
    <div className = 'container'>
      <img src={Logo} className='header-logo'/>
      <nav className='header-nav'>
        <InputSelect name = 'Market' options =  {marketOptions}/>
        <InputSelect name = 'Training' options = {traningOptions}/>
        <InputSelect name = 'Company' options = {companyOptions}/>
        <InputSelect name = 'Learn' options = {learnOptions}/>
      </nav>
      <div className='header-actions'>
        <button>
          Login
        </button>
        <button>
          EN
        </button>
        <button>
          Search
        </button>
        <button>
          Start  Trading
        </button>
      </div>
    </div>
  )
}
