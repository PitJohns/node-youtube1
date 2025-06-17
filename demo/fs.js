// File System

const { error } = require('console')
const { errorMonitor } = require('events')
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//    if(err) {
//     throw error
//    }

//    console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

fs.writeFile(filePath, 'Hello NODEJS!', err => {
    if (err) {
        throw err 
    }

    console.log('Файл создан')
})