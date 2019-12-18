import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import constants from "./constants"

function ConfirmOrder(props) {
  const description = props.itemTitle + ", posta ?"
  function onClick() {
    props.onConfirm()
    props.hide()
  }
  return (
    <div data-testid={constants.CONFIRM_ORDER_ID}>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={props.hide}>
          <Modal.Title>Confirm Order</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button> */}
          <Button variant="primary" onClick={onClick}>Confirm</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default ConfirmOrder