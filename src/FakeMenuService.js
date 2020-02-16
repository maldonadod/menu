class FakeMenuService {
  async fetchMenuItems() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [{
      title: "Bife con papas"
    }, {
      title: "Bife con ensalada mixta"
    }, {
      title: "Panchitos"
    }]
  }
}

export default FakeMenuService