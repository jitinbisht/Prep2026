

const createCounter = (initialValue) => {
  let count = initialValue

  return {
    increment: () => {
      count++;
      return count
    },
    decrement: () => {
      count--;
      return count
    },
    reset: () => {
      count = initialValue
      return count
    }
  }

}
let counter = createCounter(0)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.increment())




