import React from 'react';
import Header from './Header';

export type MyObj = 
{
  name: string,
  age: number,
}
export default function Mainwindow(props: MyObj) 
{
  return (  
    <div>
      <Header/>
    </div>
  )
} 
