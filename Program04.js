function secondLargestNumber(arr){

    if(arr.length < 2)
    {
        return "Array must contain at least 2 elements."
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > largest)
        {
            secondLargest = largest;

            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest)
        {
            secondLargest = arr[i];

        }
    }

    return secondLargest;

}

console.log(secondLargestNumber([1,2,3,4,5,6]));