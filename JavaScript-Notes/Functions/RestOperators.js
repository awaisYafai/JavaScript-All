function sum(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
}
console(sum(0.1, 20, 30, 1));