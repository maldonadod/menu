import { cleanup } from "@testing-library/react"
import openMenu from "./openMenu"

const BIFE_CON_PAPAS = "Bife con papas"

describe("When user opens the menu", WhenUserOpensTheMenu)

function WhenUserOpensTheMenu() {

  let renderer;

  beforeEach(() => renderer = openMenu())

  afterEach(cleanup)

  it("should see the menu provided by menu service", async () => {
    await renderer.loadingMessageIsShown()
    await renderer.menuTitleEquals("Today's Menu")
    await renderer.firstMainCourseTitleEquals(BIFE_CON_PAPAS)
  })
}