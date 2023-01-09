// .sort() = this methode is used to arrange or sort arrays element either in ascebding or decending orders

const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['a', 'd', 'r', 'w', 'i', 'j'];

decend = arr.sort((a,b) => a> b ? -1 : 1);
console.log(decend);

ascend = alpha.sort ((a, b) => a> b ? 1 : -1);
console.log(ascend);