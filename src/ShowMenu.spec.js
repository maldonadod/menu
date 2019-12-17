import ApplicationRunner from "./ApplicationRunner"
import ReactTestingLibraryRenderer from "./ReactTestingLibraryRenderer"
import FakeMenuService from "./FakeMenuService"

it("should show menu from menu service", async () => {
  const menuService = new FakeMenuService()
  const renderer = new ReactTestingLibraryRenderer()
  const app = new ApplicationRunner()
  
  app.openMenu(renderer, menuService)

  await renderer.loadingMessageIsShown()
  await renderer.menuTitleEquals("Today's Menu")
  await renderer.firstMainCourseTitleEquals("Bife con papas")
})
