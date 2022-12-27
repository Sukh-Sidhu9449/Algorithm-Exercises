let arr = [3,4,-1,1,2];

arr.sort();
let j = 1;
for(let i=0; i<arr.length;i++){
    if(arr[i]>j){
        // arr[0] =arr[i]
        break;
    }
    if(arr[i] == j ){
        j++;
    }
}
console.log(j);