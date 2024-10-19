function moveZerosToEnd(arr){
    let nonZeroIndex = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== 0)
        {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    for(let i = nonZeroIndex; i < arr.length; i++)
    {
        arr[i] = 0;
    }
}

let arr = [0,1,0,3,0,12];

moveZerosToEnd(arr);

console.log(arr);