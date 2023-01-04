 
// Function to return max sum such that
// no two elements are adjacent
function FindMaxSum(arr, n)
{
    let incl = arr[0];
    let excl = 0;
    let excl_new;
    
 
    for(let i = 1; i < n; i++)
    {
         
        // Current max excluding i
        excl_new = (incl > excl) ? incl : excl;
 
        // Current max including i
        incl = excl + arr[i];
        excl = excl_new;
    }
 
    // Return max of incl and excl
    return ((incl > excl) ? incl : excl);
}
 
// Input
let arr = [ 5, 5, 10, 100, 10, 5];
 
console.log(FindMaxSum(arr, arr.length));