import ApplicationRunner from "./ApplicationRunner"
import ReactTestingLibraryRenderer from "./ReactTestingLibraryRenderer"
import FakeMenuService from "../../FakeMenuService"
import OrderService from "../../OrderService"

function openMenu() {
  const menuService = new FakeMenuService()
  const orderService = new OrderService()
  const renderer = new ReactTestingLibraryRenderer()
  const app = new ApplicationRunner(renderer, menuService, orderService)

  renderer.app = app

  return renderer
}

export default openMenu