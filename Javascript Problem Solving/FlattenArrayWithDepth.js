const arr = [1,2,[3,[4]],5]
const depth = 1
// o/p: [1,2,3,4,5]


const flattenArr = (arr, depth=1) => {
  if(depth === 0) return arr
  let result = [];
  for(let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else {
      result.push(item)
    }
  }
  return result;
}

console.log(flattenArr(arr, depth))
