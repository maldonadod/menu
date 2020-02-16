import main from "../../main"

class ApplicationRunner {
  constructor(renderer, menuService, orderService) {
    this.renderer = renderer
    this.menuService = menuService
    orderService.register = jest.fn(orderService.register)
    orderService.findTodaysOrderByUsername = jest.fn(orderService.findTodaysOrderByUsername)
    this.orderService = orderService
    main(this.renderer, this.menuService, orderService)
  }
  openMenu() {
    this.renderer.openMenu()
    return this.renderer
  }
  orderHaveBeenRegistered(order) {
    expect(this.orderService.register).toHaveBeenCalled()
  }
  queryOrderHaveBeenCalled() {
    expect(this.orderService.findTodaysOrderByUsername).toHaveBeenCalled()
  }
}

export default ApplicationRunner