import { render } from "@testing-library/react"
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
}

export default ReactTestingLibraryRenderer