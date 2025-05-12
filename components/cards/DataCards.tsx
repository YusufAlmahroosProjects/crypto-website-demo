import React from 'react'
import '../../styles/data_cards.css'

type dataCard = 
{
  header: 
  {
    title: string,
    icon?: HTMLElement,
    short: string,
  }
  body: 
  {
    currentValue: number,
    groth: number,
    marketCap: number,
    volume24: number,
  }
  graph?: 
  {
    color: string,
    dataset: []
  }
}

export function DataCard (props: dataCard) 
{
  return (
    <div className='card-container'>
      <div className='data-card-header'>
        <div className='data-card-text'>{props.header.title}</div>
        <div className='data-card-text'>{props.header.short}</div>
      </div>
      <div className='data-card-body'>
        <div className='data-card-body-el data-card-body-text'><span>Current Value: </span>{props.body.currentValue}</div>
        <div className='data-card-body-el data-card-body-text'><span>Groth: </span>{props.body.groth}</div>
        <div className='data-card-body-el data-card-body-text'><span>Market Cap: </span>{props.body.marketCap}</div>
        <div className='data-card-body-el data-card-body-text'><span>Volume 24: </span>{props.body.volume24}</div>
      </div>
    </div>
  )
}
