let output = [];
let count = 1;
let i = 0;


function fizzBuzz() {
    if (((count % 3) === 0) && ((count % 5 === 0))) {
        output.push("FizzBuzz");
        count++;
        console.log(output);
        return;
    }
    if ((count % 3) === 0) {
        output.push("Fizz");
        count++;
        console.log(output);
        return;
    }
    
    if ((count % 5) === 0) {
        output.push("Buzz");
        count++;
        console.log(output);
        return;
    }
    output.push(count);
    count++;
    console.log(output);

}

while (i < 100000) {
    i++;
    fizzBuzz();
}
