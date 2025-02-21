import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import '../../styles/input_fields.css'
import {theme_palette} from '../global_var/theme.ts';

type drobdownMenu =
{
  options: {
    name: string,
    link: string
  }[],
  name: string,
  style?: React.CSSProperties,
  className?: string,
}

export function InputSelect(props: drobdownMenu) 
{
  const [isHover, setIsHover]       = useState(false);
  const [hoverIndex, setHoverIndex] = useState<null | number>(null)
  return (
    <>
      <Dropdown style = {props.style} className = {props.className}>
        <Dropdown.Toggle style = {
          {
            backgroundColor: (isHover) ? 
            theme_palette.getRgba(theme_palette.primary, 1) : 
            theme_palette.getRgba(theme_palette.primary, 0) ,
            color: (isHover) ? theme_palette.white : theme_palette.getRgba(theme_palette.primary, 1),
            border: 'solid 0px blue',
            fontWeight: '600'
          }} 
          onMouseEnter={() => {setIsHover(true)}}
          onMouseLeave={() => {setIsHover(false)}}
          >
          {props.name}
        </Dropdown.Toggle>
        <Dropdown.Menu style = {
          {
            backgroundColor: theme_palette.primary,
          }}>
          <>
            {
              props.options.map((option, index) => 
              (
                <Dropdown.Item 
                key   = {index} 
                href  = {option.link}
                style = {
                  {
                    color: theme_palette.white,
                    backgroundColor: hoverIndex === index ? 
                    theme_palette.secondary:
                    "transparent",
                    transition: 'background-color 0.3 ease'
                  }}
                  onMouseEnter = {() => setHoverIndex(index)}
                  onMouseLeave = {() => setHoverIndex(null)}
                >
                  {option.name}
                </Dropdown.Item>
              ))}
          </>
        </Dropdown.Menu>
      </Dropdown>
    </>
    )
}

