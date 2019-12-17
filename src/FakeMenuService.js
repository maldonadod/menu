class FakeMenuService {
  async fetchMenuItems() {
    return [{
      title: "Bife con papas"
    }]
  }
}

export default FakeMenuService