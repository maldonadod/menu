import ReactUserInterface from "./ui/ReactUserInterface";
import StoreManager from "./StoreManager";
import MenuPresenter from "./MenuPresenter";
import store from "./store"

function main(renderer, menuService) {
  new MenuPresenter(
    new ReactUserInterface(renderer),
    new StoreManager(menuService, store)
  )
}

export default main