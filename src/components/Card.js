import React from 'react';


export default function Card(props) {
  return (
    <div className="card" style={props.style}>
      <div className="card-body" style={{ border: '1px solid' }}>
        {props.children}
      </div>
    </div>
  )
}