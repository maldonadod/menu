class FakeMenuService {
  async fetchMenuItems() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [{
      title: "Bife con papas"
    }]
  }
}

export default FakeMenuService