import React from "react"
import ConfirmOrder from "./ConfirmOrder"
import MenuItem from "./MenuItem"
import constants from "./constants"
import { connect } from "react-redux"

function MenuPresentation(props) {
  const { createOrder, order, items } = props
  const [selectedItem, openConfirmOrderDialog] = React.useState(null)
  return order
    ? <ShowOrder description={order.description} />
    : <ShowOrderConfirmation
        items={items}
        openConfirmOrderDialog={openConfirmOrderDialog}
        selectedItem={selectedItem}
        createOrder={createOrder}
      />
}

function ShowOrderConfirmation({ items, openConfirmOrderDialog, selectedItem, createOrder }) {
  return (
    <section>
      <Menu items={items} onItemClicked={openConfirmOrderDialog} />
        {selectedItem && <ConfirmOrder
          onConfirm={() => createOrder(selectedItem)}
          itemTitle={selectedItem.title}
          hide={() => openConfirmOrderDialog(null)} />}
    </section>
  )
}

function ShowOrder({ description }) {
  return (
    <section>
      <section data-testid={constants.ORDER_TAKEN_ID}>
        {description}
      </section>
    </section>
  )
}

function Menu({ items, onItemClicked }) {
  function renderMenuItem(item, index) {
    return (
      <MenuItem
        key={index}
        title={item.title}
        onClick={() => onItemClicked(item)} />
    )
  }
  return (
    <section data-testid={constants.MENU_ID}>
      <h2 data-testid={constants.MENU_TITLE_ID}>Today's Menu</h2>
      <section data-testid={constants.MENU_ITEMS_LIST_ID}>
        {items.map(renderMenuItem)}
      </section>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    order: state.app.order
  }
}

export default connect(mapStateToProps)(MenuPresentation)