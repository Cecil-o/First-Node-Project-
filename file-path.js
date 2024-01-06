// FILE PATH
const path = require('path')

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// to access the last file
const base = path.basename(filePath)
console.log(base)

// path.resolve, return an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)   