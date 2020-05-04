console.log("第一題")
array1 = [[1,2,3],[4,3,5]];
array2 = [[2,2,2],[1,1,1]];
arrayAdd = [];
for(i = 0; i < 2; i++)
{
    arrayAdd[i] = [];
    for(j = 0; j < 3; j++)
    {
        arrayAdd[i][j] = array1[i][j] + array2[i][j];
    }
}
process.stdout.write("add([[1,2,3],[4,3,5]], [[2,2,2],[1,1,1]]) => ");
console.log(arrayAdd);
console.log();

console.log("第二題");
arrayNeg = [];
for(i = 0; i < 2; i++)
{
    arrayNeg[i] = [];
    for(j = 0; j < 3; j++)
    {
        arrayNeg[i][j] = (-1) * array1[i][j];
    }
}
process.stdout.write("Negative([[1,2,3],[4,3,5]]) => ")
console.log(arrayNeg);
console.log();

console.log("第三題");
arrayT = [];
for(i = 0; i < 3; i++)
{
    arrayT[i] = [];
    for(j = 0; j < 2; j++)
    {
        if(j == 0) arrayT[i][j] = array1[j][i];
        else arrayT[i][j] = array1[j][i];
    }
}
process.stdout.write("Transpose([[1,2,3],[4,3,5]]) => ")
console.log(arrayT);
