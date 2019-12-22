import ReactUserInterface from "./ReactUserInterface";
import StoreManager from "./StoreManager";
import MenuPresenter from "./MenuPresenter";
import store from "./store"

function main(driver, menuService) {
  new MenuPresenter(
    new ReactUserInterface(driver),
    new StoreManager(menuService, store)
  )
}

export default main