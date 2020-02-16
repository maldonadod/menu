class MenuPresenter {
  constructor(ui, store, orderService) {
    this.ui = ui
    this.store = store

    store.on("loading", this.showLoading)
    store.on("loaded-menu", this.showMenu)
    store.on("registered-order", this.showOrder)

    const order = orderService.findTodaysOrderByUsername()

    this.ui.showHome(() => this.store.fetchMenu(), order)
  }
  onOrderConfirm = item => {
    this.store.registerOrder(item)
  }
  showOrder = (items, order) => {
    this.ui.showOrder(items, this.onOrderConfirm, order)
  }
  showLoading = () => {
    this.ui.showLoading()
  }
  showMenu = (items) => {
    this.ui.showMenu(items, this.onOrderConfirm)
  }
}

export default MenuPresenter