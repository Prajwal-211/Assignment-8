function firstOccur(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let first;

    while(start <= end)
    {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == target)
        {
            first = mid;
            end = mid - 1;
        }
        else if(arr[mid] > target)
        {
            end = mid -1;
        }
        else
        {
            start = start + 1;
        }
    }

    return first;
}

let arr = [1,2,2,2,3,4];
console.log(firstOccur(arr, 2));

console.log(firstOccur([22,33,55,67,43], 67));