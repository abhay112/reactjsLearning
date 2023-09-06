function merge(arr1,arr2){
  const mergedArray = [];
  let l1 = arr1.length;
  let l2 = arr2.length;
  let i = 0;
  let j = 0;
  if(l1<1){
    return arr2;
  }
  if(l2<1){
    return arr1;
  }
  while(l1||l2){
    if(!arr2[j]||arr1[i]<arr2[j]){
      mergedArray.push(arr1[i++]);
      l1--;
    }else{
      mergedArray.push(arr2[j++])
      l2--;
    }
  }
  console.log(mergedArray,'ans')
}






let arr1 = [50,70,90,90];
let arr2 = [70,80,85,100,120];
merge(arr1,arr2);

