class MenuPresenter {
  constructor(ui, store) {
    this.ui = ui
    this.store = store
  }
  async render() {
    this.store.fetchMenu()
    this.ui.showMenu()
  }
}

export default MenuPresenter