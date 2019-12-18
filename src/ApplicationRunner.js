import main from "./main"

class ApplicationRunner {
  constructor(renderer, menuService) {
    this.renderer = renderer
    this.menuService = menuService
  }
  openMenu() {
    main(this.renderer, this.menuService)
  }
}

export default ApplicationRunner