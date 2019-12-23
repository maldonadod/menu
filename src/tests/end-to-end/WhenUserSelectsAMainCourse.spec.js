import openMenu from "./openMenu"

const BIFE_CON_PAPAS = "Bife con papas"

describe("When user orders a main course", WhenUserOrdersMainCourse)

function WhenUserOrdersMainCourse() {
  let renderer;

  beforeEach(() => {
    renderer = openMenu()
  })

  it("should ask you to confirm your order", async () => {
    await renderer.order(BIFE_CON_PAPAS)
    await renderer.orderWasTakenMessageIsShown()
    await renderer.menuHasBeenClosed()
  })
}