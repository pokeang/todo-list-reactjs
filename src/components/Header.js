import React from 'react'

export default function Header(props) {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}
