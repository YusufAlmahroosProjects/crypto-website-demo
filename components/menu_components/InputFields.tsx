import React from 'react'
import { Dropdown } from 'react-bootstrap'

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
  return (
  <Dropdown style = {props.style} className = {props.className}>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {props.name}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <>
        {
          props.options.map((option, index) => 
          (
            <Dropdown.Item key = {index} href = {option.link}>{option.name}</Dropdown.Item>
          ))}
      </>
    </Dropdown.Menu>
  </Dropdown>
  )
}
