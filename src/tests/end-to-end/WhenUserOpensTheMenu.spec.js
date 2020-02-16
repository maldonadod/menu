import { cleanup } from "@testing-library/react"
import openMenu from "./openMenu"

const DISH_TITLE = "Bife con papas"

describe(
  "When user opens the menu",
  function TestWhenUserOpensTheMenu() {

  let app;

  beforeEach(() => {
    app = openMenu()
    app.openMenu()
  })

  afterEach(cleanup)

  it("should see the menu provided by menu service", async () => {
    await app.loadingMessageIsShown()
    await app.menuTitleEquals("Today's Menu")
    await app.firstMainCourseTitleEquals(DISH_TITLE)
  })
})