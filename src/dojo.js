const DEFAULT_SENSEI = 'Diego Sanchez'

class Dojo {
  constructor(sensei = DEFAULT_SENSEI) {
    Object.assign(
      this,
      {
        sensei,
      }
    )
  }

  getSensei() {
    return this.sensei
  }
}

export default Dojo
