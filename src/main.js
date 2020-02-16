import ReactUserInterface from "./ui/ReactUserInterface";
import StoreManager from "./StoreManager";
import MenuPresenter from "./MenuPresenter";
import store from "./store"

function main(renderer, menuService, orderService) {
  new MenuPresenter(
    new ReactUserInterface(renderer),
    new StoreManager(store, menuService, orderService),
    orderService
  )
}

export default main