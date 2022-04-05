
const data = [13, 18, 25, 2, 8, 10]

function findNumber(arr, target){
  
  if(arr.length===0) {
    return null
  }
  
  const first = arr.shift()
  const last = arr.pop()
  
  if(first===target||last===target) return true
  
  return findNumber(arr, target)
}

// driver code 
console.log(findNumber(data, 13))
