import { render, fireEvent } from "@testing-library/react"
import constants from "./ui/constants"

class ReactTestingLibraryRenderer {
  send(tree) {
    if (this.utils) {
      this.utils.rerender(tree)
    } else {
      this.utils = render(tree)
    }
  }
  debug() {
    this.utils.debug()
  }
  async menuTitleEquals(message) {
    const home = await this.utils.findByTestId(constants.MENU_TITLE_ID)
    expect(home.textContent).toEqual(message)
  }
  async firstMainCourseTitleEquals(itemTitle) {
    const menu = await this.utils.findByTestId(constants.MENU_ITEMS_LIST_ID)
    expect(menu.children.item(0).textContent).toEqual(itemTitle)
  }
  async loadingMessageIsShown() {
    const loading = await this.utils.findByTestId(constants.LOADING_MENU_ID)
    expect(loading.textContent).toEqual("...")
  }
  async clickOn(itemTitle) {
    await this.firstMainCourseTitleEquals(itemTitle)
    const selectItem = this.utils.getByText(itemTitle)
    fireEvent.click(selectItem)
  }
  async order(itemTitle) {
    await this.orderConfirmationIsNotShown()

    await this.clickOn(itemTitle)
    
    await this.orderConfirmationIsShown()
    
    await this.closeOrderConfirmation()
    await this.orderConfirmationIsNotShown()

    await this.clickOn(itemTitle)

    return this.confirmConfirmOrder()
  }
  async orderConfirmationIsNotShown() {
    const confirmOrder = this.utils.queryByTestId(constants.CONFIRM_ORDER_ID)
    expect(confirmOrder).toEqual(null)
  }
  async orderConfirmationIsShown() {
    const confirmOrder = await this.utils.findByTestId(constants.CONFIRM_ORDER_ID)
    expect(confirmOrder.querySelector("p").textContent).toEqual("Bife con papas, posta ?")
  }
  closeOrderConfirmation() {
    const confirmOrder = this.utils.getByText("Close")
    fireEvent.click(confirmOrder)
  }
  async confirmConfirmOrder() {
    const thanksMessage = this.utils.queryByText("Thanks !!")
    expect(thanksMessage).toEqual(null)
    const confirmButton = this.utils.queryByText("Confirm")
    fireEvent.click(confirmButton)
    await this.orderConfirmationIsNotShown()
  }
  async orderWasTakenMessageIsShown() {
    const orderWasTaken = await this.utils.findByTestId(constants.ORDER_TAKEN_ID)
    expect(orderWasTaken.textContent).toEqual("Bife con papas, esta en proceso, gracias.")
  }
  menuHasBeenClosed() {
    const menu = this.utils.queryByTestId(constants.MENU_ID)
    expect(menu).toEqual(null)
  }
}

export default ReactTestingLibraryRenderer