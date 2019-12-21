import ApplicationRunner from "./ApplicationRunner"
import ReactTestingLibraryRenderer from "./ReactTestingLibraryRenderer"
import FakeMenuService from "./FakeMenuService"

jest.setTimeout(30000);

function openMenu() {
  const menuService = new FakeMenuService()
  const renderer = new ReactTestingLibraryRenderer()
  const app = new ApplicationRunner(renderer, menuService)

  app.openMenu()

  return renderer
}

export default openMenu