console.log('first')
// setTimeout is async
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')