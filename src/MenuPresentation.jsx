import React from "react"
import ConfirmOrder from "./ConfirmOrder"
import MenuItem from "./MenuItem"
import constants from "./constants"

function MenuPresentation(props) {
  const { createOrder, hasOrder, items } = props
  const [selectedItem, openConfirmOrderDialog] = React.useState(null)
  if (hasOrder) {
    return (
      <section>
        <ThanksMessage />
      </section>
    )
  } else {
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
}

function ThanksMessage() {
  const [showMessage, setShowMessage] = React.useState(true)
  function dissapear() {
    setShowMessage(false)
  }
  setTimeout(dissapear, 1000)
  return showMessage
    ? <div>Thanks !!</div>
    : null
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

export default MenuPresentation