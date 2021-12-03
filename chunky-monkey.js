function chunkArrayInGroups(arr, size) {
  let a=arr.length/size
  let b=[]
  for(let i=0;i<a;i++) {
    b.push(arr.splice(0,size))
  }
  return b
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);