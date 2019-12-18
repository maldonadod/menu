import React from "react"
import { connect } from "react-redux"
import MenuPresentation from "./MenuPresentation"
import constants from "./constants"
import "bootstrap/dist/css/bootstrap.min.css"

function Home(props) {
  const { createOrder, hasOrder } = props
  const { items, isLoading } = props
  return isLoading
    ? <LoadingIndicator />
    : <MenuPresentation
        items={items}
        createOrder={createOrder}
        hasOrder={hasOrder} />
}

function LoadingIndicator() {
  return (
    <div data-testid={constants.LOADING_MENU_ID}>...</div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.app.menu,
    isLoading: state.app.isLoading,
    hasOrder: state.app.hasOrder,
  }
}

export default connect(mapStateToProps)(Home)