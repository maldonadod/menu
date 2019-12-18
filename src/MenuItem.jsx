import React from "react"

function MenuItem(props) {
  return (
    <div onClick={props.onClick}>
      {props.title}
    </div>
  )
}

export default MenuItem