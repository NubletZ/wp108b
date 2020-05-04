console.log("第一題");
var data = [1,2,3,4,5];
var sum = 0;
for(i = 0; i < data.length; i++){
    sum += data[i];
    mean = sum / data.length;
}
console.log("mean[(1,2,3,4,5]) => " + mean);
console.log();

console.log("第二題");
sum2 = 0;
for(i = 0; i < data.length; i++){
    sum2 += Math.pow(data[i] - mean, 2);
    sd = Math.sqrt(sum2 / data.length);
}
console.log("sd[(1,2,3,4,5)] => " + sd);
console.log();

console.log("第三題");
var cont = 45;
r = 1;
c = 0;
var array=[];
while(cont != 1){
    r++;
    if(cont % r == 0){
        cont /= r;
        array[c] = r;
        r = 2;
        c++;
    }
}
console.log("factor(45) => " + "[" + array + "]");
