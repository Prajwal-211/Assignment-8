function removeDuplicates(arr){
    if(arr.length === 0)
    {
        return 0;
    }

    let uniqueIndex = 0;

    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] !== arr[uniqueIndex])
        {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];

        }
    }

    return uniqueIndex + 1;
}

let arr = [1,1,2,2,2,3,4,4,5,5,5]
let newLength = removeDuplicates(arr);

console.log(newLength);
console.log(arr.slice(0,newLength));
