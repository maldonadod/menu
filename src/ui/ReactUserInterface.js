import React from "react"
import LoadingIndicator from "./LoadingIndicator"
import MenuPresentation from "./MenuPresentation"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';

class ReactUserInterface {
  constructor(driver) {
    this.driver = driver
  }
  showLoading = () => {
    this.driver.send(<LoadingIndicator />)
  }
  showMenu = (items, createOrder) => {
    this.driver.send(
      <MenuPresentation
        items={items}
        createOrder={createOrder}
      />
    )
  }
  showOrder = (items, createOrder, order) => {
    this.driver.send(
      <MenuPresentation
        order={order}
        items={items}
        createOrder={createOrder}
      />
    )
  }
}

export default ReactUserInterface