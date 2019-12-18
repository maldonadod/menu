import { render, fireEvent, waitForElementToBeRemoved } from "@testing-library/react"
import constants from "./constants"

class ReactTestingLibraryRenderer {
  send(tree) {
    if (this.utils) {
      this.utils.rerender(tree)
    } else {
      this.utils = render(tree)
    }
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
  async choose(itemTitle) {
    const choosenItem = this.utils.getByText(itemTitle)
    fireEvent.click(choosenItem)
  }
  async confirmOrderIsShown() {
    const confirmOrder = await this.utils.findByTestId(constants.CONFIRM_ORDER_ID)
    expect(confirmOrder.querySelector("p").textContent).toEqual("Bife con papas, posta ?")
  }
  async confirmOrderIsNotShown() {
    const confirmOrder = this.utils.queryByTestId(constants.CONFIRM_ORDER_ID)
    expect(confirmOrder).toEqual(null)
  }
  dismissConfirmOrder() {
    const confirmOrder = this.utils.getByText("Close")
    fireEvent.click(confirmOrder)
  }
  continueConfirmOrder() {
    const thanksMessage = this.utils.queryByText("Thanks !!")
    expect(thanksMessage).toEqual(null)
    const confirmButton = this.utils.queryByText("Confirm")
    fireEvent.click(confirmButton)
  }
  thanksMessageIsShown() {
    this.utils.getByText("Thanks !!")
  }
  thanksMessageDissapear() {
    return waitForElementToBeRemoved(() => this.utils.queryByText("Thanks !!"))
  }
  menuIsNotShown() {
    const menu = this.utils.queryByTestId(constants.MENU_ID)
    expect(menu).toEqual(null)
  }
}

export default ReactTestingLibraryRenderer