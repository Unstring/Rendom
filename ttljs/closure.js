function powerCreator(obj) {
    let fun = function(base) {
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return fun;
}

let o1 = {
    exp: 2
}
o1.exp = 3;
let squrar = powerCreator(o1);
let val = squrar(2);
console.log(val);



