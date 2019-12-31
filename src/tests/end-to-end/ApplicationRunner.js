import main from "../../main"

class ApplicationRunner {
  constructor(renderer, menuService) {
    this.renderer = renderer
    this.menuService = menuService
    main(this.renderer, this.menuService)
  }
  openMenu() {
    this.renderer.openMenu()
    return this.renderer
  }
}

export default ApplicationRunner