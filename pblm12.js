const S1 = new Set([1,2,3]);
const S2 = new Set([4,5,6]);
const S3 = new Set([7,8,9]);
const S4 = new Set([...S1,...S2,...S3]);
console.log(S4);