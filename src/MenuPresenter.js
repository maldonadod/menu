class MenuPresenter {
  constructor(ui, store) {
    this.ui = ui
    this.store = store

    store.on("loading", this.showLoading)
    store.on("loaded-menu", this.showMenu)
    store.on("registered-order", this.showOrder)

    this.ui.showHome(() => this.store.fetchMenu())
  }
  onOrderConfirm = item => {
    this.store.postOrder(item)
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