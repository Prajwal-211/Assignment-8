function Count(arr, target){

    let count = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == target)
        {
            count = count + 1;
        }
    }

    return count;
}

let arr = [5,7,7,8,8,10];
console.log(Count(arr, 8));

console.log(Count([1,2,3,4,5,6,5,4,6,5,5], 5));