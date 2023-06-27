import React from 'react'

export default function Helmet(props) {
    document.title = 'FoodApp -' + props.title
    
    return (
      <div > {props.children}</div>
    )
}
