import React, { useState } from 'react'
import '../styles/header.css'
import Logo from '../resource/Plus500-Logo.png'
import { DropdownSelect, InputSelect } from '../components/menu_components/InputFields'
import 'bootstrap-icons/font/bootstrap-icons.css';

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

const languagesOptions = [
  { name: 'English' , short: 'EN'},
  { name: 'Deutsch' , short: 'DE'},
  { name: 'Arabic'  , short: 'AR'},
]
export default function Header() 
{
  const [language, setLanguage] = useState("EN");

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>)
  {
    const selected = languagesOptions.find(item => item.name === event.target.value)
    if(selected)
    {
      setLanguage(selected.short);
    }
  }

  return (
    <div className = 'header-container' >
      <img src={Logo} className ='header-logo'/>
      <nav className='header-nav'>
        <DropdownSelect name = 'Market' options =  {marketOptions}/>
        <DropdownSelect name = 'Training' options = {traningOptions}/>
        <DropdownSelect name = 'Company' options = {companyOptions}/>
        <DropdownSelect name = 'Learn' options = {learnOptions}/>
      </nav>
      <div className='header-actions'>
        <button className='header-text-button'>
          Login
        </button>
        <InputSelect 
          options = {languagesOptions} 
          name = {language}
          onChange={handleLanguageChange}/>
        <i className="bi bi-search header-search-icon"></i>
        <button className='header-trading-btn'>
          Start  Trading
        </button>
      </div>
    </div>
  )
}
