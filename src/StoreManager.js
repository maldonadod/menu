class StoreManager {
  constructor(menuService, store) {
    this.menuService = menuService
    this.store = store
    this.events = {}
    store.subscribe(this.listener)
  }

  listener = () => {
    const state = this.store.getState()

    if (state.app.order) {
      this.events["registered-order"](state.app.menu, state.app.order)
    } else {
      if (state.app.isLoading) {
        this.events["loading"]()
      } else {
        this.events["loaded-menu"](state.app.menu)
      }
    }
  }

  on(evenyKey, listener) {
    this.events[evenyKey] = listener
  }

  postOrder(item) {
    const order = {
      description: `${item.title}, esta en proceso, gracias.`
    }
    this.store.dispatch({
      type: "ORDER_CONFIRM_SUCCESS",
      payload: order
    })
  }
  async fetchMenu() {
    this.store.dispatch({
      type: "FETCH_MENU_LOADING"
    })
    const items = await this.menuService.fetchMenuItems()
    this.store.dispatch({
      type: "FETCH_MENU_SUCCESS",
      payload: items
    })
  }
}

export default StoreManager