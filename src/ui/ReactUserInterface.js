import React from "react"
import LoadingIndicator from "./LoadingIndicator"
import MenuPresentation from "./MenuPresentation"
import ShowOrder from "./ShowOrder"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';

class ReactUserInterface {
  constructor(renderer) {
    this.renderer = renderer
  }
  showLoading = () => {
    this.renderer.send(<LoadingIndicator />)
  }
  showMenu = (items, createOrder) => {
    this.renderer.send(
      <MenuPresentation
        items={items}
        createOrder={createOrder}
      />
    )
  }
  showOrder = (items, createOrder, order) => {
    this.renderer.send(
      <MenuPresentation
        order={order}
        items={items}
        createOrder={createOrder}
      />
    )
  }
  showHome = (openMenu, registeredOrder) => {
    this.renderer.send(
      <div>
        Home
        {registeredOrder && <ShowOrder description={registeredOrder.description} />}
        <button onClick={openMenu}>open menu</button>
      </div>
    )
  }
}

export default ReactUserInterface