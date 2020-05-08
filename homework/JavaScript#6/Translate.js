var vocab = {一隻 : 'a', 貓 : 'cat', 狗 : "dog", 這隻 : "the", 追 : "chase"}

var eng = [];

function translate(x){
    for(let i in x){
        eng.push(vocab[x[i]]);
    }
}

translate(process.argv.slice(2));
console.log(eng);