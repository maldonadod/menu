import React from "react"
import { connect } from "react-redux"
import constants from "./constants"

function Home({ items = [] }) {

  return (
    <section>
      <h2 data-testid={constants.MENU_TITLE_ID}>Today's Menu</h2>
      <section data-testid={constants.MENU_ITEMS_LIST_ID}>
        {items.map(renderMenuItem)}
      </section>
    </section>
  )
}

function renderMenuItem(item, index) {
  return (
    <div key={index}>
      {item.title}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.app.menu
  }
}

export default connect(mapStateToProps)(Home)