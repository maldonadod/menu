class StoreManager {
  constructor(menuService, store) {
    this.menuService = menuService
    this.store = store
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