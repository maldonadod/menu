import React from "react"
import { connect } from "react-redux"
import MenuPresentation from "./MenuPresentation"
import constants from "./constants"
import "bootstrap/dist/css/bootstrap.min.css"

function Home(props) {
  const { items, isLoading, createOrder } = props
  return isLoading
    ? <LoadingIndicator />
    : <MenuPresentation
        items={items}
        createOrder={createOrder} />
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
  }
}

export default connect(mapStateToProps)(Home)