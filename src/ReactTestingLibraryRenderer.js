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
  menuTitleEquals(message) {
    this.homeSectionMessage = this.utils.getByTestId(constants.MENU_TITLE_ID).textContent
    expect(this.homeSectionMessage).toEqual(message)
  }
  async firstMainCourseTitleEquals(itemTitle) {
    const menu = await this.utils.findByTestId(constants.MENU_ITEMS_LIST_ID)
    expect(menu.children.item(0).textContent).toEqual(itemTitle)
  }
}

export default ReactTestingLibraryRenderer