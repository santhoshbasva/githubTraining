var x =(1,[2,[3,[4,5]]]);
function len(x){
    let c = x.flat(Infinity);
    return c.length;

}
console.log(len(x));