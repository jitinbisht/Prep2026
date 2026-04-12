const arr = [1,2,[3,[4]],5]

// o/p: [1,2,3,4,5]

//Using Reduce
const flattenArr = (arr) => 
  arr.reduce((acc,curr) => {
    if(Array.isArray(curr)){
      acc.push(...flattenArr(curr))
    } else {
      acc.push(curr)
    }
  return acc
  },[])


//without reduce

const flattenArr = (arr) => {
  let result = [];
  for(let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item))
    } else {
      result.push(item)
    }
  }
  return result;
}

console.log(flattenArr(arr))
