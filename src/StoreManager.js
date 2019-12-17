class StoreManager {
  constructor(menuService, store) {
    this.menuService = menuService
    this.store = store
  }
  async fetchMenu() {
    const items = await this.menuService.fetchMenuItems() 
    this.store.dispatch({
      type: "FETCH_MENU",
      payload: items
    })
  }
}

export default StoreManager