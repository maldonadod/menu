class OrderService {
  register(order) {
    localStorage.setItem("order-1", JSON.stringify(order))
  }
  findTodaysOrderByUsername() {
    return JSON.parse(localStorage.getItem("order-1"))
  }
}

export default OrderService