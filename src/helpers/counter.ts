function* inc() {
  let index = 0

  while (true) {
    yield index++
  }
}

export const counter = inc()
