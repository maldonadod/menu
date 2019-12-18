class MenuPresenter {
  constructor(ui, store) {
    this.ui = ui
    this.store = store
  }
  async render() {
    this.store.fetchMenu()
    const onOrderConfirm = (item) => {
      this.store.postOrder(item)
    }
    this.ui.showMenu(onOrderConfirm)
  }
}

export default MenuPresenter