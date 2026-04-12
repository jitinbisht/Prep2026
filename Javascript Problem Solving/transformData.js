const data = [
  { id: 1, name: 'itemA' },
  { id: 2, name: 'itemB' },
  { id: 1, name: 'itemC' },
  { id: 3, name: 'itemD' },
  { id: 2, name: 'itemE' },
  { id: 3, name: 'itemF' },
  { id: 4, name: 'itemG' },
  { id: 2, name: 'itemH' }
]

// o/p:
// {
//   1: [{ id: 1, name: 'itemA' }, { id: 1, name: 'itemC' }],
//   2: [{ id: 2, name: 'itemB' }, { id: 2, name: 'itemE' }, { id: 2, name: 'itemH' }],
//   3: [{ id: 3, name: 'itemD' }, { id: 3, name: 'itemF' }],
//   4: [{ id: 4, name: 'itemG' }]
// }


  const transformedData = data.reduce((acc,currItem) => {
      if(!acc[currItem.id]){
        acc[currItem.id] = []
      }
      acc[currItem.id].push(currItem)
      return acc
  }, {})

  console.log(transformedData)
