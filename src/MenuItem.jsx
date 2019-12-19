import React from "react"
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className="menu-item" onClick={props.onClick}>
      {props.title}
    </div>
  )
}

export default MenuItem