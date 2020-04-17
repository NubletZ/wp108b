console.log("第一個習題")
var factorial = 1;
for(i=1; i<=10; i++){
    factorial *= i;
}
console.log("10! =", factorial)
console.log()

console.log("第二個習題")
for(i=1; i<=9; i++)
{
    for(j=1; j<=9; j++)
    {
        process.stdout.write(j + "*" +  i + "=" + j*i + "\t");
    }
    process.stdout.write("\n");
}
console.log()

console.log("第三個習題")
const readline = require("readline");
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});
console.log("Please set the range for the list of prime number(s)")
rl.question("smallest number :", function(min) 
{
    rl.question("biggest number :", function(max) 
    {
        console.log("list of prime number from", min, "to", max, ":");
        prime = 1, count = 0;
        for(i=parseInt(min); i <= parseInt(max); i++)
        {
            for(j=1; j <= i/2; j++)
            {
                count = i%j;
                if(count == 0) prime++;
            }
            if(prime <= 2 && i > 1) console.log(i);
            prime = 1;
        }
        rl.close();
    });
});

rl.on("close", function() 
{
    console.log("\nAll Finished!");
    process.exit(0);
});
