function prime(num){
    if(num <= 1) return false;

    if(num === 2) return true;

    if(num % 2 === 0) return false;

    for(let i = 3; i * i <= num; i += 2)
    {
        if(num % i === 0) return false;
    }

    return true;
}


/*if(prime(num) === true)
{
    console.log('$(num) is a prime number.')
}
else
{
    console.log('$(num) is not a prime number.')
}*/