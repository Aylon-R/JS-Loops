function fizzBuzz(to){
    let index=1;
    while(true)
    {
        if(index%3 ===0)
        {
            if(index%5===0)
                console.log("fizz buzz");
            else
                console.log("fizz");
        }
        else
        if(index%5===0)
            console.log("buzz");
        else
        console.log(index);
    if (index>=to)
        break
    index++
    }
}

fizzBuzz(150)