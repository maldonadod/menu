import React from "react"
import Home from "./Home"
import { Provider } from "react-redux"

class ReactUserInterface {
  constructor(driver, store) {
    this.driver = driver
    this.store = store
  }
  async showMenu(createOrder) {
    this.driver.send(
      <Provider store={this.store}>
        <Home createOrder={createOrder} />
      </Provider>
    )
  }
}

export default ReactUserInterface