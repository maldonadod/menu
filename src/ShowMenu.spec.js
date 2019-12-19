import ApplicationRunner from "./ApplicationRunner"
import ReactTestingLibraryRenderer from "./ReactTestingLibraryRenderer"
import FakeMenuService from "./FakeMenuService"
const BIFE_CON_PAPAS = "Bife con papas"

jest.setTimeout(30000);

function openMenu() {
  const menuService = new FakeMenuService()
  const renderer = new ReactTestingLibraryRenderer()
  const app = new ApplicationRunner(renderer, menuService)

  app.openMenu()

  return renderer
}

it("should show menu from menu service", async () => {
  const renderer = openMenu()

  await renderer.loadingMessageIsShown()
  await renderer.menuTitleEquals("Today's Menu")
  await renderer.firstMainCourseTitleEquals(BIFE_CON_PAPAS)
})

it("should ask you to confirm your order", async () => {
  const renderer = openMenu()

  await renderer.firstMainCourseTitleEquals(BIFE_CON_PAPAS)
  await renderer.confirmOrderIsNotShown()
  renderer.choose(BIFE_CON_PAPAS)
  await renderer.confirmOrderIsShown()
  await renderer.dismissConfirmOrder()
  await renderer.confirmOrderIsNotShown()
  renderer.choose(BIFE_CON_PAPAS)
  renderer.continueConfirmOrder()
  await renderer.orderWasTakenMessageIsShown()
  await renderer.confirmOrderIsNotShown()
  await renderer.menuIsNotShown()
})
