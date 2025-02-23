import React from 'react'
import '../styles/body.css'
import {DataCard} from './cards/DataCards.tsx'

export default function Body() 
{
  return (
    <div className='body-container'>
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
      </div>        
    </div>
  )
}
