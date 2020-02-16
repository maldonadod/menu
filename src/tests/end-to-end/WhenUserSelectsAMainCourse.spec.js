import openMenu from "./openMenu"
import { cleanup } from "@testing-library/react";

const MAIN_COURSE_TITLE = "Bife con papas"

describe(
  "When user orders a main course successfully",
  function TestWhenUserOrdersMainCourse() {

  let app;

  beforeEach(() => {
    app = openMenu()
    app.openMenu()
  })
  afterEach(cleanup)

  it("should show that the order was taken", async () => {
    await app.order(MAIN_COURSE_TITLE)
    await app.orderWasTakenMessageIsShown()
    await app.menuHasBeenClosed()
  })
})

describe(
  "When user has registered an order and re-enters to the app",
  function TestWhenUserHasRegisteredAnOrder() {

  let app;

  beforeEach(() => {
    app = openMenu()
    app.openMenu()
  })
  afterEach(cleanup)

  it("should show work in progress message of the registered order", async () => {
    await app.order(MAIN_COURSE_TITLE)

    app.app.orderHaveBeenRegistered()

    await app.orderWasTakenMessageIsShown()
    await app.reload()

    app = openMenu(false)
    app.app.queryOrderHaveBeenCalled()

    await app.orderWasTakenMessageIsShown()
  })
})