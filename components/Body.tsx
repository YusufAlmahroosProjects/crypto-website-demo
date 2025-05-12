import React from 'react'
import '../styles/body.css'
import {DataCard} from './cards/DataCards.tsx'

function BodyCards()
{
  return (
    <div className='body-hero'>
      <DataCard 
        header = {
          {
            title: 'Bitcoin',
            short: 'BTN'
          }}
        body = {
          {
            currentValue: 4000,
            groth: 200,
            marketCap: 8000,
            volume24: 245
          }}/>
      <DataCard 
        header = {
          {
            title: 'Ethereum',
            short: 'ETH'
          }}
        body = {
          {
            currentValue: 2500,
            groth: 150,
            marketCap: 3000,
            volume24: 1200
          }}/>
      <DataCard 
        header = {
          {
            title: 'Ripple',
            short: 'XRP'
          }}
        body = {
          {
            currentValue: 0.75,
            groth: 0.05,
            marketCap: 4000,
            volume24: 900
          }}/>
      <DataCard 
        header = {
          {
            title: 'Cardano',
            short: 'ADA'
          }}
        body = {
          {
            currentValue: 1.2,
            groth: 0.1,
            marketCap: 5000,
            volume24: 850
          }}/>
      <DataCard 
        header = {
          {
            title: 'Solana',
            short: 'SOL'
          }}
        body = {
          {
            currentValue: 90,
            groth: 10,
            marketCap: 15000,
            volume24: 1100
          }}/>
      <DataCard 
        header = {
          {
            title: 'Polkadot',
            short: 'DOT'
          }}
        body = {
          {
            currentValue: 6.5,
            groth: 0.4,
            marketCap: 7000,
            volume24: 600
          }}/>
      </div>        
  )
}
export default function Body() 
{
  return (
    <div className='body-container'>
      <BodyCards/>
      <hr className='body-separator'/>
    </div>
  )
}
