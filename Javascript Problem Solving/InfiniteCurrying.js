// Infinite currying

const sum = (...args) => {
  let total = args.reduce((acc,curr) => acc + curr, 0)
  const curried = (...nextArgs) => {
    if(nextArgs.length === 0) {
      return total
    }
    return sum(total, ...nextArgs)
  }

  return curried;
}


// console.log(sum(1)(2)(3)())
console.log(sum(1,2)(3)(4)())